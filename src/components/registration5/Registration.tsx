import { Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { Child, Container, Title } from './registration5.style'

const Registration5 = () => {
  return (
    <Container>
        <Title>
        <Typography variant="body1"> Tax payment made easy</Typography>
        </Title>
        <Child>
        <Typography variant="h4">Verification Successful</Typography>
        <Button variant="contained">
          <Link to="/login">Log in</Link>
        </Button>
        </Child>
    </Container>
  )
}

export default Registration5