import { Button, Typography } from '@mui/material'
import React from 'react'
import { Child, Container, Title } from './registration5.style'

const Registration5 = () => {
  return (
    <Container>
        <Title>
        <Typography variant="body1"> Tax payment made easy</Typography>
        </Title>
        <Child>
        <Typography variant="h4">Verification Successful</Typography>
        <Button variant="contained">Log in</Button>
        </Child>
    </Container>
  )
}

export default Registration5