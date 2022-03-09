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
width: 90%;
height: 1184px;
margin: 0 auto 4rem;
padding: 2rem;
border: 0.857143px solid rgba(0, 0, 0, 0.5);
.MuiTypography-root.MuiTypography-h4{
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    margin-top: 1rem;
    font-size: 2rem;
line-height: 31px;
text-align: center;
}
`
export const InputBox = styled(Box)`
width: 100%;
display: flex;
margin-top: 2.5rem;
justify-content: space-between;
height: 34px;
`

export const InputChild = styled(Box)`
width: 48%;
height: 100%;
display: flex;
align-items: center;
justify-content: space-between;
.MuiTypography-root.MuiTypography-body1{
    font-family: 'Montserrat', sans-serif; 
    font-weight: 500;
font-size: 12.8571px;
line-height: 16px;
letter-spacing: -0.015em;


}

.MuiFormControl-root.MuiTextField-root{
    width: 80%;
    height: 34px;
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
export const LabelDiv = styled(Box)`
margin-right: 1.5rem;
width: 15%;
text-align: start;
word-wrap: break-word;
`

export const Extra = styled(Box)`
width: 100%;
display: flex;
margin-top: 2.9rem;
align-items: flex-start;
text-align: start;
.MuiTypography-root.MuiTypography-body1{
    font-family: 'Montserrat', sans-serif;
    
    font-weight: 500;
font-size: 12.9613px;
line-height: 16px;
color: #E87615;
}
input {
    border: 1px solid rgba(0, 0, 0, 0.5);
   
}
`

export const ButtonBox = styled(Box)`
width: 100%;
text-align: start;
margin-top: 2.5rem;
.MuiButton-root.MuiButton-contained {
    background-color: #E87615;
    color: #FFFFFF;
    border-radius: 5.14286px;
padding: 0.8rem 1.8rem;
font-weight: 500;
font-size: 12.8571px;
line-height: 16px;
}
.reset {
    background: rgba(0, 0, 0, 0.5) !important;
    margin-left: 1.5rem;
}
`