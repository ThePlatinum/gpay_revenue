import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from './pages/home/Homepage';



function App() {
  return (
    <div className="App">
     <Router>
       <Routes>
         <Route path="/" element={<Homepage />} />
       </Routes>
     </Router>
    </div>
  );
}

export default App;
