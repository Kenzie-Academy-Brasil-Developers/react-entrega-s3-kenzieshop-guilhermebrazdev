// import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { AiFillPlusCircle } from "react-icons/ai";

import Button from "../../components/Button";
import CartCard from "../../components/CartCard";

import { Title } from "../Home/style";
import { CartBox, Container, Resumo } from "./style";

function Cart() {
  const { result } = useSelector((cart) => cart);

  console.log("result do cardbox", result.length);

  const history = useHistory();

  const valor = result
    .reduce((acc, currentValue) => acc + currentValue.price, 0)
    .toFixed(2);
  console.log("valor", valor);

  return (
    <Container>
      <Title>Carrinho</Title>
      <CartBox>
        <Button onClick={() => history.push("/")}>
          <AiFillPlusCircle />
          <p>Adicionar mais itens!</p>
        </Button>

        {result.length === 0 ? (
          <div>
            <h3>Sua sacola está vazia !</h3>
          </div>
        ) : (
          <section>
            <CartCard />
            {valor > 0 && (
              <Resumo>
                <h3>Preço Total</h3>
                <div>
                  <h4>Total:</h4>
                  R$ {valor}
                </div>
              </Resumo>
            )}
          </section>
        )}
      </CartBox>
    </Container>
  );
}

export default Cart;
