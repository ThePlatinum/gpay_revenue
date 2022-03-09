import { Button, Typography } from '@mui/material'
import React from 'react'
import {Link} from "react-router-dom"
import { ButtonBox,Container, HeaderChild } from './header.style'

const Header = () => {
  return (
    <Container classname="header">
        <HeaderChild>
        <Typography variant="h4">
        Pay Your Tax Anywhere, Anytime
          </Typography>
          <ButtonBox>
            <Button variant="outlined">
            <Link to="/login">Login</Link>
              </Button>
            <Button variant="contained">
            <Link to="/register">Register</Link></Button>
          </ButtonBox>
        </HeaderChild>
        </Container>
  )
}

export default Header