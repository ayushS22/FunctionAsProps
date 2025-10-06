
import './App.css'
import Child from "./Child";
import { useState } from 'react'

function App() {
  /* Create a state variable to store message from child */
  const  [message , setMessage]= useState("");


  //  Define a function that updates the state
  // This function will be given to the Child as a prop
  const showMessage = (text) => {
    // Update the message state with the text received from child
    setMessage(text);
  };

  return (
    <>
      <div>
        <h1>Parent components</h1>
      {/*   Display the message received from the child  */}
        <p>Message from child:{message} </p>

       {/*  Pass the function to the child as a prop named 'onSend' */}
       <Child onSend={showMessage} />

      


      </div>
      
    </>
  )
}

export default App;
