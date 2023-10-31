import react from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import ColorSchemesExample from './Card';
import Navbar from './Navbar1';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>CS 230L</h1>
      <h2>Section 03</h2>
      <p>WVU ID 800351421</p>
      <p>Hi! I am Sam</p>
      <Card />
    </div>
  );
}

export default App;
