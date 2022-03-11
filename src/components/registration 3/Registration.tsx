import { Button, Typography } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';
import { ButtonBox, Child, Container, Title } from './registration3.style';
const Registration = () => {
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
            <Button variant="contained">Create</Button>
        </ButtonBox>
        </form>
        </Child>
        </Container>
)
}

export default Registration