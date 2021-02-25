import React from 'react'
import './Button.css';


const STYLES =['btn--primary', 'btn--outline']

const SIZES = ['btn--medium','btn--large','btn--mobile','btn--wide']

const COLOR = ['primary','blue','red','green']

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle,
    buttonStyle,
    buttonSize, 
    buttonColor 

}) => {
    return 
    <button className ={`btn${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
    onClick={onClick} type={type}>{children}</button>
}; 