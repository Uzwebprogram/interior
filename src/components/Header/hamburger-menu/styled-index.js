import styled from "styled-components";

export const Wrapper = styled.div`
  display: none;
  button {
    font-style: normal;
    font-size: 15px;
    line-height: 22px;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #ffffff;
    text-decoration: none;
    background-color: transparent;
    border: none;
  }
  @media only screen and (max-width: 768px) {
    position: fixed;
    display: flex;
    width: 80%;
    height: 100%;
    background-color: black;
    flex-direction: column;
    padding: 10px;
    left: -650px;
    transition: 2s;
    z-index: 1000;
    top: 0;
    select {
      background-color: transparent;
      color: white;
      padding: 6px 8px;
      cursor: pointer;
      width: 78px;
      margin-bottom: 26px;
    }
    select option {
      background-color: #737373;
    }
    span {
      cursor: pointer;
      font-size: 64px;
      color: white;
      margin-left: auto;
    }
    ul {
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 59px;
    }
    ul li {
      list-style-type: none;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    hr {
      border: transparent;
      width: 100%;
      background-color: #737373;
      height: 1px;
      margin-left: 0;
      opacity: 0.3;
    }
    hr:nth-child(14) {
      display: none;
    }
    ul li a {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 23px;
      text-transform: uppercase;
      color: #ffffff;
      text-decoration: none;
    }
    a:nth-child(5) {
      background: #ffd700;
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 23px;
      text-transform: uppercase;
      color: #000000;
      padding-top: 18px;
      padding-bottom: 19px;
      text-align: center;
      text-decoration: none;
    }
  }

  .dropdown {
    margin-top: 5px;
  }
  .conBtn {
    padding-bottom: 10px;
  }
`;
