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

  .trustContainer {
    max-width: 100%;
    width: 100%;
    margin: 0 auto;
  }

  .row {
    margin: 0 !important;
  }

  .col {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }
`;
