<script lang="ts" setup>
import { ref, onMounted, nextTick } from "vue";
import { usePositionsStore } from "~/store/positions";
import { viewerSize, minViewerSize } from "~/defines/viewer";

const svgSize = ref(viewerSize);
const viewerScale = ref(1);
const svg = ref<HTMLElement | null>(null);
const viewer = ref<HTMLElement | null>(null);
const svgPosition = ref({ x: 0, y: 0 });

const positionsStore = usePositionsStore();

const moveFloor = (x: number, y: number) => {
  positionsStore.setPosition("floor", { x, y });
};

onMounted(() => {
  const calcViewerSize = (baseWidth: number, baseHeight: number) => {
    const targetSize = baseWidth < baseHeight ? baseWidth : baseHeight;
    // NOTE viewer領域に対する割合
    const baseScale = 0.9;
    viewerScale.value = (targetSize / viewerSize) * baseScale;

    const scaledViewerSize = viewerSize * viewerScale.value;

    return scaledViewerSize < minViewerSize ? minViewerSize : scaledViewerSize;
  };

  const viewerObserver = new ResizeObserver((entries) => {
    Promise.all(
      entries.map(async (entry) => {
        const { width, height } = entry.contentRect;
        svgSize.value = calcViewerSize(width, height);

        // リサイズ後のsvgタグ情報が必要なためnextTick
        await nextTick();
        if (svg.value) {
          const { x, y } = svg.value.getBoundingClientRect();
          svgPosition.value.x = x;
          svgPosition.value.y = y;
        }
      })
    );
  });

  if (viewer.value) {
    // NOTE 画面のサイズに応じてviewerのサイズを変更させる
    viewerObserver.observe(viewer.value);
  }
});
</script>

<template>
  <div ref="viewer" class="viewer">
    <svg
      ref="svg"
      class="viewer-svg"
      :width="svgSize"
      :height="svgSize"
      :viewBox="`0 0 ${viewerSize} ${viewerSize}`"
    >
      <Floor
        :position="positionsStore.positions.floor"
        :viewerPosition="svgPosition"
        :move="moveFloor"
        :viewerScale="viewerScale"
      />
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.viewer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.viewer-svg {
  border: 1px solid $color-text;
}
</style>
