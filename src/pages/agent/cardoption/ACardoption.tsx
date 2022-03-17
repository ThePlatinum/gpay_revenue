import React from 'react'
import { Child, Container, TopChild, BottomChild } from './cardoption.style'
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import { Typography } from '@mui/material';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


const ACardoption = () => {
  return (
    <Container>
        <Navbar />
        <Child>
          <TopChild>
<Typography variant="h4">Kindly input Payer's ID</Typography>
<Accordion expanded>
              <AccordionSummary  expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="body1">Use Saved Card</Typography>
              </AccordionSummary>
              <AccordionDetails>
                  
              </AccordionDetails>
          </Accordion>
          </TopChild>
          <BottomChild>

          </BottomChild>
        </Child>
        <Footer />
    </Container>
  )
}

export default ACardoption