import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 20px;
  h2 {
    font-style: normal;
    font-weight: 300;
    font-size: 40px;
    line-height: 60px;
    text-align: center;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: #ffffff;
    text-align: center;
    @media only screen and (max-width: 820px) {
      font-size: 30px;
    }
    @media only screen and (max-width: 505px) {
      font-size: 20px;
      line-height: 30px;
    }
    @media only screen and (max-width: 340px) {
      font-size: 16px;
      line-height: 30px;
    }
  }

  .ContainerCard {
    margin-bottom: 30px;
    img {
      width: 100%;
    }
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      hr {
        background-color: rgba(0, 0, 0, 0.5);
        border: 1px solid gray;
      }
    }
    h3 {
      font-style: normal;
      font-weight: 300;
      font-size: 25px;
      line-height: 120%;
      letter-spacing: 0.01em;
      color: #ffffff;
    }
    button {
      background: #ffffff;
      width: 100%;
      padding: 8px 0px;
      a {
        font-family: "Ruda";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 120%;
        text-align: center;
        letter-spacing: 0.01em;
        color: #000000;
        text-decoration: none;
      }
    }
  }
  .Card {
    img {
      width: 100%;
    }
    p {
      font-style: normal;
      font-weight: 300;
      font-size: 25px;
      line-height: 38px;
      letter-spacing: 0.01em;
      color: #ffffff;
      background: #494949;
      text-align: center;
      margin: 0;
      padding: 0;
      margin-bottom: 10px;
      padding: 26px 0;
    }
  }

`;

export const RowDiv = styled.div`
  margin: 0 !important;
`

