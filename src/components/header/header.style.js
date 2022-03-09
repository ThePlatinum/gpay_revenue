import styled from "styled-components"
import bg from "../../images/Rectangle 3.png"
import {Box} from "@mui/material"

export const Container = styled(Box)`
width: 100%;
height: 582px;
background-image: url("./Rectangle 3.png");
background-size: cover;
background-repeat: no-repeat;
background-position: center;
display: flex;
align-items: center;
justify-content: center;
`

export const HeaderChild = styled(Box)`
width: 60%;
height: 40%;
background: rgba(255, 255, 255, 0.8);
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
.MuiTypography-root.MuiTypography-h4{
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
font-size: 40.0213px;
line-height: 70px;
text-align: center;
letter-spacing: -0.015em;
color: #002E47;

}
@media only screen and (max-width: 480px){
    width: 95%;
    .MuiTypography-root.MuiTypography-h4{
        font-size: 2rem;
    }
}
`

export const ButtonBox = styled(Box)`
width: 30%;
margin: 1rem auto;
display: flex;
justify-content: space-around;
.MuiButton-root.MuiButton-outlined {
    border: 1px solid #E87615;
    color: #E87615;
    a {
        color: inherit;
        text-decoration: none;
    }
    &:hover {
        color: #ffffff;
        background-color: #E87615;
    }
}
.MuiButton-root.MuiButton-contained {
    background-color: #E87615;
    color: #FFFFFF;
    a {
        color: inherit;
        text-decoration: none;
    }
    &:hover {
        background-color: #ffffff;
        color: #E87615;
        border: 1px solid #E87615;
    }
}
@media only screen and (max-width: 480px){
    width: 60%;
    justify-content: space-between;
}
`