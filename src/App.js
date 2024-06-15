import React, { useState, useMemo } from "react";
import "./App.css";

function App() {
//**useMemo hook ha due utilizzi più importanti */
const [number, setNumber] = useState(0)
const [dark, setDark] = useState(false)
// 1- quando abbiamo una funzione lenta, e usando useMemo teniamo in memoria la funzione cosi si evita di ricalcolare ogni volta 
const doubleNumber = useMemo(() => {return slowFunction(number)
}, [number]);
// 2- quando vogliamo sapere se il reference di un oggetto o un array è esattamente era quello l'ultima volta è stato renderizzato e che non faccia render ogni volta che c'è qualche cambiamento
const themeStyles = useMemo(() => {
  return {
  backgroundColor: dark? "black" : "white",
  color: dark? "white" : "black"
  }
}, [dark]);

  return (
    <>
      <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))}/><br/>
      <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
}

function slowFunction(num) {
  console.log("slowFunction called");
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}

export default App;
