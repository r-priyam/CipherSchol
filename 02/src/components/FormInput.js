import React from 'react';

const FormInput = ({label, type, name, value, placeholder, handleChange}) => (
    <div className='input-container'>
        <label>{label}</label>
        <input type={type} name={name} value={value} placeholder={placeholder} onChange={handleChange} />
    </div>
)

export default FormInput;