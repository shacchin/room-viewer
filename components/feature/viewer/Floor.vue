<script lang="ts" setup>
import { ref } from "vue";
import { clipedImageCircum } from "~/defines/viewer";

const { floor } = clipedImageCircum;
const viewBox = ref({
  x: floor.x,
  y: floor.y,
  width: floor.width,
  height: floor.height,
});

const props = defineProps({
  x: Number,
  y: Number,
});
</script>

<template>
  <svg
    :x="props.x"
    :y="props.y"
    :width="viewBox.width"
    :height="viewBox.height"
    :viewBox="`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`"
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
    <!-- NOTE マウスイベント取得用rect いらないかも？ -->
    <!-- <rect
      :x="viewBox.x"
      :y="viewBox.y"
      :width="viewBox.width"
      :height="viewBox.height"
      fill="transparent"
    /> -->
  </svg>
</template>

<style lang="scss" scoped></style>
