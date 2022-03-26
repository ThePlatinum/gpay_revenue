import styled from "styled-components"
import {Box} from "@mui/material"

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

border: 0.857143px solid rgba(0, 0, 0, 0.5);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
.MuiTypography-root.MuiTypography-h4{
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    margin-top: 2rem;
    margin-bottom: 1.5rem;
    font-size: 2rem;
line-height: 31px;
text-align: center;
}
.MuiButton-root.MuiButton-contained {
    background-color: #E87615;
    color: #FFFFFF;
    text-transform: none;
    font-family: 'Montserrat', sans-serif;
    border-radius: 5.14286px;
padding: 0.6rem 2rem;
font-weight: 500;
font-size: 12.8571px;
line-height: 16px;
a {
    color: inherit;
    text-decoration: none;
}
}
`

export const ButtonBox = styled(Box)`
width: 100%;
text-align: start;
margin: 0 auto ;
.MuiButton-root.MuiButton-contained {
    background-color: #E87615;
    color: #FFFFFF;
    text-transform: none;
    font-family: 'Montserrat', sans-serif;
    border-radius: 5.14286px;
padding: 0.6rem 2rem;
font-weight: 500;
font-size: 12.8571px;
line-height: 16px;

}
`