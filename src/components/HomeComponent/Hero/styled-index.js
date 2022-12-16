import styled from "styled-components";
import heroBg from "../../../assets/image/hero.png";

export const Section = styled.div`
  background-image: url(${heroBg});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 154px 0;
`;

export const RowWrap = styled.div`
  position: relative;
  margin: 0 !important;
  i {
    color: #fff;
    font-size: 66px;
    position: absolute;
    bottom: -16%;
    left: 46%;

    @media only screen and (max-width: 375px) {
      bottom: -25%;
      left: 40%;
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

// Modal styled

export const ModalHeader = styled.div`
  h2 {
    text-align: center;
    font-weight: 700;
    font-size: 30px;
    line-height: 60px;
    text-align: center;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: #ffffff;
  }
  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 33px;
    text-align: center;
    text-transform: uppercase;
    color: #f3f3f3;
    width: 77%;
    margin: 0 auto;
  }
`;

export const ModalBody = styled.div``;

export const Form = styled.form`
  width: 100%;
  margin-top: 30px;
`;

export const InputControls = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;

  label {
    font-weight: 500;
    font-size: 18px;
    line-height: 120%;
    letter-spacing: 0.01em;
    color: #ffffff;
    margin: 10px 0;
  }
  input {
    background: #000000;
    border: none;
    outline: none;
    border-bottom: 1px solid #cccccc;
    width: 96%;
    padding: 10px 10px;
    color: #fff;
  }
`;
