import styled from "styled-components";

export const Wrapper = styled.div`
 text-align: center;
 h2{
    font-style: normal;
    font-weight: 300;
    font-size: 40px;
    line-height: 60px;
    text-align: center;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: #FFFFFF;
    margin: 0;
    padding: 0;
    margin-top: 86px;
    margin-bottom: 86px;
    @media only screen and (max-width:510px) {
        margin-top: 56px;
    margin-bottom: 56px;
    font-size: 30px;
 }
}

`
export const Contact = styled.div`
 h3{
    font-style: normal;
    font-weight: 300;
    font-size: 40px;
    line-height: 60px;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: #FFFFFF;
    text-align: center;
    width: 99%;
    margin: 0;
    padding: 0;
    @media only screen and (max-width: 448px) {
    font-size: 30px;
    }
    
 }
 h4{
    font-family: 'Ruda';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 33px;
    text-transform: uppercase;
    color: #F3F3F3;
    text-align: center;
    width: 80%;
    margin: 0 auto;
    margin-top: 10px;
    @media only screen and (max-width: 448px) {
    font-size: 16px;
    }
 }
`