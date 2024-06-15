import React, { useState } from "react";
import "./App.css";

function App() {
  // hooks non possono essere dentro qualsiasi block per esempio if{} e l'ordine deve essere uguale quando viene chiamato dentro return

  //** basic useState hook hardcoded initial default value */
  //useState hook passando il valore iniziale direttamente, che non viene consigliato perché ogni volta che lo stato corrente viene aggiornato il valore iniziale viene renderizzato.
  // 1- prima di tutto dichiarare il default state che sarebbe useState(), dentro useState mettiamo il valore iniziale
  // 2- useState hook ci da un array di due valori, che per semplificare lo distructiamo inline direttamente, il 1° valore di array è lo state = il valore corrente di ogni iterazione dentro il nostro render e il 2° valore sarebbe una funzione che aggiorna lo state
  //** const [count, setCount] = useState(4) */

  //** class component: passare inital value attraverso un function*/
  const [count, setCount] = useState(() => {return 4});
  // la funzione onclick del button
  function decrementCount() {
    //funzione del hook useState che prende il valore corrente e diminuisce di 1
    // setCount(count - 1)

    //ma è meglio usare una funzione cosi se dovessimo usare due setCount(), cosi non sovrascriverebbero uno l'altro.
    setCount((prevCount) => prevCount - 1);
    // setCount(prevCount => prevCount -1);
  }
  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }
  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;
