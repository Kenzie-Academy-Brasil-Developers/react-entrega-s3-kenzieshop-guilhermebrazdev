import { addCart, subCart } from "./actionType";

const currentState =
  JSON.parse(localStorage.getItem("@kenzieShop: cartList")) || [];

const reducerCart = (cart = currentState, action) => {
  switch (action.type) {
    case addCart:
      return action.productArray;

    case subCart:
      const newCart = cart.filter(
        (element) => element.id !== action.produto.id
      );
      return newCart;

    default:
      return cart;
  }
};

export default reducerCart;
