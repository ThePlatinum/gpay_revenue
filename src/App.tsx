import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
     <Router>
       <Routes>
         <Route path="/" element={<Navbar />} />
       </Routes>
     </Router>
    </div>
  );
}

export default App;
