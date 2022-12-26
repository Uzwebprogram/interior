import styled from "styled-components";

export const Section = styled.div`
  padding: 60px 0;
`;

export const BeforeContainer = styled.div`
  max-width: 98%;
  width: 100%;
  margin: 0 auto;

  .twenty-img {
    width: 100%;
    height: 557px;
    @media only screen and (max-width: 768px) {
      height: 360px;
    }
    @media only screen and (max-width: 425px) {
      height: 270px;
    }
  }

  .slider {
    height: 557px;
    width: 100px;
    width: 2px;
    z-index: 1;
    background: #fff;

    @media only screen and (max-width: 768px) {
      height: 360px;
    }
    @media only screen and (max-width: 425px) {
      height: 270px;
    }
  }
  .row {
    margin: 0 !important;
  }
  .big-col {
    padding: 0 !important;
    margin: 20px 0 !important;
  }
  .small-row {
    margin: 0 !important;
  }
  .col {
    padding: 0 !important;
  }

  .white-col {
    background: #fff;
    padding: 0 !important;
    height: 557px;
    @media only screen and (max-width: 768px) {
      height: auto;
    }

    h3 {
      color: #000;
      font-weight: 300;
      font-family: "Ruda";
      font-size: 25px;
      line-height: 38px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    p {
      color: #000;
      font-family: "Ruda";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 27px;
    }
  }
  .col-content {
    /* width: 100%; */
    height: 100%;
    padding: 10px;
  }
`;
