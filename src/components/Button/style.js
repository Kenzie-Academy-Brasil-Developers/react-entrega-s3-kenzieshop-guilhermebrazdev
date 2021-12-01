import styled from "styled-components";

export const Container = styled.button`
  /* background: ${(props) => (props.whiteSchema ? "#f5f5f5" : "#0c0d0d")}; */
  /* color: ${(props) => (props.whiteSchema ? "#0c0d0d" : "#f5f5f5")}; */
  height: 45px;
  border-radius: 0.5rem;
  padding: 0 0.5rem;
  width: 200px;
  font-weight: 600;
  transition: 0.5s;
  border: 1px solid black;
  font-family: "Roboto Mono";
  cursor: pointer;
  margin: 10px;
  margin-top: 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  svg {
    margin: 0px 10px 0 0;
  }

  :hover {
    border: 4px solid #159569;
  }
`;
