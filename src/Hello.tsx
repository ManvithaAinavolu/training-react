import React, { useState,useEffect } from 'react'

interface Custom{
   Custommessage:string
}
function Hello(prop:Custom) {
    const [message,setMessage]=useState<string>("")
    useEffect(()=>{
        console.log("this was invoked")
        return ()=>{
            console.log("this is returned in useEffect")//this is when the component is remover from the view
        }
    },[])
useEffect(()=>{
console.log("message was updated")
},[message])

  return (
    <div>
        <p>{prop.Custommessage}</p>
        <button onClick={()=>{setMessage("Hello")}}>sayHello
         </button>
        <button onClick={()=>{setMessage("Bye")}}>sayBye
         </button>
        <p>{message}</p>
    </div>
  )
}

export default Hello
