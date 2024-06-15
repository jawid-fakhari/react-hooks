import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [resourceType, setResourceType] = useState('posts');

  //**useEffect hook */
  // ogni volta che render accade la funzione dentro useEffect si aggiorna
  // questo puo prendere due parametri, il secondo dentro [state] che costringe useEffect a aggiornarsi solo quando lo state indicato viene cambiato
  console.log('render');
  
  useEffect(() => {
    console.log('resource type changed');
  }, [resourceType]);

  return (
    <>
      <button onClick={() => setResourceType('post')}>Posts</button>
      <button onClick={() => setResourceType('users')}>Users</button>
      <button onClick={() => setResourceType('comments')}>Comments</button>
      <h1>{resourceType}</h1>
    </>
  );
}

export default App;
