import { Typography } from '@mui/material'
import React from 'react'
import { Container, ContainerChild, MainLeft, MainRight } from './main.style'
import image from "../../images/Group 1.png"

const Main = () => {
  return (
    <Container>
       <ContainerChild>
       <MainLeft>
        <Typography variant="body1">Learn all about the simple process of paying your tax</Typography>
        </MainLeft>
        <MainRight>
          <img src={image} alt="" />
        </MainRight>
       </ContainerChild>
    </Container>
  )
}

export default Main