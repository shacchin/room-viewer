<script lang="ts" setup>
const props = defineProps({
  clipPathId: String,
});
</script>

<template>
  <image
    xlink:href="/assets/images/topview.png"
    width="130"
    height="130"
    :clip-path="props.clipPathId && `url(#${props.clipPathId})`"
  />
</template>

<style lang="scss" scoped></style>
