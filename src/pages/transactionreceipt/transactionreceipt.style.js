import styled from "styled-components"
import {Box} from "@mui/material"

export const Container = styled(Box)`
width: 100%;
`

export const Child = styled(Box)`
width: 100%;
height: 790px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
.MuiButton-root.MuiButton-contained {
    background-color: #E87615;
    color: #FFFFFF;
    text-transform: none;
    font-family: 'Montserrat', sans-serif;
    width: 180px;
    font-weight: 700;
font-size: 15px;
line-height: 18px;
height: 40px;
margin-top: 2rem;
}
`

export const ReceiptBox = styled(Box)`
height: 608px;
width: 40%;
background-image: url("./Mask Group.png");
background-size: cover;
background-repeat: no-repeat;
background-position: center;
display: flex;
justify-content: center;
align-items: center;
`

export const ReceiptChild = styled(Box)`
width: 70%;
height: 466px;
background: rgba(244, 244, 244, 0.6);
padding: 1.5rem;
.MuiTypography-root.MuiTypography-h5{
    font-weight: 600;
font-size: 1rem;
line-height: 31px;
font-family: "Montserrat", sans-serif;
letter-spacing: -0.015em;
color: #000000;
margin-top: 1rem;
padding-bottom: 0.5rem;
border-bottom: 1px solid rgba(0, 0, 0, 0.5);
}
`
export const ReceiptTop = styled(Box)`
width: 100%;
display: flex;
justify-content: space-between;
`
export const ChildLeft = styled(Box)`
width: 60%;
text-align: start;
  .MuiTypography-root.MuiTypography-h4 {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
font-size: 12.2324px;
line-height: 15px;
    letter-spacing: -0.015em;
    color: #000000;
  }
  .MuiTypography-root.MuiTypography-body1 {
    text-align: start;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
font-size: 10.1937px;
line-height: 12px;
  }
`

export const ChildRight = styled(Box)`
width: 20%;
display: flex;
justify-content: flex-end;
img {
    width: 82px;
height: 82px;
}
`

export const ReceiptInfo = styled(Box)`
width: 95%;
display: flex;
justify-content: space-between;
align-items: center;
margin: 0 auto;
.MuiTypography-root.MuiTypography-body1{
    text-align: start;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
font-size: 0.9rem;
line-height: 43px;
letter-spacing: -0.015em;
color: #000000;
min-width: 30%;
}
.MuiTypography-root.MuiTypography-h6{
    text-align: right;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
font-size: 1rem;
line-height: 43px;
letter-spacing: -0.015em;
color: #000000;
min-width: 30%;
}

`
export const LogoBox = styled(Box)`
width: 60%;
display: flex;
padding-top: 1rem;
border-top: 1px solid rgba(0, 0, 0, 0.5);
margin: 0 auto;
img {
    width: 50%;

}
`