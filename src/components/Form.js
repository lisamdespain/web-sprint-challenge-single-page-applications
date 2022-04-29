import React from 'react';

export default function Form(props){
    const {values, change, submit, disabled, errors} = props;
    
    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }
    
    const onChange = evt =>{
        const {name, value, checked, type} = evt.target;
        const valueToUse = type === "checkbox" ? checked: value; 
        change(name, valueToUse);
    }

    return (
        <form id="pizza-form" onSubmit={onSubmit}>
<h2>Build Your Pizza!</h2>

<div className="errors">
    <div>{errors.name}</div>
    <div>{errors.email}</div>
    <div>{errors.size}</div>
</div>
<label>First and Last Name
    <input 
    id="name-input"
    value={values.name}
    onChange={onChange}
    name="name"
    type="text"
    />
</label>
<label>Email
    <input 
    value={values.email}
    onChange={onChange}
    name="email"
    type="text"
    />
</label>
<label id="size-dropdown">Pizza size
          <select
            onChange={onChange}
            value={values.size}
            name='size'
          >
            <option value=''>- Select an option -</option>
            <option value='small'>Small</option>
            <option value='medium'>Medium</option>
            <option value='large'>Large</option>
          </select>
        </label>
<label>Pepperoni
        <input 
        type="checkbox"
        name="pepperoni"
        checked={values.pepperoni}
        onChange={onChange}
        />
    </label>

    <label>Sausage
    <input 
        type="checkbox"
        name="sausage"
        checked={values.sausage}
        onChange={onChange}
        />
    </label>

    <label>Mushrooms
    <input 
        type="checkbox"
        name="mushrooms"
        checked={values.mushrooms}
        onChange={onChange}
        />
    </label>
    <label>Peppers
    <input 
        type="checkbox"
        name="peppers"
        checked={values.peppers}
        onChange={onChange}
        />
    </label>

<label>Click for gluten-free option:
    <input 
    value={values.gluten}
    onChange={onChange}
    name="gluten"
    type="checkbox"
    />
</label>
<label>Additional Instructions:
<input 
    id="special-text"
    value={values.special}
    onChange={onChange}
    name="special"
    type="text"
    />
</label>
<button id="order-button" disabled = {disabled} onSubmit={onSubmit}>Add to Order</button>
</form>
    );
}