import { addShop, subShop } from "./action";

export const addShopThunk = (produto) => (dispatch, getState) => {
  //   const cart = JSON.parse(localStorage.getItem("@kenzieShop: cartList")) || [];

  const { result } = getState();

  const newCart = [...result, produto];

  localStorage.setItem("@kenzieShop: cartList", JSON.stringify(newCart));

  dispatch(addShop(newCart));
};

export const subShopThunk = (produto) => (dispatch, getState) => {
  //   const cart = JSON.parse(localStorage.getItem("@kenzieShop: cartList")) || [];

  const { result } = getState();

  const newCart = result.filter((element) => element.id !== produto.id);

  localStorage.setItem("@kenzieShop: cartList", JSON.stringify(newCart));

  dispatch(subShop(produto));
};
