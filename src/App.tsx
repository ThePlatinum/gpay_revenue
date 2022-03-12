import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from './pages/home/Homepage';
import { GlobalStyles } from './app.style';
import Register from './pages/register/Register';
import Signin from './pages/signin/Signin';



function App() {
  return (
    
    <div className="App">
      <GlobalStyles />
     <Router>
       <Routes>
         <Route path="/" element={<Homepage />} />
         <Route path="/register" element={<Register />} />
         <Route path="/login" element={<Signin />} />
       </Routes>
     </Router>
    </div>
  );
}

export default App;
