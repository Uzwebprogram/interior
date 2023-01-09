import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background-color: black;
  position: fixed;
  z-index: 10;
  .overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0e0d0d;
    opacity: 0.7;
    z-index: 1;
    cursor: pointer;
  }
  .Header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0px;
    .logo-media {
      display: none;
    }
    ul {
      margin: 0;
      padding: 0;
      display: flex;
      width: 823px;
      justify-content: space-between;
      @media only screen and (max-width: 872px) {
        display: none;
      }
      @media only screen and (max-width: 1024px) {
        width: 700px;
        padding: 0 10px;
      }
      p{
        font-style: normal;
          font-weight: 300;
          font-size: 15px;
          line-height: 22px;
          text-align: center;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #ffffff;
          text-decoration: none;
          margin: 0 ;
          padding: 0;
          cursor: pointer;
      }
      li {
        list-style-type: none;
        .links{
            p{
                margin: 0;
            }
        }

        .active{
          p{
                margin: 0;
                border-bottom: 2px solid #ff800b;
            }
        }
        a {
          font-style: normal;
          font-weight: 300;
          font-size: 15px;
          line-height: 22px;
          text-align: center;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #ffffff;
          text-decoration: none;
        }

        .dropdown {
          position: relative;
          display: inline-block;
        }

        .dropdown-content {
          display: none;
          position: absolute;
          background-color: #000;
          min-width: 160px;
          z-index: 1;
          /* padding-top: 15px; */
          padding: 15px 15px 0 15px;

          .link{
            margin: 5px 0;
            p{
                margin: 0;
            }
          }
        }

        .dropbtn {
          font-style: normal;
          font-size: 15px;
          line-height: 22px;
          text-align: center;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #ffffff;
          text-decoration: none;
          background: none;
          border: none;
          outline: none;
        }

        /* .dropdown-content a:hover {
          background-color: white;
        } */

        .dropdown:hover .dropdown-content {
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          flex-direction: column;
        }
      }
    }
  }
  .active-padding{
          margin: 0;
                border-bottom: 2px solid #ff800b;
        }
        .links-padding{
          margin: 0;
          color: red;
        }
`;
