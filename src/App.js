import react from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Navbar from './Navbar1';
import Card from './Card';
import Home from './Home';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Card" element={<Card />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
