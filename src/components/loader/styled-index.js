import styled from "styled-components";

export const Wrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: #111111;
    top: 0;
    z-index: 999;
    color: white;
    text-align: center;
    padding-top: 150px;
    @media only screen and (max-width : 560px) {
            padding-top: 75px;
    }
`