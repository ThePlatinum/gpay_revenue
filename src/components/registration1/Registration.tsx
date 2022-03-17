
import React from 'react'
import { Button, Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import { Child, Container, Extra, Title } from './registration1.style'
import { Link } from 'react-router-dom';

type ChangeState = {
    setState: React.Dispatch<React.SetStateAction<number>>
}
const Registration1 = ({setState} : ChangeState) => {
  return (
    <Container>
        <Title>
            <Typography variant="body1">Tax payment made easy</Typography>
        </Title>
        <Child>
            <Typography variant="h4">Register a free account</Typography>
            <form>
                <div>
                <TextField id="outlined-basic" label="Firstname" variant="outlined" type="text" />
                <TextField id="outlined-basic" label="Phone" variant="outlined" type="number" />
                </div>
                <TextField id="outlined-basic" label="Email Address" variant="outlined" type="email" />
                <TextField id="outlined-basic" label="BVN" variant="outlined" type="number" />
                <Button variant="contained" onClick={()=>setState(2)}>Continue</Button>
            </form>
            <Extra>
                <Typography variant="body2">Already have an account?</Typography> <Link to="/login">   Log in</Link>
            </Extra>
        </Child>
    </Container>
  )
}

export default Registration1