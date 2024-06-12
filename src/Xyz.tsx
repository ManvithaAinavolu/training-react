import React from 'react'
import { useState } from 'react'
function Xyz() {
  const [counter,setCounter]=useState<number>(0)
  const increment=()=>{
    setCounter(counter+1)
  }
const decrement=()=>{
  setCounter(counter-1);
}
  return (
    <div>
      <p>{counter}</p>
      <button onClick={increment}>increment the button</button>
      <button onClick={decrement}>Decrement the button</button>

    </div>
  )
}

export default Xyz
