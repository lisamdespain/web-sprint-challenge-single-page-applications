import React from 'react';
import { Route, Link, Switch } from "react-router-dom";

export default function Home() {
 return (
     <div>
     <p>This is the home page</p>
     <Link to="/pizza"><button id="order-pizza">Order Pizza</button></Link>
     </div>
 );
}