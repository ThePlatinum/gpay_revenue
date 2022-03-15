import React from 'react'
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { CheckBox, Child, Container } from './paymentsuccessful.style';
import check from "../../images/Vector 1.png"
import { Button, Typography } from '@mui/material';
const PaymentSuccesful = () => {
  return (
    <Container>
        <Navbar />
        <Child>
            <CheckBox>
                <img src={check} alt="checkmark" />
            </CheckBox>
            <Typography variant="h6">Payment successful!</Typography>
            <Button variant="contained">View Receipt</Button>
        </Child>
        <Footer />
    </Container>
  )
}

export default PaymentSuccesful