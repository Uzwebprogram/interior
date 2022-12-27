import styled from "styled-components";

export const Wrapper = styled.div`
  a {
    text-decoration: none;
    i {
      color: #000;
      font-size: 30px;
    }
  }
  a:nth-child(1) {
    position: fixed;
    background: #ffffff;
    margin-bottom: 20px;
    margin-left: 40px;
    z-index: 100;
    left: 10px;
    bottom: 10px;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transform: all 0.5s ease;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
    @media only screen and (max-width: 768px) {
      margin-left: 10px;
      width: 60px;
      height: 60px;
    }
    ::before {
      content: "";
      position: absolute;
      z-index: -1;
      left: 60px;
      transform: translateX(-40%) translateX(-50%);
      display: block;
      width: 60px;
      height: 60px;
      background: rgba(65, 65, 65, 0.67);
      border-radius: 50%;
      -webkit-animation: pulse-border 1500ms ease-out infinite;
      animation: pulse-border 1500ms ease-out infinite;
      @media only screen and (max-width: 768px) {
        left: 63px;
        width: 65px;
        height: 65px;
      }
    }

    :focus {
      border: none;
      outline: none;
    }
    @keyframes pulse-border {
      0% {
        transform: translateX(-100%) translateY(-1%) translateZ(0) scale(1);
        opacity: 1;
      }
      100% {
        transform: translateX(-100%) translateY(-1%) translateZ(0) scale(1.5);
        opacity: 0;
      }
    }
  }
  a:nth-child(2) {
    position: fixed;
    background: #ffffff;
    right: 10px;
    z-index: 100;
    bottom: 10px;
    margin-bottom: 20px;
    margin-right: 40px;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    @media only screen and (max-width: 768px) {
      margin-right: 10px;
      width: 60px;
      height: 60px;
    }
    ::before {
      content: "";
      position: absolute;
      z-index: -1;
      left: 60px;
      transform: translateX(-50%) translateX(-50%);
      display: block;
      width: 60px;
      height: 60px;
      background: rgba(65, 65, 65, 0.67);
      border-radius: 50%;
      -webkit-animation: pulse-border 1500ms ease-out infinite;
      animation: pulse-border 1500ms ease-out infinite;
      @media only screen and (max-width: 768px) {
        width: 70px;
        height: 70px;
        left: 66px;
      }
      @media only screen and (max-width: 425px) {
        width: 65px;
        height: 65px;
        left: 62px;
      }
      @media only screen and (max-width: 386px) {
        width: 65px;
        height: 65px;
      }
      @media only screen and (max-width: 376px) {
      }
    }
    :focus {
      border: none;
      outline: none;
    }
    @keyframes pulse-border {
      0% {
        transform: translateX(-100%) translateY(-1%) translateZ(0) scale(1);
        opacity: 1;
      }
      100% {
        transform: translateX(-100%) translateY(-1%) translateZ(0) scale(1.5);
        opacity: 0;
      }
    }
  }
`;
