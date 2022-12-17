import React, {useState} from "react";
import { WrapperContainer } from "../../../style-App";
import {
  Section,
  ColItem,
  RowWrap
} from "./styled-index";
import { Col, Row } from "react-grid-system";
import CommonBtn from "../../common/CommonBtn";


const CommonHero = ({title1, title2, text, setOpen, btnText, isTitle, bg}) => {

  return (
    <>
      <Section bg={bg}>
        <WrapperContainer>
          <Row component={RowWrap}>
            <Col component={ColItem} lg={8} md={12} sm={12}>
              {isTitle ? <h1>{title1}</h1> : null}
              {isTitle ? <h2>{title2}</h2> : null}
              {isTitle ? <p>{text}</p> : null}
              <CommonBtn onClick={() => setOpen(true)}>{btnText}</CommonBtn>
            </Col>
            {/* <i class="bx bx-chevron-down"></i> */}
            <i class='bx bx-chevron-down bx-fade-up' ></i>
          </Row>
        </WrapperContainer>
      </Section>
    </>
  );
};

export default CommonHero;
