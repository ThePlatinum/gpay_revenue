import styled from "styled-components";
import { Box } from "@mui/material";

export const Container = styled(Box)`
  width: 100%;
`;

export const Child = styled(Box)`
  width: 100%;
  height: 582px;
  background-image: url("./Rectangle 3.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ChildBox = styled(Box)`
  width: 358px;
  height: 474px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  text-align: center;
  padding: 1rem;
.MuiFormControl-root.MuiTextField-root{
    width: 80%;
    height: 38px;
    margin-bottom: 1.2rem;
    background: #FFFFFF;
border: 0.857143px solid rgba(0, 0, 0, 0.5);
box-sizing: border-box;
    .MuiInputBase-root.MuiOutlinedInput-root{
        height: 100%;
       border-radius: 0px;
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
.MuiButton-root.MuiButton-contained{
    width: 130px;
    height: 40px;
    background: #E87615;
border-radius: 6px;
color: #fff;
    text-transform: none;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
font-size: 15px;
line-height: 18px;
}
a {
    display: block;
    text-decoration: none;
    font-weight: 600;
font-size: 12.8571px;
line-height: 21px;
letter-spacing: -0.015em;
color: rgba(232, 118, 21, 0.8);
margin-top: 1rem;
}
`;

export const ButtonBox = styled(Box)`
  width: 50%;
  display: flex;
  margin: 1rem auto;
  justify-content: space-between;

  .MuiButton-root.MuiButton-contained {
    width: 78.35px;
    height: 24px;
    background: #cfcfcf;
    
    box-sizing: border-box;
    border-radius: 5px;
    color: black;
    text-transform: none;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
font-size: 12px;
line-height: 21px;
&:focus {
    border: 1px solid #e87615;
    color: #E87615;
}
  }
`;

export const Extra = styled(Box)`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 0.5rem;
font-family: 'Montserrat', sans-serif;
font-weight: 400;
font-size: 12.8571px;
line-height: 21px;
letter-spacing: -0.015em;
color: rgba(0, 0, 0, 0.8);

 a {
     margin-top: 0;
     margin-left: 0.5rem;
 }
`