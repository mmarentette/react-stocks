import { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>This is my stocks app!</h1>
    </>
  )
}

export default App
