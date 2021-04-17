import React from "react";
import { useRouteMatch } from "react-router-dom";

export default function Pizza() {
  const { url, path } = useRouteMatch();
  
  return (
    <div>
      <h1>This is the pizza page</h1>
      <p>this is a test</p>
    </div>
  );
}
