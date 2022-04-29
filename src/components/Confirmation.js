import React from 'react';

export default function Confirmation(props){
    const {details} = props;
    return (
        <div className="confirmation">
        <p>Your pizza is on the way!</p>
        <p>You ordered:
            {details.size}
            {details.pepperoni ? "pepperoni" : ""}
            {details.sausage ? "sausage" : ""}
            {details.mushrooms ? "mushrooms" : ""}
            {details.peppers ? "peppers" : ""}
            {details.gluten ? "gluten" : ""}
            {details.instructions ? details.instructions : ""}
        </p>
        </div>
    );
}