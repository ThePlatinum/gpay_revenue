import styled from "styled-components"
import {Box} from "@mui/material"

export const Container = styled(Box)`
width: 100%;
`

export const Child = styled(Box)`
width: 100%;
`
export const ChildTop = styled(Box)`
width: 85%;
margin: 2rem auto;
`

export const TextBox = styled(Box)`
width: 58%;
.MuiTypography-root.MuiTypography-body1{
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
font-size: 41.1429px;
line-height: 53px;
letter-spacing: -0.015em;
text-align: start;
margin-bottom: 2rem;
}
`
export const CardBox = styled(Box)`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;

.MuiButton-root.MuiButton-contained{
    height: 73px;
    background: #002E47;
border-radius: 5px;
width: 45%;
display: flex;
align-items: center;
justify-content: space-between;
font-family: "Montserrat", sans-serif;
font-weight: 500;
font-size: 36px;
line-height: 53px;
letter-spacing: -0.015em;
text-transform: none;
margin-bottom: 3rem;
padding: 0 1.5rem;
}
`