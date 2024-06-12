import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Xyz from './Xyz'
import Table from './Table';
import Hello from './Hello';
import Weather from './Weather';
import { Bouncing } from './Bouncing';
function App() {
  // const [showhello,setshowHello]=useState<boolean>(false)
  // const [cutomeMessage,setcustomMessage]=useState<string>("")

  return (
    <>
    <Bouncing/>
{/* <Table/> */}
    <Weather/>
    {/* {showhello &&(
      <div>
    <Hello Custommessage={cutomeMessage}/>
    </div>
     )} 
     <p>{cutomeMessage}</p>
     <input value={cutomeMessage} onChange={(event)=>setcustomMessage(event.target.value)}></input>
    <button onClick={()=>{setshowHello(!showhello)}}>show hello component</button>
      */}
      </>
  );
}

export default App;
