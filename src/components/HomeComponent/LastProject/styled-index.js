import styled from "styled-components";

export const Section = styled.div`
  padding: 20px 0;
  h2 {
    font-weight: 300;
    font-size: 40px;
    line-height: 60px;
    text-align: center;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: #ffffff;

    @media only screen and (max-width: 425px) {
      font-size: 28px;
    }
    @media only screen and (max-width: 375px) {
      font-size: 26px;
    }
    @media only screen and (max-width: 320px) {
      font-size: 20px;
    }
  }
  .row {
    margin: 0 !important;
  }
  .col {
    margin: 5px 0 !important;
    padding: 0 6px !important;
    img {
      width: 100%;
      height: 100%;
    }

    .col-content {
      position: relative;
      height: 400px;

      @media only screen and (max-width: 425px) {
        height: auto;
      }
    }
    .blur-box {
      position: absolute;
      background: linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3));
      width: 100%;
      height: 100%;
    }
    .col-text {
      position: absolute;
      bottom: 10px;
      left: 25px;
      h2 {
        font-family: "Ruda";
        font-style: normal;
        font-weight: 500;
        font-size: 29px;
        line-height: 35px;
        text-transform: uppercase;
        color: #f3f3f3;
        margin: 0;
        @media only screen and (max-width: 425px) {
          font-size: 24px;
        }
        @media only screen and (max-width: 375px) {
          font-size: 20px;
        }
      }
      p {
        font-family: "Ruda";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 27px;
        color: #ffffff;
        width: 186px;
        @media only screen and (max-width: 425px) {
          font-size: 14px;
        }
        @media only screen and (max-width: 375px) {
          font-size: 12px;
          line-height: 20px;
        }
      }
    }
  }
`;
