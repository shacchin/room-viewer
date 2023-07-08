<script lang="ts" setup>
import { computed } from "vue";
import { ItemPosition } from "~/types/item";

const props = defineProps<{
  label: string;
  position: ItemPosition;
}>();

// NOTE 表示用の値として小数点第二位までのものを用意
const roundedPosition = computed(() => ({
  x: Math.round(props.position.x * 100) / 100,
  y: Math.round(props.position.y * 100) / 100,
}));
</script>
<template>
  <h3>{{ label }}</h3>
  <div class="point">
    <span class="point-label">X座標 :</span>
    <span class="point-value">{{ roundedPosition.x }}</span>
    <span>px</span>
  </div>
  <div class="point">
    <span class="point-label">Y座標 :</span>
    <span class="point-value">{{ roundedPosition.y }}</span>
    <span>px</span>
  </div>
</template>
<style lang="scss" scoped>
.point {
  display: flex;
  justify-content: space-between;
  width: 140px;

  .point-label {
    margin-right: 0.5rem;
  }

  .point-value {
    flex: 1;
  }
}
</style>
