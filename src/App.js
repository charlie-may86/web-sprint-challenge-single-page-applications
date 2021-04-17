import React, { useState } from "react";
import Home from "./components/Home";
import Pizza from "./Pizza";
import Header from "./components/header";
import { Link, Route, Switch } from "react-router-dom";

const intialFormValues = {
  name: "",
  size: "",
  peperoni: false,
  sausage: false,
  peppers: false,
  everything: false,
};

const App = () => {
  const [pizzas, setPizzas] = useState([]);
  const [formValues, setFromValues] = useState(intialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFromValues({ ...formValues, [inputName]: inputValue });
  };
  const submitForm = () => {
    // const newPizza = {
    //   name: formValues.name.trim(),
    //   size: formValues.size,
    //   peperoni: formValues.peperoni,
    //   sausage: formValues.sausage,
    //   peppers: formValues.peppers,
    //   everyting: formValues.everything,
    // };
    // console.log(newPizza);
    debugger
    setFromValues(intialFormValues);
  };

  return (
    <div>
      <Header />

      <Switch>
        <Route path="/pizza">
          <Pizza values={formValues} update={updateForm} submit={submitForm} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
