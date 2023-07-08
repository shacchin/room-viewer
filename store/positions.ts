import { defineStore } from "pinia";
import { ItemName, ItemPosition } from "~/types/item";

const initialPosition = { x: 0, y: 0 };

export const usePositionsStore = defineStore("positions", () => {
  const positions = ref({ floor: initialPosition });

  const setPosition = (target: ItemName, position: ItemPosition) => {
    positions.value[target] = position;
  };

  return { positions, setPosition };
});
