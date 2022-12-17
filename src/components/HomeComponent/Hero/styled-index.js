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
