<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { viewerSize, minViewerSize } from "~/defines/viewer";

const svgSize = ref(viewerSize);
const viewer = ref(null);

onMounted(() => {
  const calcViewerSize = (baseWidth: number, baseHeight: number) => {
    const targetSize = baseWidth < baseHeight ? baseWidth : baseHeight;
    const viewerScale = targetSize / viewerSize;
    // NOTE viewer領域に対する割合
    const baseScale = 0.9;

    const scaledViewerSize = viewerSize * viewerScale * baseScale;

    return scaledViewerSize < minViewerSize ? minViewerSize : scaledViewerSize;
  };

  const viewerObserver = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
      const { width, height } = entry.contentRect;
      svgSize.value = calcViewerSize(width, height);
    });
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
      class="viewer-svg"
      :width="svgSize"
      :height="svgSize"
      :viewBox="`0 0 ${viewerSize} ${viewerSize}`"
    >
      <Floor :x="0" :y="0" />
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
