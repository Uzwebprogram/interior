import styled from "styled-components";

export const Section = styled.div`
  background: linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3)),  url(${props => (props.bg)}) ;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const RowWrap = styled.div`
  position: relative;
  margin: 0 !important;
  i {
    color: #000;
    font-size: 66px;
    position: absolute;
    bottom: -30%;
    left: 46%;

    @media only screen and (max-width: 425px) {
      bottom: -40%;
      left: 40%;
    }

    @media only screen and (max-width: 375px) {
      bottom: -36%;
      left: 39%;
    }
  }
`;

export const ColItem = styled.div`
  padding: 0;
  h1 {
    font-weight: 900;
    font-size: 17px;
    line-height: 26px;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: #ffffff;

    @media only screen and (max-width: 534px) {
      font-size: 14px;
    }
    @media only screen and (max-width: 375px) {
      font-size: 12px;
    }
  }
  h2 {
    font-weight: 900;
    font-size: 45px;
    line-height: 68px;
    margin: 0;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: #ffffff;

    @media only screen and (max-width: 664px) {
      font-size: 35px;
    }
    @media only screen and (max-width: 534px) {
      font-size: 30px;
      line-height: 48px;
    }

    @media only screen and (max-width: 470px) {
      font-size: 25px;
      line-height: 48px;
    }

    @media only screen and (max-width: 425px) {
      font-size: 25px;
      line-height: 48px;
    }
    @media only screen and (max-width: 375px) {
      font-size: 20px;
      line-height: 38px;
    }
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #ffffff;
    width: 76%;
    @media only screen and (max-width: 470px) {
      width: 100%;
    }
    @media only screen and (max-width: 375px) {
      font-size: 13px;
    }
  }
  button {
    background: #ff800b;
    font-weight: 900;
    font-size: 12px;
    line-height: 26px;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: #ffffff;
    border: none;
    padding: 20px 40px;
  }
`;
