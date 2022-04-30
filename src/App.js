import React, { useState, useEffect } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import Form from "./components/Form";
import Confirmation from "./components/Confirmation";
import Home from "./components/Home";
import "./App.css";
import schema from "./validation/formSchema";
import * as yup from "yup";
import axios from "axios";

// create initial states
const initialFormValues = {
  name: '',
  email: '',
  size: '',
  pepperoni: false,
  sausage: false,
  mushrooms: false,
  peppers: false,
  special: ''
}

const initialFormErrors ={
  name: '',
  email: '',
  size: ''
}

const initialOrders = [];
const initialDisabled = [];

const App = () => {
  // set states
  const [orders, setOrders] = useState(initialOrders);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);


  // const getOrders = () =>{
  //   console.log("Hello from inside get order")
  //   axios.get("https://reqres.in/api/orders")
  //   .then(res =>{
  //     setOrders(res.data.data);
  //   }).catch(err => console.log(err))
  // }
  
  // useEffect(() =>{
  //   getOrders()
  // }, []) 
  
  const postNewOrder = testOrder => {
    axios.post("https://reqres.in/api/orders", testOrder)
    .then(res =>{
      console.log(res.data);
      setOrders([res.data, ...orders]);
      setFormValues(initialFormValues);
    }).catch(err => console.log(err))
  }
  
  // validate input and return errors if present
  const validate = (name, value) =>{
    yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: "" })) 
    .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }


  const inputChange = (name, value) => {
    // run validation
    validate(name, value);
    setFormValues({...formValues, [name]: value})
  }
  


  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      size: formValues.size,
      toppings: ["pepperoni", "sausage", "mushrooms", "peppers"].filter(tops => !!formValues[tops]),
      gluten: formValues.gluten,
      special: formValues.special.trim()
    }
    // does newOrder really need to be passed as a parameter?
    postNewOrder(newOrder);
    }
  
    
    
  

  useEffect(() => {
    schema.isValid(formValues)
    .then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className="App">
    <nav>
      <h1>Lambda Eats</h1>
      <p>Welcome to pizza from heaven!</p>
      <p><Link to="/">Home</Link></p>
      <p><Link to="/pizza">Build Your Pizza</Link></p>
    
    </nav>
    
    <Switch>
    <Route path={"/pizza"}>
      <Form values={formValues} change={inputChange} submit={formSubmit} disabled={disabled} errors={formErrors}/>
    </Route>
    <Route path={"/confirmation"}>
      <Confirmation />
    </Route>
    <Route exact path="/">
      <Home />
    </Route>
    </Switch>
    </div>
  );
};
export default App;
