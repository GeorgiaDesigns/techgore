import ShopActionTypes from "./card.types";

export const addItem = (item) => ({
  type: ShopActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: ShopActionTypes.REMOVE_ITEM,
  payload: item,
});
