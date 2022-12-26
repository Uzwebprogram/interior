import React from "react";
import { Section, InterContainer } from "./styled-index";
import { Row, Col } from "react-grid-system";
import interierImg from "../../../assets/image/Home/threeimage.jpg";
import { useTranslation } from "react-i18next";

const Interier = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Section>
        <InterContainer>
          <Row className="row">
            <Col md={12} lg={12} className='col'>
              <div>
                <h2>{t("Interier.0")}</h2>
                <img src={interierImg} alt="image" />
              </div>
            </Col>
            <Col md={12} lg={12} className='col'>
              <div>
                <h2>{t("Interier.1")}</h2>
                <img src={interierImg} alt="image" />
              </div>
            </Col>
          </Row>
        </InterContainer>
      </Section>
    </>
  );
};

export default Interier;
