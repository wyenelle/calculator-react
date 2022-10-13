import React from 'react'
import './Wrapper.css'
import Screen from  './Screen'
import ButtonBox from './ButtonBox'

const Wrapper = () => {
  return (
    <div className='wrapper'>
       <h1>CASIO</h1>
        <Screen />
        <ButtonBox />
    </div>
  )
}

export default Wrapper