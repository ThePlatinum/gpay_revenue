import { Button, Typography } from '@mui/material';
import OtpInput from 'react-otp-input';
import { Link } from 'react-router-dom';
import { ButtonBox, Child, Container, Extra, OtpBox, Title } from './registration4.style'

type ChangeState = {
  setState: React.Dispatch<React.SetStateAction<number>>
}
const Registration4 = ({setState} : ChangeState) => {
  return (
    <Container>
      <Title>
        <Typography variant="body1">Tax payment made easy</Typography>
      </Title>
      <Child>
        <Typography variant="h4">Kindly verify your BVN</Typography>
        <OtpBox>
          <Typography variant="body1">Please enter the verification code sent to the phone number linked to you BVN</Typography>
          <OtpInput numInputs={6} className="otp-container"></OtpInput>
          <Typography variant="h4">02:43</Typography>
        </OtpBox>
       <Extra>
         <Typography variant="body2">Didn’t receive the code?</Typography>
         <Link to="/">Resend</Link>
       </Extra>
       <ButtonBox>
         <Button variant="contained" onClick={()=>setState(5)}>Verify</Button>
       </ButtonBox>
      </Child>
    </Container>
  )
}

export default Registration4