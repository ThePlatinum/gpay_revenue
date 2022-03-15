import styled from "styled-components"
import {Box, Card} from "@mui/material"

export const Container = styled(Box)`
width: 100%;
`

export const Child = styled(Box)`
width: 100%;
`
export const ChildTop = styled(Box)`
width: 90%;
margin: 2rem auto;
`

export const TextBox = styled(Box)`
width: 50%;
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
.MuiPaper-root.MuiCard-root{
    background: #002E47;
border-radius: 15px;
height: 194px;
width: 367px;
.MuiTypography-root.MuiTypography-h6{
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
font-size: 24px;
line-height: 31px;
letter-spacing: -0.015em;
color: #FFFFFF;
}
}
`

export const TaxCard = styled(Card)`
background: #002E47;
border-radius: 15px;
height: 194px;
width: 367px;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 5rem;
`

export const Main = styled(Box)`
  width: 100%;
  height: 917px;
  background: #e87615;
  padding: 1rem 0;
  .MuiTableContainer-root {
    width: 90%;
    margin: 1rem auto;
    border-top: 2px solid #ffffff;
    .MuiTable-root {
      .MuiTableHead-root {
        border-bottom: 2px solid #ffffff;
        .MuiTableRow-root {
          .MuiTableCell-root {
            font-family: "Montserrat", sans-serif;
            text-align: center;
            color: #ffffff;
            font-weight: 400;
            font-size: 24px;
            line-height: 33px;
            letter-spacing: -0.015em;
            &:first-of-type {
              text-align: left;
            }
            &:last-of-type {
              text-align: right;
            }
          }
        }
      }
      .MuiTypography-root.MuiTypography-h6 {
        font-family: "Montserrat", sans-serif;
        text-align: start;
        color: #ffffff;
        margin-top: 2rem;
        font-weight: 600;
        font-size: 20px;
        line-height: 53px;
        letter-spacing: -0.015em;
      }
      .MuiTableBody-root {
        .MuiTableRow-root{
            background: rgba(255, 255, 255, 0.5);
border-radius: 5px;
height: 60px;
margin-bottom: 1rem;
border: none;
box-sizing: border-box;

.MuiTableCell-root {
            font-family: "Montserrat", sans-serif;
            text-align: center;
            color: #000000;
            font-weight: 500;
            font-size: 20px;
            line-height: 24px;
            padding: 0;
            letter-spacing: -0.015em;
            &:first-of-type {
              text-align: left;
              padding-left: 3rem;
            }
            &:last-of-type {
              text-align: right;
              padding-right: 5rem;
            }
          }
        }
      }
    }
  }
`;

export const Heading = styled(Box)`
  width: 90%;
  padding: 1rem 0;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  .MuiTypography-root.MuiTypography-h4 {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 30.8571px;
    line-height: 43px;
    letter-spacing: -0.015em;
    color: #ffffff;
  }
`;

export const SelectBox = styled(Box)`
  width: 40%;
  display: flex;
  justify-content: flex-end;
  .MuiFormControl-root {
    height: 43px;
    .MuiInputBase-root.MuiOutlinedInput-root {
      background: #ffffff;
      border-radius: 5px;
      height: 100%;
      font-family: "Montserrat", sans-serif;
      font-weight: 500;
      font-size: 18px;
      line-height: 53px;
    }
  }
`;


export const Pagination = styled(Box)`
`