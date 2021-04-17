import React from "react";
import Home from "./Home";
import Pizza from "./Pizza";
import { Link, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/pizza">Order Pizza</Link>
      </div>
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
