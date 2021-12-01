import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CartBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  border-radius: 8px;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  svg {
    color: #2ea236;
    height: 30px;
    width: 30px;
  }
`;

export const Resumo = styled.div`
  background: #f3eae8;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 2px solid black;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  h3 {
    border-bottom: 1px solid black;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
