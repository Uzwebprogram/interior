import styled from "styled-components";

export const Section = styled.div`
  .grid-img {
    width: 100% !important;
    height: auto !important;
  }
`;

export const GridContainer = styled.div`
  max-width: 98%;
  width: 100%;
  margin: 0 auto;

  h2 {
    font-weight: 300;
    font-size: 40px;
    line-height: 60px;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: #ffffff;
    border: 1px solid #000000;

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
`;
