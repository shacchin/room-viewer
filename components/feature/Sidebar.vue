import { usePositionsStore } from '../../store/positions';
<script lang="ts" setup>
import { usePositionsStore } from "~/store/positions";
import { convertItemNameToJp } from "~/libs/converter";

const positionsStore = usePositionsStore();
</script>
<template>
  <div class="sidebar">
    <h2>座標</h2>
    <ul>
      <li v-for="(position, key) in positionsStore.positions" :key="key">
        <Position :label="convertItemNameToJp(key)" :position="position" />
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.sidebar {
  padding: 1rem;
}
</style>
