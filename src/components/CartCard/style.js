import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  border-radius: 8px;

  div {
    display: flex;
    margin: 5px;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    background: #f3eae8;

    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

    img {
      width: 150px;
    }

    h4 {
      display: flex;
      width: 100%;
      justify-content: center;
    }
  }
`;
