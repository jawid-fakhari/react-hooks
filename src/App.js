import React, { useState, useEffect, useRef } from "react";

function App() {
  //** useRef hook */
  const [name, setName] = useState("");
  //* useRef non causa Re-renders, useRef returns solo un item che sarebbe l'oggetto curret.
  // const renderCount = useRef(1);

  // useEffect(() => {
  //   renderCount.current = renderCount.current + 1;
  // });

  //* useRef ci da anche accessibilità al DOM 
  //In React, we can add a ref attribute to an element to access it directly in the DOM.
  const inputElement= useRef();

  const focusInput = () => {
    inputElement.current.focus();
  }

  return (
    <>
      {/* <input value={name} onChange={(e) => setName(e.target.value)} />
      <h1>My name is: {name}</h1>
      <h2>l'app {renderCount.current} volte è stato renderizzato</h2> */}
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}

export default App;