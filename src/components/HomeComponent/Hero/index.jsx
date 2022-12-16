import React from "react";
import { WrapperContainer } from "../../../style-App";
import { Section, ColItem, RowWrap, ModalHeader, ModalBody, Form, InputControls } from "./styled-index";
import { Col, Row } from "react-grid-system";
import { useTranslation } from "react-i18next";
import ModalCommon from "../../common/Modal/Modal";
import CommonBtn from "../../common/CommonBtn";
import CommonInput from "../../common/CommonInput";

const Hero = () => {
  const { t, i18n } = useTranslation();
  const handleOpen = () => setOpen(true);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Section>
        <ModalCommon width={550} handleClose={handleClose} open={open}>
          <ModalHeader>
            <h2>{t("HeroModal.0")}</h2>
            <p>{t("HeroModal.1")}</p>
          </ModalHeader>
          <ModalBody>
            <Form>
              <CommonInput title={t("HeroModal.2")} placeholder={t("HeroModal.3")} type={"text"}/>
            </Form>
          </ModalBody>
        </ModalCommon>
        <WrapperContainer>
          <Row component={RowWrap}>
            <Col component={ColItem} lg={8} md={12} sm={12}>
              <h1>{t("Hero.0")}</h1>
              <h2>{t("Hero.1")}</h2>
              <p>{t("Hero.2")}</p>
              <CommonBtn onClick={handleOpen}>{t("Hero.3")}</CommonBtn>
            </Col>
            <i class="bx bx-chevron-down"></i>
          </Row>
        </WrapperContainer>
      </Section>
    </>
  );
};

export default Hero;
