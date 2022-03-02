import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from './pages/home/Homepage';
import { GlobalStyles } from './app.style';



function App() {
  return (
    
    <div className="App">
      <GlobalStyles />
     <Router>
       <Routes>
         <Route path="/" element={<Homepage />} />
       </Routes>
     </Router>
    </div>
  );
}

export default App;
