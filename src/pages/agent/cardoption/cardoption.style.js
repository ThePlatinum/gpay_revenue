import styled from "styled-components"
import {Box} from "@mui/material"

export const Container = styled(Box)`
width: 100%;
`

export const Child = styled(Box)`
width: 100%;
`

export const TopChild = styled(Box)`
width: 40%;
height: 334px;
border: 0.857143px solid rgba(0, 0, 0, 0.5);
box-sizing: border-box;
margin: 5rem auto 2.5rem;

.MuiTypography-root.MuiTypography-h4 {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
font-size: 20.5714px;
line-height: 31px;
letter-spacing: -0.015em;
color: #000000;
margin-top: 3rem;
}
`
export const BottomChild = styled(Box)`
width: 40%;
height: 334px;
border: 0.857143px solid rgba(0, 0, 0, 0.5);
box-sizing: border-box;
margin: 4rem auto 5rem;
`