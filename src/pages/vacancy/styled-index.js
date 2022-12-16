import styled from "styled-components";


export const Wrapper = styled.div`
    padding-top: 62px;
    h2{
        font-style: normal;
        font-weight: 300;
        font-size: 45px;
        line-height: 64px;
        text-transform: uppercase;
        color: #FFFFFF;  
    }
    .Card{
        border: 5px solid #FFFFFF;
        border-radius: 3px;
        padding: 5px;

        .top{
            display: flex;
            justify-content: space-between;
            align-items: center;
            p{
            margin: 0;
            padding: 0;
            font-style: normal;
            font-weight: 300;
            font-size: 25px;
            line-height: 120%;
            letter-spacing: 0.01em;
            color: #FFFFFF;
        }
        span{
            font-family: 'Ruda';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 130%;
            letter-spacing: 0.01em;
            color: #AAAAAA;
        }
        }
        p{
            font-family: 'Ruda';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 120%;
            letter-spacing: 0.11em;
            color: #FFFFFF;
        }
    }
`