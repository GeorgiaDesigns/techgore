import SHOP_DATA from "./data";
import ShopActionTypes from "./types";
import { addObjectToStore, removeObject } from "./utils.js";

const INITIAL_STATE = {
  collections: SHOP_DATA,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.ADD_OBJ: {
      return {
        ...state,
        objects: addObjectToStore(state.objects, action.payload),
      };
    }

    case ShopActionTypes.REMOVE_OBJ:
      return {
        ...state,
        objects: removeObject(state.objects, action.payload),
      };

    default:
      return state;
  }
};

export default shopReducer;
