import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from './pages/home/Homepage';
import { GlobalStyles } from './app.style';
import Register from './pages/register/Register';
import Signin from './pages/signin/Signin';
import Dashboard from './pages/dashboard/Dashboard';
import Taxoption from './pages/taxoption/Taxoption';
import PaymentOption from './pages/paymentoption/PaymentOption';
import PaymentSuccesful from './pages/paymentsuccessful/PaymentSuccesful';
import TransactionReceipt from './pages/transactionreceipt/TransactionReceipt';
import CardOption from './pages/cardoption/CardOption';



function App() {
  return (
    
    <div className="App">
      <GlobalStyles />
     <Router>
       <Routes>
         <Route path="/" element={<Homepage />} />
         <Route path="/register" element={<Register />} />
         <Route path="/login" element={<Signin />} />
         <Route path='/dashboard' element={<Dashboard />} />
         <Route path='/taxoption' element={<Taxoption />} />
         <Route path='/paymentoption' element={<PaymentOption />} />
         <Route path='/cardoption' element={<CardOption/>} />
         <Route path='/paymentsuccessful' element={<PaymentSuccesful />} />
         <Route path='/receipt' element={<TransactionReceipt />} />
       </Routes>
     </Router>
    </div>
  );
}

export default App;
