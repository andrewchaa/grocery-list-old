import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (
      // <div className="App">
      //   <h1>Welcome</h1>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      // </div>
  );
}

export default App;
