import { Button, Typography } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';
import { ButtonBox, Child, Container, Title } from './registration3.style';

type ChangeState = {
    setState: React.Dispatch<React.SetStateAction<number>>
  }
const Registration3 = ({setState} : ChangeState) => {
return (
    <Container>
        <Title>
        <Typography variant="body1"> Tax payment made easy</Typography>
        </Title>
        <Child>
        <Typography variant="h4">Kindly create your password</Typography>
        <form>
        <TextField id="outlined-basic" label="Mr" variant="outlined" type="text" />
        <TextField id="outlined-basic" label="Mr" variant="outlined" type="text" />
        <ButtonBox>
            <Button variant="contained" onClick={()=>setState(4)}> Create</Button>
        </ButtonBox>
        </form>
        </Child>
        </Container>
)
}

export default Registration3