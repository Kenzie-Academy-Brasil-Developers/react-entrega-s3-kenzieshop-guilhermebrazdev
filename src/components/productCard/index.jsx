import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";

import { Produtos } from "../Produtos";
import Button from "../Button";
import { addShopThunk } from "../../store/modules/thunk";
// import { addShop } from "../../store/modules/action";

import { Card } from "./style";

function ProductCard() {
  const { result } = useSelector((cart) => cart);
  console.log("lista de produtos", result);

  const dispatch = useDispatch();

  function adicionarElement(produto) {
    dispatch(addShopThunk(produto));
  }

  return (
    <Card>
      {Produtos.map((element, index) => (
        <div key={index}>
          <h3>{element.name}</h3>
          <img src={element.img} alt="Imagem do produto" />
          <h4>R$ {element.price},00</h4>
          <Button onClick={() => adicionarElement(element)}>Comprar</Button>
        </div>
      ))}
    </Card>
  );
}

export default ProductCard;
