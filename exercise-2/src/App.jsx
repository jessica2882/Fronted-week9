import React, {useState} from "react";
function App() {
  /* You will need to use a boolean state to keep the value of the text entered */
  /* You will need a function to handle a key pressed on the first input and update the state*/
  // setp2: create a state to store text input
  const [text, setText] = useState("");
  function handleInputChange(event){
    const inputValue = event.target.value;
    console.log ("User input: ", inputValue);
    setText (inputValue);
  }
  return (
    <main>
      <h1>Upper Case Converter</h1>

      <label>Enter any text !</label>
      <input type = "text" onChange = {handleInputChange}/>

      <p>
        <label>Here is the text in upper case</label>

        {/* This input will need to display the text entered in lower case */}
        <input type="text" value = {text.toLocaleUpperCase()}disabled />
      </p>
    </main>
  );
}

export default App;
