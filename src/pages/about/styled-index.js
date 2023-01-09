import styled from "styled-components";

export const Wrapper = styled.div`
h2{
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 60px;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: #FFFFFF;
}
.Card{
    padding: 10px;
    border: 2px solid #525252;
    img{
        width: 100%;
    }
    h4{
        margin: 0;
        padding: 0;
        font-family: 'Ruda';
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 120%;
        text-align: center;
        letter-spacing: 0.01em;
        color: white;
        margin-top: 15px;
        margin-bottom: 20px;
    }
    .about{
        display: flex;
        justify-content: center;
        margin-top: 10px;
        margin-bottom: 20px;
        p{
            margin: 0;
            padding: 0;
            margin-right: 10px;
            font-family: 'Ruda';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 120%;
            letter-spacing: 0.01em;
            color: #FFFFFF;
        }
        span{
            font-family: 'Ruda';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 120%;
            letter-spacing: 0.01em;
            color: rgba(255, 255, 255, 0.64);
        }
    }
}
`