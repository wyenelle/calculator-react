import React from 'react'
import './Button.css'


const Button = ({number,updateValue}) => {
  return (
    <button className='button' onClick={ () => updateValue(number)}>{number}</button>
  )
}

export default Button