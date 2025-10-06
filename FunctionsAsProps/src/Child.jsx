

function Child({onSend}) {
    // The Child receives 'onSend' from the Parent as a prop.
  // This 'onSend' is actually the Parent's showMessage() function.
  return (
    <div>
        
        <h1>child component</h1> 
        {/* Step 1: When this button is clicked, call the parent's function */}
      {/* Step 2: Send a message to the parent by calling onSend("Hello from Child!") */}
      <button onClick={() => onSend("Hello from Child!")}>Send Message to Parent </button>
    
    
    
    </div>
  )
}

export default Child;