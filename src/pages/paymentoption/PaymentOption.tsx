import React from 'react'
import { CardBox, Child, ChildTop, Container, TextBox } from './paymentoption.style'
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Button, Typography } from '@mui/material';
import arrow from "../../images/Chevron Down.png"
const PaymentOption = () => {
  return (
    <Container>
        <Navbar />
        <Child>
<ChildTop>
    <TextBox>
    <Typography variant='body1'>Click on any of the payment channels to make your online payment.</Typography>
    </TextBox>
    <CardBox>
        <Button variant="contained">
            Card
            <img src={arrow} alt="arrow" />
        </Button>
        <Button variant="contained">
            Remita
            <img src={arrow} alt="arrow" />
        </Button>
        <Button variant="contained">
            Interswitch
            <img src={arrow} alt="arrow" />
        </Button>
        <Button variant="contained">
            NIBSS
            <img src={arrow} alt="arrow" />
        </Button>
        <Button variant="contained">
            Internet Banking
            <img src={arrow} alt="arrow" />
        </Button>
        <Button variant="contained">
            USSD
            <img src={arrow} alt="arrow" />
        </Button>
    </CardBox>
</ChildTop>
        </Child>
        <Footer />
    </Container>
  )
}

export default PaymentOption