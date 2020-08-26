import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';

function App() {
  const [number1, setNumber1] = useState(0);
  const [total, setTotal] = useState(0);


  function callSetTotal() {
    setTotal(factorialize(number1));
    function factorialize(number1) {
      if (number1 < 0) return -1;
      else if (number1 == 0) return 1;
      else {
        return number1 * factorialize(number1 - 1);
      }
    }
  }
  return (
    <div className="App">
      <h1>Factorial Calculator</h1>
      <form className="number-inputs">
        <input 
        type="number" 
        placeholder="Enter a number..."
        value={number1}
        onChange={(e) => setNumber1(+e.target.value)}
        />
      </form>
      <button onClick={callSetTotal}>Calculate Factorial</button>
      <h2>{total}</h2>
    </div>
  );
}

export default App;
