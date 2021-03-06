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
padding: 2rem;
border: 0.857143px solid rgba(0, 0, 0, 0.5);
.MuiTypography-root.MuiTypography-h4{
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    margin-top: 2rem;
    margin-bottom: 2.5rem;
    font-size: 2rem;
line-height: 31px;
text-align: center;
}
.MuiFormControl-root.MuiTextField-root{
    width: 90%;
    height: 39px;
    margin-bottom: 2.5rem;
    .MuiInputBase-root.MuiOutlinedInput-root{
        height: 100%;
       
    }
    .MuiFormLabel-root.MuiInputLabel-root{
        font-weight: 500;
font-size: 12.8571px;
line-height: 16px;
display: flex;
align-items: center;
margin-top: -5px;
color: rgba(0, 0, 0, 0.5);
    }
}
`

export const ButtonBox = styled(Box)`
width: 90%;
text-align: start;
margin: 0 auto ;
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