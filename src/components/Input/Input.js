import React from 'react';
import './Input.scss';

function Input ({type, placeholder, name, id, value, onChangeHandler}) {
    return(
        <input 
            className="input"
            type={type} 
            placeholder={placeholder}
            name={name} 
            id={id}
            value={value} 
            onChange={(e) => onChangeHandler(e)} 
        />
    )
}

export default Input;