import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
  h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    text-align: center;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: #ffffff;
    margin: 0;
    padding: 0;
    margin-top: 86px;
    @media only screen and (max-width: 510px) {
      margin-top: 56px;
      font-size: 30px;
    }
  }
  p{
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 66px;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    text-align: center;
    letter-spacing: 0.07em;
    width: 45%;
    @media only screen and (max-width: 510px) {
      margin-bottom: 56px;
      font-size: 18px;
      width: 100%;
    }
}    
`;
export const Contact = styled.form`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  margin: 10px 0;
  h3 {
    font-style: normal;
    font-weight: 300;
    font-size: 40px;
    line-height: 60px;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: #ffffff;
    text-align: center;
    width: 99%;
    margin: 0;
    padding: 0;
    @media only screen and (max-width: 448px) {
      font-size: 30px;
    }
  }
  h4 {
    font-family: "Ruda";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 33px;
    text-transform: uppercase;
    color: #f3f3f3;
    text-align: center;
    width: 80%;
    margin: 0 auto;
    margin-top: 10px;
    @media only screen and (max-width: 448px) {
      font-size: 16px;
    }
  }
  label {
    font-weight: 500;
    font-size: 18px;
    line-height: 120%;
    letter-spacing: 0.01em;
    color: #ffffff;
    margin: 20px 0;
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
