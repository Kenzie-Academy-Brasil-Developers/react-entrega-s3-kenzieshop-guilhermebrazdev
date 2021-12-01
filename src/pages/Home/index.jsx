import { useHistory } from "react-router";
import { BsCart3 } from "react-icons/bs";

import Button from "../../components/Button";
import ProductCard from "../../components/productCard";

import { Container, Title, ProdutosBox } from "./style";

function Home() {
  const history = useHistory();

  return (
    <Container>
      <Title>KenzieShop</Title>
      <ProdutosBox>
        <Button onClick={() => history.push("/cart")}>
          <BsCart3 />
          carrinho!
        </Button>
        <ProductCard />
      </ProdutosBox>
    </Container>
  );
}

export default Home;
