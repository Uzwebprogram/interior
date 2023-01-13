import styled from "styled-components";

export const Section = styled.div``;

export const InterContainer = styled.div`
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  .row {
    margin: 0 !important;
  }

  .col {
    margin: 5px 0 0 0;
    height: 45.5vh;
    cursor: pointer;
    @media only screen and (max-width:920px) {
          height: auto;
      }
    div {
      width: 100%;
      height: 100%;
      position: relative;
    cursor: pointer;
      @media only screen and (max-width:920px) {
          height: auto;
      }
      h2 {
        font-style: normal;
        font-weight: 600;
        font-size: 30px;
        line-height: 60px;
        letter-spacing: 0.07em;
        text-transform: uppercase;
        color: #ffffff;
        position: absolute;
        top:50%;
        transform: translateY(-116%);
        left: 11%;
    cursor: pointer;

        @media only screen and (max-width: 768px) {
            font-size: 32px;
        }
        @media only screen and (max-width: 582px) {
            font-size: 28px;
            left: 30px;
        }
        @media only screen and (max-width: 502px) {
            font-size: 26px;
            left: 20px;
        }
        @media only screen and (max-width: 425px) {
            font-size: 24px;
            left: 10px;
        }
        @media only screen and (max-width: 413px) {
            font-size: 22px;
            left: 5px;
        }
        @media only screen and (max-width: 375px) {
            font-size: 18px;
            left: 5px;
        }
        
      }
      img {
        width: 100%;
      height: 100%;
        mix-blend-mode: lighten;
        opacity: 0.53;
    cursor: pointer;
      }
    }
  }

  .col:nth-child(1){
    margin-top: 10px;
    cursor: pointer;
  }
`;
