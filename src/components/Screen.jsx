import React, { useContext } from 'react'
import './Screen.css'
import { Textfit } from 'react-textfit'
import calc_context from './context'


const Screen = () => {
const {value,result} = useContext(calc_context)
 
return (
    <div className="screen">
        
        <Textfit className='textfit-screen' mode='single' max={65}>
{value || '0'} 

</Textfit>
<p className='screen-result'>{result? <span>{result}</span> : '' }</p>
        
    </div>
  )
}

export default Screen