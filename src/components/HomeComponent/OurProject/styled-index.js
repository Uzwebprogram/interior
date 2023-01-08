import styled from "styled-components";

export const TabDiv = styled.div`
  z-index: 1 !important;
  font-style: normal !important;
  font-weight: 500 !important;
  font-size: 14px !important;
  text-transform: uppercase;
  color: red;
  min-height: 66px !important;

  @media only screen and (max-width: 583px) {
    width: 100% !important;
  }
`;
export const BigTabs = styled.div`
  border: none !important;
  border-left: 1px solid #fff !important;
  width: 550px !important;
  max-width: 550px;
  color: #fff;
  @media only screen and (max-width: 768px) {
    max-width: 100% !important;
    width: 100% !important;
    min-width: 100% !important;
    height: 338px !important;
  }
  .css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected,
  .css-1q2h7u5.Mui-selected {
    color: #fff !important;
    width: 100% !important;
  }

  .MuiTabs-indicator {
    width: 100% !important;
    background: #000000;
    color: #fff !important;
    @media only screen and (max-width: 583px) {
      width: 100% !important;
    }
  }

  .css-1n6uhfl.Mui-disabled,
  .css-1n6uhfl,
  .css-1ehaqqx-MuiButtonBase-root-MuiTabScrollButton-root {
    display: none;
    height: 0;
  }
`;

export const Section = styled.div`
  padding: 20px 0;
  .row {
    margin: 0 !important;
  }
  .col {
    margin: 0 auto !important;
    padding: 0 6px !important;
    .ant-tabs-nav {
      background: #fff;
      border: 1px solid #fff;
      width: 350px;
      height: 565px;
      @media only screen and (max-width: 768px) {
        height: 100px;
        width: 100%;
        text-align: center;
      }
      @media only screen and (max-width: 425px) {
        border: 1px solid #fff;
      }
    }

    .ant-tabs-tab-btn {
      font-family: "Ruda";
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 58px;
      text-transform: uppercase;
      padding: 0 50px;
      width: 100%;
      color: #1b1b1b;
      @media only screen and (max-width: 768px) {
        width: 100%;
        text-align: center;
        font-size: 16px;
        line-height: 26px;
      }
    }
    .ant-tabs .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
      color: #fff;
      background: #fff;
      position: relative;
      z-index: 1;
      padding: 0;
      width: 100%;
    }
    .ant-tabs .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn::before {
      content: "";
      width: 100%;
      height: 100%;
      background: #000;
      color: #fff;
      position: absolute;
      left: 0;
      z-index: -1;
    }
    .ant-tabs .ant-tabs-tab:hover {
      color: #000;
    }
    .ant-tabs-content {
      height: 100%;
    }
    .ant-tabs-tab {
      padding: 0;
      margin-top: 0;
    }
    .ant-tabs-tabpane {
      height: 100%;
      padding: 0 !important;
      border: 1px solid #fff;
      @media only screen and (max-width: 768px) {
        width: 100%;
        height: 300px;
      }
    }
    .ant-tabs-content-holder {
      border: none;
      margin-right: 1px;
      @media only screen and (max-width: 768px) {
        width: 100%;
      }
    }
    .ant-tabs {
      /* border: 1px solid #fff; */
      /* height: 90vh; */
    }

    @media only screen and (max-width: 768px) {
      .ant-tabs {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column-reverse;
      }
    }

    h2 {
      font-style: normal;
      font-weight: 600;
      font-size: 30px;
      line-height: 60px;
      text-align: center;
      letter-spacing: 0.07em;
      text-transform: uppercase;
      color: #ffffff;
      margin: 0;
    margin-bottom: 27px;
      @media only screen and (max-width: 425px) {
        font-size: 28px;
      }

      @media only screen and (max-width: 375px) {
        font-size: 26px;
      }
      @media only screen and (max-width: 320px) {
        font-size: 20px;
        line-height: 40px;
      }
    }

    .css-1n3h4wo {
      display: flex !important;
      flex-direction: row-reverse;
      height: 329px !important;
      border: 1px solid #fff !important;

      @media only screen and (max-width: 768px) {
        flex-direction: column;
        width: 100% !important;
        height: 181px !important;
      }
    }

    .css-1h9z7r5-MuiButtonBase-root-MuiTab-root {
      @media only screen and (max-width: 768px) {
        min-height: 40px !important;
        min-width: 100% !important;
        max-width: 100% !important;
        width: 100% !important;
      }
    }
    .css-35zqo5-MuiTabs-root {
      @media only screen and (max-width: 768px) {
        width: 100% !important;
        border: none !important;
      }
    }

    .tabpanel {
      width: 100% !important;
      @media only screen and (max-width: 768px) {
        height: 1000px !important;
        border-bottom: 1px solid #fff !important;

        iframe {
          border-top: 1px solid #fff !important;
        }
      }
    }
    .css-19kzrtu,
    .css-ahj2mt-MuiTypography-root {
      padding: 0 !important;
      height: 100% !important;
    }

    .tabWrapper {
      /* height: 330px !important; */
      border: 1px solid #fff !important;
      display: flex;
      flex-direction: row-reverse;
      @media only screen and (max-width: 768px) {
        height: 500px !important;
        flex-direction: column !important;
      }
    }
  }
`;
