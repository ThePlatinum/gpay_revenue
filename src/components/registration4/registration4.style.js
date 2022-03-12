import styled from "styled-components"
import { Box } from "@mui/material"

export const Container = styled(Box)`
width: 100%;
`

export const Title = styled(Box)`
width: 80%;
margin: 2rem auto;
.MuiTypography-root.MuiTypography-body1{
    font-family: 'Montserrat', sans-serif;
    font-weight: normal;  
font-size: 3.2rem;
text-align: center;
line-height: 80px;
letter-spacing: -0.015em;
color: #000;
}
`

export const Child = styled(Box)`
width: 40%;
height: 394px;
margin: 0 auto 4rem;
padding: 2rem;
border: 0.857143px solid rgba(0, 0, 0, 0.5);
.MuiTypography-root.MuiTypography-h4{
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    margin-top: 2rem;
    margin-bottom: 1.5rem;
    font-size: 2rem;
line-height: 31px;
text-align: center;
}
`
export const OtpBox = styled(Box)`
width: 70%;
margin: 2rem auto;
padding: 0 2.5rem;
.MuiTypography-root.MuiTypography-body1{
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
font-size: 1.2rem;
text-align: start;
line-height: 21px;
letter-spacing: -0.015em;

color: rgba(0, 0, 0, 0.8);
}
.otp-container {
    width: 100%;
    margin-top: 1rem;
    input {
        width: 47px !important;
height: 49px;
background: rgba(196, 196, 196, 0.5);
border-radius: 5px;
border: none;
outline: none;
    }
}
.MuiTypography-root.MuiTypography-h4{
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
font-size: 20.5714px;
line-height: 31px;
text-align: right !important;
margin-right: 1.5rem;
}
`

export const Extra = styled(Box)`
width: 70%;
margin: 0 auto;
display: flex;
.MuiTypography-root.MuiTypography-body2{
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 18px;
line-height: 21px;
color: rgba(0, 0, 0, 0.8);
letter-spacing: -0.015em;
}
a {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 18px;
line-height: 21px;
color: #E87615;
letter-spacing: -0.015em;
margin-left: 0.2rem;
}
`
export const ButtonBox = styled(Box)`
width: 70%;
text-align: start;
margin: 2rem auto 0;
.MuiButton-root.MuiButton-contained {
    background-color: #E87615;
    color: #FFFFFF;
    text-transform: none;
    font-family: 'Montserrat', sans-serif;
    border-radius: 5.14286px;
padding: 0.8rem 1.8rem;
font-weight: 500;
font-size: 12.8571px;
line-height: 16px;
}

`