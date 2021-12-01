import { useDispatch, useSelector } from "react-redux";

import { subShopThunk } from "../../store/modules/thunk";
import Button from "../Button";

import { Card } from "./style";

function CartCard() {
  const { result } = useSelector((cart) => cart);

  console.log("result", result);

  const dispatch = useDispatch();

  function removeElement(produto) {
    dispatch(subShopThunk(produto));
    // productList = localStorage.getItem("@kenzieShop: cartList");
  }

  return (
    <Card>
      {result.map((element, index) => (
        <div key={index}>
          <h3>{element.name}</h3>
          <img src={element.img} alt="Imagem do produto" />
          <h4>R$ {element.price},00</h4>
          <Button onClick={() => removeElement(element)}>Desistir deste</Button>
        </div>
      ))}
    </Card>
  );
}

export default CartCard;
