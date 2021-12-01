export const addShop = (produtos) => ({
  type: "ADD_CART",
  productArray: produtos,
});

export const subShop = (produto) => ({
  type: "SUB_CART",
  produto: produto,
});
