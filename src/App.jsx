import { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Stocks from './Stocks';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <Link to="/">iStocks</Link>
        <Link to="/about">About</Link>
        <Link to="/stocks">Stocks</Link>
      </nav>
      <h1>iStocks</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stocks" element={<Stocks />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
