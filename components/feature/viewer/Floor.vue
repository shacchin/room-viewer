<script lang="ts" setup>
import { ref } from "vue";
import { addCursorStyle, removeCursorStyle } from "~/libs/cursor-handler";
import { viewerSize, clipedImageCircum } from "~/defines/viewer";

const props = defineProps<{
  position: { x: number; y: number };
  viewerPosition: { x: number; y: number };
  viewerScale: number;
  move: (x: number, y: number) => void;
}>();

const viewBox = ref(clipedImageCircum.floor);
const isDragging = ref(false);
const dragOffset = ref({ x: 0, y: 0 });

const floor = ref<HTMLElement | null>(null);

const startMoveFloor = (event: MouseEvent) => {
  addCursorStyle("grabbing");

  dragOffset.value = {
    x: event.offsetX / props.viewerScale - props.position.x,
    y: event.offsetY / props.viewerScale - props.position.y,
  };
  isDragging.value = true;

  const judgeMinMax = (value: number, key: "x" | "y") => {
    const lengthKey = key === "x" ? "width" : "height";

    if (value < 0) return 0;

    const maxValue = viewerSize - clipedImageCircum.floor[lengthKey];
    if (value > maxValue) return maxValue;

    return value;
  };

  const moveFloor = (event: MouseEvent) => {
    const floorSvg = floor.value;
    if (!floorSvg || !isDragging.value) return;

    const x = (event.pageX - props.viewerPosition.x) / props.viewerScale - dragOffset.value.x;
    const y = (event.pageY - props.viewerPosition.y) / props.viewerScale - dragOffset.value.y;

    props.move(judgeMinMax(x, "x"), judgeMinMax(y, "y"));
  };

  const removeEvents = () => {
    removeCursorStyle();

    document.removeEventListener("mousemove", moveFloor);
    document.removeEventListener("mouseup", removeEvents);

    dragOffset.value = {
      x: 0,
      y: 0,
    };
    isDragging.value = false;
  };

  // NOTE カーソルが範囲外に出た場合も機能してほしいためdocument.addEventListenerする
  document.addEventListener("mousemove", moveFloor);
  document.addEventListener("mouseup", removeEvents);
};
</script>

<template>
  <svg
    ref="floor"
    :x="props.position.x"
    :y="props.position.y"
    :width="viewBox.width"
    :height="viewBox.height"
    :viewBox="`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`"
    class="floor"
  >
    <RoomImage clip-path-id="clip-floor" />
    <svg width="0" height="0">
      <defs>
        <clipPath id="clip-floor">
          <path
            d="M40.773,11.313L91.682,12.09L107.147,29.312L107.302,57.018L95.897,59.265L95.58,92.592L39.888,91.191L40.773,11.313Z"
          />
        </clipPath>
      </defs>
    </svg>
    <!-- NOTE マウスイベント取得用rect  -->
    <rect
      id="floorRect"
      :x="viewBox.x"
      :y="viewBox.y"
      :width="viewBox.width"
      :height="viewBox.height"
      fill="transparent"
      @mousedown.left="startMoveFloor"
    />
  </svg>
</template>

<style lang="scss" scoped>
.floor {
  cursor: grab;

  :active {
    cursor: grabbing;
  }
}
</style>
