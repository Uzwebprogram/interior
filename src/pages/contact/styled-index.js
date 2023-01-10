import styled from "styled-components";

export const Wrapper = styled.div`
    padding-top: 62px;
    h2{
        font-style: normal;
        font-weight: 600;
        font-size: 30px;
        line-height: 64px;
        text-transform: uppercase;
        color: #FFFFFF;
    }
    p{
        font-family: 'Ruda';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 22px;
        color: #E5E5E5;
    }
    a{
        font-style: normal;
        font-weight: 600;
        font-size: 30px;
        line-height: 58px;
        text-transform: uppercase;
        color: #FFFFFF;
        text-decoration: none ;
        @media only screen and (max-width:420px) {
        font-size: 32px;
        }
    }
`