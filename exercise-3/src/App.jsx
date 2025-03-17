import React, {useState} from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */

  /* You will need some function to handle the key pressed and button events */
  //Create state
  const [numA, setNumA] = useState("");
  const [numB, setNumB] = useState("");
  const [result, setResult] = useState("");
  const [isError, setIsError] = useState ("");

  function onA(event){
    setNumA(event.target.value);
  }
  function onB(event){
    setNumB(event.target.value);
  }
    // Step 3: Compute result when button is clicked
  function Result() {
    const a = parseFloat(numA);
    const b = parseFloat(numB);
    if (!isNaN(a) && !isNaN(b)){
      setResult (a+b);
      setIsError(false);
    }else{
      setResult("Invalid Input!");
      setIsError (true);
    }
  }
  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onKeyUp={onA} />

      <label>B =</label>
      <input onKeyUp={onB} />

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input type = "text" value = {result}disabled />
      <button onClick={Result}>Compute</button>
    </main>
  );
}

export default App;
