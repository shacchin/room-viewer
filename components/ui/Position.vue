<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{
  label: string;
  position: { x: number; y: number };
}>();

// NOTE 表示用の値として小数点第二位までのものを用意
const roundedPosition = computed(() => ({
  x: Math.round(props.position.x * 100) / 100,
  y: Math.round(props.position.y * 100) / 100,
}));
</script>
<template>
  <h3>{{ label }}</h3>
  <div>x: {{ roundedPosition.x }} px</div>
  <div>y: {{ roundedPosition.y }} px</div>
</template>
<style lang="scss" scoped></style>
