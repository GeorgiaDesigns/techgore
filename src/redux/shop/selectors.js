const selectShop = (state) => state.shop;

let cachedCollections = null;
let cachedShop = null;

export const selectCollections = (state) => {
  const shop = selectShop(state);

  if (shop !== cachedShop) {
    cachedShop = shop;
    cachedCollections = shop.collections;
  }

  return cachedCollections;
};
