import styled from "styled-components";

export const Section = styled.div`
  padding: 20px 0;
  .col {
    margin: 0 auto !important;
    h2 {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 300;
      font-size: 40px;
      line-height: 60px;
      text-align: center;
      letter-spacing: 0.07em;
      text-transform: uppercase;
      color: #ffffff;
    }

    .css-1ehaqqx-MuiButtonBase-root-MuiTabScrollButton-root {
      height: 0 !important;
      display: none !important;
    }
    .css-10d9dml-MuiTabs-indicator {
      width: 100% !important;
      background: #000000 !important;
    }
    .css-1n3h4wo {
      display: flex !important;
      flex-direction: row-reverse;
      height: 329px !important;
      border: 1px solid #fff !important;

      @media only screen and (max-width: 768px) {
        flex-direction: column;
        width: 100% !important;
        height: 281px !important;
      }
    }
    .css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected {
      color: #fff !important;
    }
    .css-1h9z7r5-MuiButtonBase-root-MuiTab-root {
      z-index: 1 !important;
      font-family: "Ruda" !important;
      font-style: normal !important;
      font-weight: 500 !important;
      font-size: 14px !important;
      text-transform: uppercase;
      color: #1b1b1b !important;
      min-height: 66px !important;
    }
    .css-35zqo5-MuiTabs-root {
      border: none !important;
      border-left: 1px solid #fff !important;
      width: 550px !important;
      @media only screen and (max-width: 768px) {
        width: 100% !important;
        border: none !important;
      }
    }

    .tabpanel {
      width: 100% !important;
      @media only screen and (max-width: 768px) {
        height: 400px !important;
      }
    }
    .css-19kzrtu,
    .css-ahj2mt-MuiTypography-root {
      padding: 0 !important;
      height: 100% !important;
    }
    .tabWrapper {
      @media only screen and (max-width: 768px) {
        height: 400px !important;
      }
    }
  }
`;
