import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 5

  const addValue = () => {
      if(counter < 20){
          counter++;
          setCounter(counter)
          console.log("Added", counter)
      } else {
          alert('Counter value should be between 0 and 20')
      }
  }

  const removeValue = () => {
      if(counter > 0){
          counter--;
          setCounter(counter)
          console.log("Subtracted", counter)
      } else {
          alert('Counter value should be between 0 and 20')
      }
  }

  return (
    <>
      <h1>React Series</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick = {addValue}>Add Value {counter}</button>
      <br />
      <button onClick= {removeValue}>Remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
