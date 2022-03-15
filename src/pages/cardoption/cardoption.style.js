import styled from "styled-components";
import { Box } from "@mui/material";

export const Container = styled(Box)`
  width: 100%;
`;
export const Child = styled(Box)`
  width: 100%;
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
margin-bottom: 4rem;
}
`;

export const ChildBox = styled(Box)`
  height: 608px;
  width: 40%;
  border: 0.857143px solid rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  margin: 4rem auto 7rem;
  padding: 2rem;

  .MuiTypography-root.MuiTypography-h4 {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 20.5714px;
    line-height: 31px;
    letter-spacing: -0.015em;
    color: #000000;
  }
  .MuiPaper-root.MuiAccordion-root {
    box-shadow: none;
    border: 0.857143px solid rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    width: 111.6%;
    margin-left: -2.05rem;
    margin-bottom: 0;
    .MuiAccordionSummary-root {
      border-bottom: 0.857143px solid rgba(0, 0, 0, 0.5);
      .MuiTypography-root.MuiTypography-body1 {
        font-family: "Montserrat", sans-serif;
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
      }
    }
    .MuiButtonBase-root.MuiAccordionSummary-root.Mui-expanded {
      min-height: 32px;
    }
  }
  .MuiPaper-root.MuiAccordion-root.Mui-expanded{
      margin-bottom: 0;
      &:last-of-type{
          margin-top: 0;
      }
  }
`;
export const OptionBox = styled(Box)`
  width: 75%;
  margin: auto;
  .MuiFormControl-root {
    .MuiFormGroup-root {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .MuiFormControlLabel-root {
        .MuiButtonBase-root.MuiRadio-root {
          .MuiSvgIcon-root {
            width: 15px;
            height: 15px;
          }
        }
        .MuiTypography-root.MuiTypography-body1 {
          font-family: "Montserrat", sans-serif;
          font-weight: 500;
          font-size: 0.9rem;
          line-height: 21px;
          letter-spacing: -0.015em;
          color: rgba(0, 0, 0, 0.8);
          margin-left: -0.2rem;
        }
      }
    }
  }
`;

export const SavedInfo = styled(Box)`
  width: 80%;
  height: 66px;
  margin: 1rem auto;
  border: 0.857143px solid rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  text-align: start;
  padding: 1rem;
  .MuiTypography-root.MuiTypography-body1 {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 32px;
    line-height: 21px;
    letter-spacing: -0.015em;
    color: rgba(0, 0, 0, 0.8);
    text-align: start;
    margin-bottom: 0.2rem;
  }
  .MuiTypography-root.MuiTypography-body2 {
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: rgba(0, 0, 0, 0.8);
    text-align: start;
  }
`;
export const NewInfo = styled(Box)`
  text-align: start;
  width: 100%;
  padding: 2rem;
  .MuiTypography-root.MuiTypography-body2 {
    margin-bottom: 0.5rem;
  }
  .MuiFormControl-root.MuiTextField-root {
    width: 85%;
    margin-bottom: 1rem;
    height: 34px;
    .MuiInputBase-root.MuiOutlinedInput-root {
      height: 100%;
      border-radius: 0;
    }
  }
`;

export const NewChild = styled(Box)`
  text-align: start;
  width: 85%;
  display: flex;
  justify-content: space-between;
`;
export const NewBox = styled(Box)`
  text-align: start;
  width: 45%;
  .MuiFormControl-root.MuiTextField-root {
    width: 100%;
    margin-bottom: 1rem;
    height: 34px;

    .MuiInputBase-root.MuiOutlinedInput-root {
      height: 100%;
      border-radius: 0;
    }
  }
`;
