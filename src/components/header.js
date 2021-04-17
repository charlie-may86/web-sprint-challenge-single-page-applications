import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-around;
  border: 2px grey solid;

  h1 {
    color: red;
  }

  .header-buttons button {
    box-shadow: inset 0px 1px 3px 0px #91b8b3;
    background: linear-gradient(to bottom, #768d87 5%, #6c7c7c 100%);
    background-color: #768d87;
    border-radius: 5px;
    border: 1px solid #566963;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-family: Arial;
    font-size: 15px;
    font-weight: bold;
    padding: 11px 23px;
    text-decoration: none;
  }

  .header-buttons button:hover {
    background: linear-gradient(to bottom, #6c7c7c 5%, #768d87 100%);
    background-color: #6c7c7c;
  }

  align-items: center;
`;

export default function Header({}) {
  const history = useHistory();
  const routeToPizza = () => {
    history.push("./pizza");
  };
  const routeHome = () => {
      history.push('./')
  }

  return (
    <StyledHeader>
      <h1>Lambda Eats</h1>
      <div className="header-buttons">
        <button onClick={routeHome}>Home</button>
        <button onClick={routeToPizza}>Pizza</button>
      </div>
    </StyledHeader>
  );
}
