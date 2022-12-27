import styled from "styled-components";
import beforeIcon from '../../../assets/image/beforeVSafter/icons.svg'
export const Section = styled.div`
  padding: 60px 0;
`;

export const BeforeContainer = styled.div`
  max-width: 98%;
  width: 100%;
  margin: 0 auto;

  .twenty-img {
    width: 100%;
    height: 90vh !important;
    @media only screen and (max-width: 768px) {
      height: 360px;
    }
    @media only screen and (max-width: 425px) {
      height: 270px;
    }
  }

  .slider {
    height: 90vh;
    width: 100px;
    width: 3px;
    z-index: 1;
    background: #fff;
    position: relative;

    ::before{
      content: '';
      position: absolute;
      background-image: url(${beforeIcon});
      width: 63px;
      height: 63px;
      border-radius: 50%;
      left: -30px;
      top: 50%;
      transform: translateY(-50%);
    }

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
    height: 90vh;
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
    margin: 0 auto;

    img{
      margin: 10px 0;
      width: 90%;
    }
  }
  .Before_After_About{
    display: flex;
    align-items: center;
    padding: 10px 0px;
    width: 90%;
    border: 3px dotted black;
    img {
      margin: 0;
      padding: 0;
      width: 40%;
    }
  }
`;
