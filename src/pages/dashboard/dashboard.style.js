import styled from "styled-components";
import { Box } from "@mui/material";

export const Container = styled(Box)`
  width: 100%;
`;
export const Child = styled(Box)`
  width: 90%;
  margin: 3rem auto;
`;
export const TopChild = styled(Box)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const TopLeft = styled(Box)`
  width: 45%;
  .MuiTypography-root.MuiTypography-h4 {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 22px;
    color: #002e47;
    text-align: start;
    margin-bottom: 2rem;
  }
  .MuiTypography-root.MuiTypography-body1 {
    text-align: start;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    margin-bottom: 0.8rem;
  }
  .MuiTypography-root.MuiTypography-body2 {
    text-align: start;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 12.8571px;
    line-height: 16px;
    margin-bottom: 0.8rem;
  }
`;
export const TopRight = styled(Box)`
  width: 45%;
  .MuiButton-root.MuiButton-contained {
    background: #002e47;
    border-radius: 5px;
    height: 65px;
    width: 100%;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 53px;
    text-transform: none;
  }
`;

export const BottomChild = styled(Box)`
  width: 55%;
  height: 165px;
  background: #c4c4c4;
  border-radius: 15px;
  box-sizing: border-box;
  padding: 1.5rem 0;
`;

export const Top = styled(Box)`
  width: 95%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;
export const RightTop = styled(Box)`
  text-align: start;
  .MuiTypography-root.MuiTypography-h4 {
    font-family: "Montserrat", sans-serif;
    font-weight: bolder;
    font-size: 1.7rem;
    line-height: 43px;
    letter-spacing: -0.015em;
    color: #000000;
  }
  .MuiTypography-root.MuiTypography-body1 {
    text-align: start;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
  }
`;
export const LeftTop = styled(Box)`
  text-align: end;
  .MuiTypography-root.MuiTypography-h4 {
    font-family: "Montserrat", sans-serif;
    font-weight: bolder;
    font-size: 1.7rem;
    line-height: 43px;
    letter-spacing: -0.015em;
    color: #000000;
  }
`;

export const LeftExtra = styled(Box)`
  display: flex;
  align-items: center;
  .MuiTypography-root.MuiTypography-body1 {
    text-align: start;
    margin-right: 0.4rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
  }
`;

export const ButtonBox = styled(Box)`
  text-align: start;
  margin: 1rem auto 0;
  width: 95%;

  .MuiButton-root.MuiButton-contained {
    background: #002e47;
    border-radius: 3.97059px;
    text-transform: none;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 23px;
    letter-spacing: -0.015em;
  }
  .link {
    background: #e87615 !important;
    margin-left: 1.2rem;
  }
`;

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