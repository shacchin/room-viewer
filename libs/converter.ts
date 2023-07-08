import { ItemName } from "~/types/item";

export const convertItemNameToJp = (itemName: ItemName) => {
  const itemNameJp = {
    floor: "床",
  } as const;

  return itemNameJp[itemName];
};
