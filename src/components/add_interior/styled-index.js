import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 20px;
  h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
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
  .h4one{
  color: transparent;
  margin: 42px 0px;
  }
  .h4two{
  color: transparent;
  margin: 23px 0px;
  }
  .h4three{
  color: transparent;
  margin: 0px 0px;
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
    @media only screen and (max-width:768px) {
    margin-top: 70px;
    }
      .padding-top {

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
    .padding-bottom{
      font-style: normal;
      font-weight: 300;
      font-size: 25px;
      line-height: 38px;
      letter-spacing: 0.01em;
      color: black;
      border: 2px solid white;
      background: white;
      text-align: center;
      margin: 0;
      padding: 0;
      margin-bottom: 10px;
      padding: 26px 0;
    }
    a {
      font-style: normal;
      font-weight: 400;
      font-size: 25px;
      line-height: 38px;
      letter-spacing: 0.01em;
      color: #000;
      background: transparent;
      text-align: center;
      margin: 0;
      padding: 0;
    }
  }

`;

export const RowDiv = styled.div`
  margin: 0 !important;
`

