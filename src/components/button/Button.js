import React from 'react'
import './style.css'

const Button = (props) => (
    <button className={ "button" + ( props.className !== null && " " + props.className) } onClick={ props.onClickHandler } >{ props.children }</button>          
)

export default Button
