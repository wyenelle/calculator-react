import './App.css'
import Wrapper from './components/Wrapper'
import calc_context from './components/context'
import { useState } from 'react'

function App() {
const [value,setValue] = useState('')
const [result,setResult] = useState('')

const operators = [ '/','*','+','-','.','%']


// this function updates the state
const updateValue = num => {
  if(operators.includes(num) && value === '' || 
  operators.includes(num) && operators.includes(value.slice(-1))
  ){
    return 
  }
  setValue(value + num)

  if(!operators.includes(num)){
    setResult(eval(value + num))
  }
}
const calculate = () => (
  setValue(result)
  
)
const reset = () =>{
  setValue('')
  setResult('')
}
const delete_btn = () => {

  const deleted_item =value ?  value.slice(0,-1) : setResult(0)
  setValue(deleted_item)
}

  return (
    <calc_context.Provider value={{calculate,reset,value,updateValue,result,delete_btn}}>
    <div className="App">
      
         <Wrapper />
    </div>
    </calc_context.Provider>
  )
}

export default App
