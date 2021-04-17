import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import Pizza from "./Pizza";
import Header from "./components/header";
import * as yup from "yup";
import schema from "./components/validation/formSchema";
import { Route, Switch } from "react-router-dom";
import axios from "./axios";

const intialFormValues = {
  name: "",
  size: "",
  peperoni: false,
  sausage: false,
  peppers: false,
  everything: false,
  specialInstructions: "",
};

const App = () => {
  const [pizzas, setPizzas] = useState([]);
  const [formValues, setFromValues] = useState(intialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFromValues({ ...formValues, [inputName]: inputValue });
  };
  const submitForm = () => {
    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size,
      peperoni: formValues.peperoni,
      sausage: formValues.sausage,
      peppers: formValues.peppers,
      everyting: formValues.everything,
    };
    axios
      .post("fakeapi.com", newPizza)
      .then((res) => {
        setPizzas([...pizzas, newPizza]);
        setFromValues(intialFormValues);
      })
      .catch((err) => {
        debugger;
      });
  };

  useEffect(() => {
    axios.get("fakeapi.com").then((res) => setPizzas(res.data));
  }, []);

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
