import { Button, Typography } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';
import { ButtonBox, Child, Container, Extra, InputBox, InputChild, LabelDiv, Title } from './registration2.style'

type ChangeState = {
  setState: React.Dispatch<React.SetStateAction<number>>
}
const Registration2 = ({setState} : ChangeState) => {
  return (
    <Container>
      <Title>
        <Typography variant="body1"> Tax payment made easy</Typography>
      </Title>
      <Child>
        <Typography variant="h4">Kindly confirm and update your information</Typography>
        <form>
          <InputBox>
            <InputChild>
              <LabelDiv>
                <Typography variant="body1">Title</Typography>
              </LabelDiv>

              <TextField id="outlined-basic" label="Mr" variant="outlined" type="text" />
            </InputChild>
            <InputChild>
              <LabelDiv><Typography variant="body1">First Name</Typography></LabelDiv>
              <TextField id="outlined-basic" label="Olamilekan" variant="outlined" type="text" />
            </InputChild>
          </InputBox>
          <InputBox>
            <InputChild>
              <LabelDiv> <Typography variant="body1">Middle Name</Typography></LabelDiv>
              <TextField id="outlined-basic" label="Simon" variant="outlined" type="text" />
            </InputChild>
            <InputChild>
              <LabelDiv><Typography variant="body1">Last Name</Typography></LabelDiv>
              <TextField id="outlined-basic" label="Babalola" variant="outlined" type="text" />
            </InputChild>
          </InputBox>
          <InputBox>
            <InputChild>
              <LabelDiv> <Typography variant="body1">Email Address</Typography></LabelDiv>
              <TextField id="outlined-basic" label="babalolasimon@gmail.com" variant="outlined" type="email" />
            </InputChild>
            <InputChild>
              <LabelDiv> <Typography variant="body1">Phone Number</Typography></LabelDiv>
              <TextField id="outlined-basic" label="0816 244 0786" variant="outlined" type="number" />
            </InputChild>
          </InputBox>
          <InputBox>
            <InputChild>
              <LabelDiv> <Typography variant="body1">Phone Number 2</Typography></LabelDiv>
              <TextField id="outlined-basic" label="0814 238 2324" variant="outlined" type="number" />
            </InputChild>
            <InputChild>
              <LabelDiv> <Typography variant="body1">Ward</Typography></LabelDiv>
              <TextField id="outlined-basic" label="Ward 3" variant="outlined" type="text" />
            </InputChild>
          </InputBox>
          <InputBox>
            <InputChild>
              <LabelDiv> <Typography variant="body1">NIN</Typography></LabelDiv>
              <TextField id="outlined-basic" label="1030507090" variant="outlined" type="number" />
            </InputChild>
            <InputChild>
              <LabelDiv> <Typography variant="body1">BVN</Typography></LabelDiv>
              <TextField id="outlined-basic" label="10203040506" variant="outlined" type="number" />
            </InputChild>
          </InputBox>
          <InputBox>
            <InputChild>
              <LabelDiv> <Typography variant="body1">Occupation</Typography></LabelDiv>
              <TextField id="outlined-basic" label="Teacher" variant="outlined" type="type" />
            </InputChild>
            <InputChild>
              <LabelDiv><Typography variant="body1">Gender</Typography></LabelDiv>
              <TextField id="outlined-basic" label="Male" variant="outlined" type="text" />
            </InputChild>
          </InputBox>
          <InputBox>
            <InputChild>
              <LabelDiv><Typography variant="body1">Marital Status</Typography></LabelDiv>
              <TextField id="outlined-basic" label="Single" variant="outlined" type="type" />
            </InputChild>
            <InputChild>
              <LabelDiv><Typography variant="body1">Date of birth</Typography></LabelDiv>
              <TextField id="outlined-basic" label="01-02-2001" variant="outlined" type="text" />
            </InputChild>
          </InputBox>
          <InputBox>
            <InputChild>
              <LabelDiv> <Typography variant="body1">Occupation</Typography></LabelDiv>
              <TextField id="outlined-basic" label="Teacher" variant="outlined" type="type" />
            </InputChild>
            <InputChild>
              <LabelDiv><Typography variant="body1">Gender</Typography></LabelDiv>
              <TextField id="outlined-basic" label="Male" variant="outlined" type="text" />
            </InputChild>
          </InputBox>
          <InputBox>
            <InputChild>
              <LabelDiv><Typography variant="body1">Nationality</Typography></LabelDiv>
              <TextField id="outlined-basic" label="Nigerian" variant="outlined" type="type" />
            </InputChild>
            <InputChild>
              <LabelDiv><Typography variant="body1">State of origin</Typography></LabelDiv>
              <TextField id="outlined-basic" label="Ondo" variant="outlined" type="text" />
            </InputChild>
          </InputBox>
          <InputBox>
            <InputChild>
              <LabelDiv> <Typography variant="body1">LGA of origin</Typography></LabelDiv>
              <TextField id="outlined-basic" label="Akure North" variant="outlined" type="type" />
            </InputChild>
            <InputChild>
              <LabelDiv><Typography variant="body1">House No</Typography></LabelDiv>
              <TextField id="outlined-basic" label="No 44" variant="outlined" type="text" />
            </InputChild>
          </InputBox>
          <InputBox>
            <InputChild>
              <LabelDiv><Typography variant="body1">Street Name</Typography></LabelDiv>
              <TextField id="outlined-basic" label="Obasogo" variant="outlined" type="type" />
            </InputChild>
            <InputChild>
              <LabelDiv><Typography variant="body1">City of residence</Typography></LabelDiv>
              <TextField id="outlined-basic" label="Owo" variant="outlined" type="text" />
            </InputChild>
          </InputBox>

          <InputBox>
            <InputChild>
              <LabelDiv><Typography variant="body1">State of Residence</Typography></LabelDiv>
              <TextField id="outlined-basic" label="Ondo" variant="outlined" type="type" />
            </InputChild>
            <InputChild>
              <LabelDiv> <Typography variant="body1">LGA of Residence</Typography></LabelDiv>
              <TextField id="outlined-basic" label="Owo" variant="outlined" type="text" />
            </InputChild>
          </InputBox>
          <InputBox>
            <InputChild>
              <LabelDiv><Typography variant="body1">TIN</Typography></LabelDiv>
              <TextField id="outlined-basic" label="1234567890987654321" variant="outlined" type="type" />
            </InputChild>
            <InputChild>
              <LabelDiv><Typography variant="body1">Source of Information (optional)</Typography></LabelDiv>
              <TextField id="outlined-basic" label="Owo" variant="outlined" type="text" />
            </InputChild>
          </InputBox>
          <Extra>
            <Typography variant='body1'>I</Typography>
            <input type="checkbox" name="" id="" />
            <Typography variant='body1'>confirm that the above information is true and correct and that Joint Tax Board (JTB) can share the data for the purposes of Automatic Exchange of Information (AEOI) under the extant tax laws with relevant organization including government agencies and financial institutions.</Typography>
          </Extra>
          <ButtonBox>
            <Button variant="contained" onClick={()=>setState(3)}>Update</Button>
            <Button variant="contained" className="reset">Reset</Button>
          </ButtonBox>
        </form>
      </Child>
    </Container>
  )
}

export default Registration2