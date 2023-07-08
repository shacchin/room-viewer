import { defineStore } from "pinia";

type PositionTarget = "floor";

const initialPosition = { x: 0, y: 0 };

export const usePositionsStore = defineStore("positions", () => {
  const positions = ref({ floor: initialPosition });

  const setPosition = (target: PositionTarget, position: { x: number; y: number }) => {
    positions.value[target] = position;
  };

  return { positions, setPosition };
});
