import { Button, Typography } from '@mui/material'
import React from 'react'
import { ButtonBox,Container, HeaderChild } from './header.style'

const Header = () => {
  return (
    <Container classname="header">
        <HeaderChild>
        <Typography variant="h4">
        Pay Your Tax Anywhere, Anytime
          </Typography>
          <ButtonBox>
            <Button variant="outlined">Login</Button>
            <Button variant="contained">Register</Button>
          </ButtonBox>
        </HeaderChild>
        </Container>
  )
}

export default Header