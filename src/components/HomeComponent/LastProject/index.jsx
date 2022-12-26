import React from "react";
import { WrapperContainer } from "../../../style-App";
import { Section } from "./styled-index";
import { Row, Col } from "react-grid-system";
import lastPrjct from "../../../assets/image/Home/lasts.png";
import { useTranslation } from "react-i18next";

const arrMap = [1, 2, 3, 4, 5, 6];
const LastProject = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Section>
        <WrapperContainer>
          <h2>{t("LastProject.0")}</h2>
          <Row className="row">
            {arrMap.map(() => (
              <Col className="col" lg={4} md={6} sx={12} sm={12}>
                <div className="col-content">
                  <div className="col-text">
                    <h2>{t("LastProject.1")}</h2>
                    <p>{t("LastProject.2")}</p>
                  </div>
                  <img src={lastPrjct} alt="image" />
                </div>
              </Col>
            ))}
          </Row>
        </WrapperContainer>
      </Section>
    </>
  );
};

export default LastProject;
