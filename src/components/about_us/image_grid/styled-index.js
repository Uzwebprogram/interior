import styled from "styled-components";

export const Section = styled.div`

`;

export const GridContainer = styled.div`
  max-width: 98%;
  width: 100%;
  margin: 0 auto;
  .css-1jyq6y5-MuiImageList-root{
    width: 100%;
  }
  h2 {
    font-weight: 600;
    font-size: 30px;
    line-height: 60px;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: #ffffff;
    border: 1px solid #000000;
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
  @media only screen and (max-width:900px) {
    display: none;
  }
`;
export const GridContainerMobile = styled.div`
  display: none;
  @media only screen and (max-width:900px) {
    display: block;
    max-width: 98%;
  width: 100%;
  margin: 0 auto;
  h2 {
    font-weight: 600;
    font-size: 22px;
    line-height: 60px;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: #ffffff;
    border: 1px solid #000000;

    @media only screen and (max-width: 425px) {
      font-size: 28px;
 
    }
    @media only screen and (max-width: 399px) {
      font-size: 26px;
    }
    @media only screen and (max-width: 320px) {
      font-size: 20px;
    }
  }
  }
  @media only screen and (max-width: 525px) {
      .grid-img{
        height: auto !important;
      }
      .css-l086p4-MuiImageListItem-root{
        height: auto !important;
      }
    }
`