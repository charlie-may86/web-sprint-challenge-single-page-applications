import React from "react";
import Home from "./components/Home";
import Pizza from "./Pizza";
import Header from './components/header'
import { Link, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
  
      <Switch>
        <Route path="/pizza">
          <Pizza />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
