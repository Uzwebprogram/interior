import styled from "styled-components";
import Background from "./../../assets/image/NotFound/Background.png"
export const Wrapper = styled.div`
text-align: center;
padding-bottom: 240px;
@media only screen and (max-width: 412px) {
    padding-bottom: 40px;
    }
 h1{
    font-style: normal;
    font-weight: 900;
    font-size: 100px;
    line-height: 150px;
    text-align: center;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: #FFFFFF;
    margin: 0;
    padding: 0;
    margin-top: 100px;
    @media only screen and (max-width: 502px) {
    margin-top: 0px;
    font-size: 50px;
    }
    @media only screen and (max-width: 345px) {
    margin-top: 0px;
    font-size: 40px;
    line-height: 50px;
    }
 }
 p{
    font-style: normal;
    font-weight: 900;
    font-size: 25px;
    line-height: 38px;
    text-align: center;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-bottom: 50px;
    @media only screen and (max-width: 412px) {
    margin-top: 0px;
    font-size: 20px;
    }
    @media only screen and (max-width: 345px) {
        margin-top: 0px;
    font-size: 15px;
    }
 }
 a{
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 22px;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #FFFFFF;
    background: #757575;
    padding: 20px 40px;
    text-decoration: none;
 }
`
export const Section = styled.div`
    background-image: url(${Background});
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 154px 0;
`