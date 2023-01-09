import styled from "styled-components";

export const Section = styled.div`
  padding: 20px 0;
  height: 100vh;
  display: flex;
  align-items: center;
  h2 {
    font-weight: 600;
    font-size: 30px;
    line-height: 20px;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    text-align: center;
    color: #ffffff;
    margin: 0;
    margin-bottom: 27px;
    @media only screen and (max-width: 425px) {
      font-size: 28px;
    }
    @media only screen and (max-width: 375px) {
      font-size: 26px;
    }
    @media only screen and (max-width: 320px) {
      font-size: 20px;
    }
  }
  .slider-wrapper {
    width: 100% !important;
    margin: 0 auto !important;
  }
  .slider-item {
    width: 100% !important;
    height: 100% !important;
  }

  .slick-slide {
    height: 420px !important;

    div {
      height: 100% !important;
    }
  }
  .slider-content {
    width: 85% !important;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid #fff;
    padding: 0 20px 0 20px;

    h3 {
      font-family: "Ruda";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      text-transform: uppercase;
      color: #f3f3f3;
    }
  }
  .slick-slider {
    height: 450px !important;
  }

  .slick-track {
    height: 100% !important;
  }

  .slick-list {
    height: 100% !important;
    padding: 2px 0 !important;
  }

  .iframe {
    width: 100%;
    iframe {
      width: 100% !important;
      height: 100% !important;
      @media only screen and (max-width: 768px) {
        height: 93% !important;
      }
    }
  }

  .slick-prev,
  .slick-next {
    width: 40px !important;
    height: 40px !important;
  }

  .slick-prev {
    left: -40px !important;
    @media only screen and (max-width: 1024px) {
      left: 45% !important;
      top: 105% !important;
    }
    @media only screen and (max-width: 768px) {
      left: 38% !important;
      top: 105% !important;
    }
    @media only screen and (max-width: 375px) {
      left: 33% !important;
      top: 105% !important;
    }
  }

  .slick-next {
    right: -40px !important;
    @media only screen and (max-width: 1024px) {
      right: 45% !important;
      top: 105% !important;
    }
    @media only screen and (max-width: 768px) {
      right: 40% !important;
      top: 105% !important;
    }
    @media only screen and (max-width: 375px) {
      right: 37% !important;
      top: 105% !important;
    }
  }

  .slick-prev::before {
    font-size: 40px !important;
    @media only screen and (max-width: 1024px) {
      font-size: 50px !important;
    }
  }
  .slick-next::before {
    font-size: 40px !important;
    @media only screen and (max-width: 1024px) {
      font-size: 50px !important;
    }
  }
  .slick-dots {
    display: none !important;
  }
`;
