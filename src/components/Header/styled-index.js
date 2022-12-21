import styled from "styled-components";

export const Wrapper = styled.div `
    width: 100%;
    background-color: black;
    position: fixed;
    z-index: 10;
    .overlay{
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
    .Header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding:10px 0px;
        .logo-media{
            display: none;
        }

        ul{
        margin: 0;
        padding: 0;
        display: flex;
        width: 823px;
        justify-content: space-between;
        @media only screen and (max-width:872px) {
            display: none;
        }
        @media only screen and (max-width: 1024px) {
            width: 700px;
            padding: 0 10px;
        }
            li{
                list-style-type: none;
               a{
                font-style: normal;
                font-weight: 300;
                font-size: 15px;
                line-height: 22px;
                text-align: center;
                letter-spacing: 0.1em;
                text-transform: uppercase;
                color: #FFFFFF;
                 text-decoration: none;
          }
       }
     }
    }
`