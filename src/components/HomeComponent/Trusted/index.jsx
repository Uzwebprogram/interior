import React, { useEffect } from "react";
import { Section } from "./styled-index";
import { Row, Col } from "react-grid-system";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Gettrusted } from "../../../redux/trusted";

const Trusted = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const getTrusted = useSelector((state) => state.trusted.gettrusted?.Data);
  console.log(getTrusted);
  useEffect(() => {
    dispatch(Gettrusted());
  }, []);
  return (
    <>
      <Section>
        <div className="trustContainer">
          <h2>{t("Trusted.0")}</h2>
          <Row className="row">
            {getTrusted.map((elem, index) => (
              <Col key={index} className="col" lg={3} md={4} sm={12} sx={6}>
                <img width={300} height={300} src={elem.partners_img} alt="logo" />
              </Col>
            ))}
          </Row>
        </div>
      </Section>
    </>
  );
};

export default Trusted;
