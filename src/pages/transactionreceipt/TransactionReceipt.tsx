import React from 'react'
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Child, ChildLeft, ChildRight, Container, LogoBox, ReceiptBox, ReceiptChild, ReceiptInfo, ReceiptTop } from './transactionreceipt.style';
import logo from "../../images/odirs-logo.png"
import line from "../../images/Line 4.png"
import { Button, Typography } from '@mui/material';
import logoa from "../../images/GPay Logo 1.png"

import logoc from "../../images/ondo-new-logo.png"
const TransactionReceipt = () => {
  return (
    <Container>
        <Navbar />
        <Child>
            <ReceiptBox>
                <ReceiptChild>
                   <ReceiptTop>
                   <ChildLeft>
                    <Typography variant="h4">Olamilekan</Typography>
            <Typography variant="body1">
              TIN &gt; 1234567890987654321
            </Typography>
            <Typography variant="body2">
              Email Address &gt; babalolasimon@gmail.com
            </Typography>
            <Typography variant="body2">
              Phone Number &gt; 0816 244 0786
            </Typography>
                    </ChildLeft>
                    <ChildRight>
                        <img src={logo} alt="odirs logo" />
                    </ChildRight>
                   </ReceiptTop>
                   <Typography variant="h5">Transaction Receipt</Typography>
                   <ReceiptInfo>
<Typography variant="body1">Transaction Date</Typography>
<img src={line} alt="black line" />
<Typography variant="h6">Feb. 20, 2022 </Typography>
                   </ReceiptInfo>
                   <ReceiptInfo>
<Typography variant="body1">Transaction ID</Typography>
<img src={line} alt="black line" />
<Typography variant="h6">5636-658</Typography>
                   </ReceiptInfo>
                   <ReceiptInfo>
<Typography variant="body1">Amount</Typography>
<img src={line} alt="black line" />
<Typography variant="h6">#4,470:00k </Typography>
                   </ReceiptInfo>
                   <ReceiptInfo>
<Typography variant="body1">Type of Tax</Typography>
<img src={line} alt="black line" />
<Typography variant="h6">Personal income</Typography>
                   </ReceiptInfo>
                   <ReceiptInfo>
<Typography variant="body1">Transaction Status</Typography>
<img src={line} alt="black line" />
<Typography variant="h6">Completed</Typography>
                   </ReceiptInfo>
                   <LogoBox>
<img src={logoc} alt="ondo new logo" />

<img src={logoa} alt="Gpay logo" />
                   </LogoBox>
                </ReceiptChild>
            </ReceiptBox>
            <Button variant="contained">Download receipt</Button>
        </Child>
        <Footer />
    </Container>
  )
}

export default TransactionReceipt