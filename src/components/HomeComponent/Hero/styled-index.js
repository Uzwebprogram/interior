import styled from "styled-components";

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

export const ModalBody = styled.div`
  .radio-label {
    font-family: "Ruda" !important;
    font-style: normal !important;
    font-weight: 400 !important;
    font-size: 12px !important;
    line-height: 120% !important;
    letter-spacing: 0.01em !important;
    color: rgba(255, 255, 255, 0.9) !important;
  }

  .radioGruop {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 10px 0;

    input[type="radio"] {
      margin: 0 10px 0 0;
      cursor: pointer;
      width: 20px;
      height: 20px;
      /* -webkit-appearance: none; */
      border: 2px solid #fff;
      border-radius: 50%;
    }
    /* .radio-input:checked {
      background: #fff;
    } */
    /* 
    #accent {
      accent-color: red;
    }

    input[type="radio"]:before {
      content: "";
      display: block;
      width: 10px;
      height: 10px;
      margin: 3px 3px 3px 3px;
      border-radius: 50%;
    }
    input[type="radio"]:checked:before {
      background: #fff;
    } */
  }
`;

export const Form = styled.form`
  width: 100%;
  margin-top: 30px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  .radio-wrapper {
    margin: 35px 0;

    textarea {
      width: 100%;
      border: none;
      background: #000000;
      border-bottom: 1px solid #cccccc;
      outline: none;
      font-family: "Ruda";
      color: #fff;
    }
  }

  label {
    font-weight: 500;
    font-size: 18px;
    line-height: 120%;
    letter-spacing: 0.01em;
    color: #ffffff;
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
  .labelInput {
  margin: 15px 0px !important;
  }
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
export const Success = styled.div`
  text-align: center;
  p{
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    color: #FFFFFF;
  }
  button{
    background: #FFFFFF;
    border-radius: 7px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #000000;
    padding: 15px;
    width: 74px;
    cursor: pointer;
  }
`