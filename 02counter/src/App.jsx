import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter,SetCounter]= useState(15)

    const addValue = ()=>{  SetCounter(counter + 1)}
    
    const removeValue= ()=>{SetCounter(counter - 1)}
    if(counter > 20){
      counter = 15
 
    }
  return (
    <>
     <h1>chai with code</h1>
     <h2> counter is : {counter} </h2>
     <button onClick={addValue}>Add Value {counter}</button>
     <button onClick={removeValue}>Remove Value{counter}</button>
     
    </>
  )
}

export default App
