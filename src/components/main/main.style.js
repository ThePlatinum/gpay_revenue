import styled from "styled-components"
import { Box } from "@mui/material"

export const Container = styled(Box)`
width: 100%;
height: 582px;
display: flex;
justify-content: center;
align-items: center;
@media only screen and (max-width: 480px){
    height: 40vh;
}
`

export const ContainerChild = styled(Box)`
width: 80%;
height: 70%;
display: flex;
justify-content:space-between;
align-items: center;
@media only screen and (max-width: 480px){
    width: 95%;
}
`
export const MainRight = styled(Box)`
width: 60%;
img {
    width: 100%;
    
}
@media only screen and (max-width: 480px){
    width: 50%;
}
`

export const MainLeft = styled(Box)`

width: 40%;

.MuiTypography-root.MuiTypography-body1{
    font-family: 'Montserrat', sans-serif;
    font-weight: normal;
    margin-right: 5rem;
font-size: 2rem;
line-height: 70px;
text-align: start;
letter-spacing: -0.015em;
color: #000;

}
@media only screen and (max-width: 480px){
    width: 50%;
    .MuiTypography-root.MuiTypography-body1{
        margin-right: 0;
        font-size: 1rem;
        line-height: 25px;
    }
}
`