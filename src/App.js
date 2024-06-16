import React, { useState, useEffect, useRef } from "react";

function App() {
  //** useRef hook */
  //* useRef non causa Re-renders, useRef returns solo un item che sarebbe l'oggetto curret.
  // const [name, setName] = useState("");
  // const renderCount = useRef(1);

  // useEffect(() => {
  //   renderCount.current = renderCount.current + 1;
  // });

  //* useRef ci da anche accessibilità al DOM
  //In React, we can add a ref attribute to an element to access it directly in the DOM.
  // const inputElement= useRef();

  // const focusInput = () => {
  //   inputElement.current.focus();
  // }

  //* useRef ci da possibilità di tracciare i cambiamenti di State.
  const [inputValue, setInputvalue] = useState("");
  const prevRenderCount = useRef('');

  useEffect(() => {
    prevRenderCount.current = inputValue;
  });

  return (
    <>
      {/* <input value={name} onChange={(e) => setName(e.target.value)} />
      <h1>My name is: {name}</h1>
      <h2>l'app {renderCount.current} volte è stato renderizzato</h2> */}
      {/* <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button> */}
      <input value={inputValue} onChange={(e) => setInputvalue(e.target.value)} />
      <h1>My name is: {inputValue}</h1>
      <h2>Prima mi chiamavo {prevRenderCount.current} </h2>
    </>
  );
}

export default App;