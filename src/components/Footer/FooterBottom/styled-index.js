import styled from "styled-components";

export const Wrapper = styled.div`
  border-top: 2px solid white;
  padding-bottom: 20px;
  .Networks {
    display: flex;
    justify-content: space-between;
    width: 30%;
  }
  .Col {
    h2 {
      font-style: normal;
      font-weight: 300;
      font-size: 25px;
      line-height: 38px;
      letter-spacing: 0.07em;
      text-transform: uppercase;
      color: #ffffff;
    }
    ul {
      margin: 0;
      padding: 0;
      list-style-type: none;
      text-decoration: none;
      li {
        margin-bottom: 14px;
        display: flex;
        align-items: center;
        button {
          font-family: "Ruda";
          font-style: normal;
          font-weight: 600;
          font-size: 15px;
          line-height: 18px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #ffffff;
          text-decoration: none;
          background-color: transparent;
          border: none;
        }
      }
      li a {
        font-family: "Ruda";
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 18px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: #ffffff;
        text-decoration: none;
      }
    }
  }
  .Footer-Address {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    span {
      font-family: "Ruda";
      font-style: normal;
      font-weight: 400;
      font-size: 17px;
      line-height: 21px;
      color: #ffffff;
    }
    a {
      text-decoration: none;
      font-family: "Ruda";
      font-style: normal;
      font-weight: 400;
      font-size: 17px;
      line-height: 21px;
      color: #ffffff;
    }
  }
  .Footer-Address-Button {
    margin-top: 28px;
    p {
      font-family: "Ruda";
      font-style: normal;
      font-weight: 400;
      font-size: 17px;
      line-height: 21px;
      color: #ffffff;
      border-bottom: 2px solid white;
      padding-bottom: 15px;
    }
  }
  .Col-Right {
    p {
      margin-top: 64px;
      width: 70%;
      font-family: "Ruda";
      font-style: normal;
      font-weight: 400;
      font-size: 17px;
      line-height: 21px;
      color: #ffffff;
    }
    .buttonSub {
      font-family: "Ruda";
      font-style: normal;
      font-weight: 600;
      font-size: 15px;
      line-height: 18px;
      text-align: center;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #1b1717;
      width: 70%;
      padding-top: 19px;
      padding-bottom: 17px;
      margin-top: 20px;
    }
    h4 {
      margin-top: 3%;
    }
  }

  h4 {
    width: 70%;
    font-family: "Ruda";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 21px;
    color: #ffffff;
    margin: 0;
  }
`;
