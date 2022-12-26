import styled from "styled-components";

export const Section = styled.div`
  padding: 60px 0;
  .row {
    margin: 0 !important;
  }

  .col {
    h2 {
      font-weight: 300;
      font-size: 25px;
      line-height: 38px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #ffffff;
    }

    p {
      font-family: "Ruda";
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 18px;
      letter-spacing: 0.07em;
      text-transform: uppercase;
      color: #ffffff;
    }
  }
  .col-content-wrapper {
    display: flex;
    align-items: top;
    justify-content: flex-start;
    margin: 35px 0;
    img {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      margin: 0 13px;

      @media only screen and (max-width: 375px) {
        margin: 0 7px;
      }
    }
  }
  .col-content {
    h4 {
      font-family: "Ruda";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin: 0 0 15px 0;
      color: #ffffff;
      @media only screen and (max-width: 375px) {
        font-size: 16px;
      }
    }
    p {
      font-family: "Ruda";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      margin: 0;
      color: #ffffff;
      @media only screen and (max-width: 375px) {
        font-size: 14px;
      }

      :nth-child(3) {
        margin-top: 10px;
      }
    }
    .col-media {
      @media only screen and (max-width: 320px) {
        padding-left: 0 !important;
      }
    }
  }
`;
