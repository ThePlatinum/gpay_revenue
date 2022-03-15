import styled from "styled-components"
import { Box } from "@mui/material"

export const Container = styled(Box)`
width: 100%;
`

export const Child = styled(Box)`
width: 100%;
height: 580px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
.MuiTypography-root.MuiTypography-h6{
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
font-size: 36px;
line-height: 44px;
color: #000000;
margin-bottom: 3rem;
}
.MuiButton-root.MuiButton-contained {
    background-color: #E87615;
    color: #FFFFFF;
    text-transform: none;
    font-family: 'Montserrat', sans-serif;
    width: 144px;
    font-weight: 700;
font-size: 15px;
line-height: 18px;
height: 40px;
}
`

export const CheckBox = styled(Box)`
width: 200px;
height: 200px;
background: #E87615;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 4rem;
`