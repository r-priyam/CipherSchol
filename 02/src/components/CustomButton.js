import React from 'react';

const CustomButton = ({type, handleClick, children}) => (
    <button type={type} onClick={handleClick}>{children}</button>
)

export default CustomButton;