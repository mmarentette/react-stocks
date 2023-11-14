import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>This is my stocks app!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
