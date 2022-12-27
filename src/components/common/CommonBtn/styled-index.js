import styled from "styled-components";

export const Button = styled.button`
  background: #ff800b;
  font-weight: 900;
  font-size: 12px;
  line-height: 26px;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: #ffffff;
  border: none;
  padding: 20px 40px;
  cursor: pointer;
  @media only screen and (max-width:510px) {
    width: 90% !important;
  }

  &:hover {
    background-color: #fa9b43;
  }
`;
