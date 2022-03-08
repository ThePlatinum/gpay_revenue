import styled from "styled-components"
import { Box } from "@mui/material"

export const Container = styled(Box)`
width: 100%;
`
export const Title = styled(Box)`
width: 40%;
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
padding: 3rem;
text-align: start;

.MuiTypography-root.MuiTypography-h4{
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 2rem;
line-height: 31px;
}
form{
    &>div{
        width: 100%;
        margin: 2rem 0;
        display: flex;
    justify-content: space-between;
    .MuiFormControl-root.MuiTextField-root{
        width: 48%;
        .MuiInputBase-root.MuiOutlinedInput-root{
            input {
                ::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    appearance: none;
                    margin: 0;
                }
                ::-webkit-outer-spin-button {
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    appearance: none;
                    margin: 0;
                }
                -moz-appearance: textfield;
            }
        }
    }
    }
    .MuiFormControl-root.MuiTextField-root{
        width: 100%;
        .MuiInputBase-root.MuiOutlinedInput-root{
            input {
                ::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    appearance: none;
                    margin: 0;
                }
                ::-webkit-outer-spin-button {
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    appearance: none;
                    margin: 0;
                }
                -moz-appearance: textfield;
            }
        }
    }
    .MuiFormLabel-root.MuiInputLabel-root{
        font-family: 'Montserrat', sans-serif;
        color: rgba(0, 0, 0, 0.8);

    }
    .MuiButtonBase-root.MuiButton-root{
        background: #E87615;
border-radius: 5.14286px;
text-transform: none;
font-weight: 500;
font-size: 12.8571px;

font-family: 'Montserrat', sans-serif;
    }
}
`

export const Extra = styled(Box)`
width: 100%;
display: flex;
align-items: center;
margin-top: 0.5rem;
a{
    text-decoration: none;
    color: #E87615;
    margin-left: 1rem;
    font-weight: normal;
font-size: 12.8571px;
line-height: 21px;
}
.MuiTypography-root.MuiTypography-body2{
    font-family: 'Montserrat', sans-serif;
    color: rgba(0, 0, 0, 0.8);
    letter-spacing: -0.015em;
    font-weight: normal;
font-size: 12.8571px;
line-height: 21px;
}
`