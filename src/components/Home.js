import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const StyledHome = styled.div`
  .pizza-button {
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

  .pizza-button:hover {
    background: linear-gradient(to bottom, #6c7c7c 5%, #768d87 100%);
    background-color: #6c7c7c;
  }
`;

export default function Home() {
  const history = useHistory();
  const routeToPizza = () => {
    history.push("./pizza");
  };

  return (
    <StyledHome>
      <h1>Lambda Eats</h1>
      <p>This a homepage test</p>
      <button onClick={routeToPizza} className="pizza-button">
        Get the Za!
      </button>
    </StyledHome>
  );
}
