import styled from "styled-components";

export const Section = styled.div`
  .row {
    margin: 0 !important;
  }
  .col {
    padding: 0 !important;
    margin: 6px 0 !important;
    @media only screen and (max-width: 425px) {
        margin: 0 !important;
    }
  }
  .col-img {
    width: 100%;
    height: 500px;

    @media only screen and (max-width: 425px) {
      width: 100%;
      height: 350px;
    }
    @media only screen and (max-width: 375px) {
      width: 100%;
      height: 300px;
    }
    @media only screen and (max-width: 320px) {
      width: 100%;
      height: 250px;
    }
  }
`;
export const ServiesImgContainer = styled.div`
  max-width: 98%;
  width: 100%;
  margin: 0 auto;
`;
