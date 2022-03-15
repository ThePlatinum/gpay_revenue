import React from "react";
import { Child, ChildBox, Container, NewBox, NewChild, NewInfo, OptionBox, SavedInfo } from "./cardoption.style";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Button, Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextField from '@mui/material/TextField';

const CardOption = () => {
  return (
    <Container>
      <Navbar />
      <Child>
        <ChildBox>
          <Typography variant="h4">Pay with Card</Typography>
          <OptionBox>
            <FormControl>
              <RadioGroup defaultValue="Pay Once" name="payment option">
                <FormControlLabel
                  value="Pay Once"
                  control={<Radio />}
                  label="Pay Once"
                />
                <FormControlLabel
                  value="Recurring (Direct Debit)"
                  control={<Radio />}
                  label="Recurring (Direct Debit)"
                />
              </RadioGroup>
            </FormControl>
          </OptionBox>
          <Accordion expanded>
              <AccordionSummary  expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="body1">Use Saved Card</Typography>
              </AccordionSummary>
              <AccordionDetails>
                  <SavedInfo>
                      <Typography variant="body1">*************441</Typography>
                      <Typography variant="body2">Olamilekan Babatunde  09/24</Typography>
                  </SavedInfo>
              </AccordionDetails>
          </Accordion>
          <Accordion expanded>
              <AccordionSummary  expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="body1">New Card</Typography>
              </AccordionSummary>
              <AccordionDetails>
                  <NewInfo>
                  <Typography variant="body2">Name of Card</Typography>
                  <TextField id="outlined-basic" label="" variant="outlined" />
                  <Typography variant="body2">Card Number</Typography>
                  <TextField id="outlined-basic" label="" variant="outlined" />
                  <NewChild>
                      <NewBox>
                      <Typography variant="body2">Expiry Date</Typography>
                  <TextField id="outlined-basic" label="" variant="outlined" />
                      </NewBox>
                      <NewBox>
                      <Typography variant="body2">CVV</Typography>
                  <TextField id="outlined-basic" label="" variant="outlined" />
                      </NewBox>
                  </NewChild>
                  </NewInfo>
                  
              </AccordionDetails>
          </Accordion>
        </ChildBox>
        <Button variant="contained">Pay Now</Button>
      </Child>
      <Footer />
    </Container>
  );
};

export default CardOption;
