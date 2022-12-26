import styled from "styled-components";

export const Section = styled.div`
    .Videos{
        width: 100%;
        height: 750px;
        @media only screen and (max-width:820px) {
            height: 400px;
            }
    }
    .video{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    @media only screen and (max-width:820px) {
        height: 65%;
            }
    z-index: -1;
    object-fit: cover;
    }
    .CardsContainer{
        /* margin-top: 40px; */
        margin: 40px -15px 0 0 !important;
    }
    .card{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 20px;
        h3{
            font-family: 'Ruda';
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 24px;
            text-align: center;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: #FFFFFF;
        }
    }
`