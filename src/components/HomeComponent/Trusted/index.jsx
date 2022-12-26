import React, { useEffect } from "react";
import { Section } from "./styled-index";
import { Row, Col } from "react-grid-system";
import { useTranslation } from "react-i18next";

import logoIcon1 from "../../../assets/image/Home/icon1.png";
import logoIcon2 from "../../../assets/image/Home/icon2.png";
import logoIcon3 from "../../../assets/image/Home/icon3.png";
import logoIcon4 from "../../../assets/image/Home/icon4.png";
import logoIcon5 from "../../../assets/image/Home/icon5.png";
import logoIcon6 from "../../../assets/image/Home/icon6.png";
import logoIcon7 from "../../../assets/image/Home/icon7.png";
import logoIcon8 from "../../../assets/image/Home/icon8.png";
import logoIcon9 from "../../../assets/image/Home/icon9.png";
import logoIcon10 from "../../../assets/image/Home/icon10.png";
import logoIcon11 from "../../../assets/image/Home/icon11.png";
import logoIcon12 from "../../../assets/image/Home/icon12.png";
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
              <Col key={index} className="col" lg={2} md={4} sm={12} sx={6}>
                <img width={207} height={170} src={elem.partners_img} alt="logo" />
              </Col>
            ))}
            {/* <Col className="col" lg={2} md={4} sm={12} sx={6}>
              <img src={logoIcon6} alt="logo" />
            </Col>
            <Col className="col" lg={2} md={4} sm={12} sx={6}>
              <img src={logoIcon11} alt="logo" />
            </Col>
            <Col className="col" lg={2} md={4} sm={12} sx={6}>
              <img src={logoIcon10} alt="logo" />
            </Col>
            <Col className="col" lg={2} md={4} sm={12} sx={6}>
              <img src={logoIcon2} alt="logo" />
            </Col>
            <Col className="col" lg={2} md={4} sm={12} sx={6}>
              <img src={logoIcon3} alt="logo" />
            </Col>
            <Col className="col" lg={2} md={4} sm={12} sx={6}>
              <img src={logoIcon12} alt="logo" />
            </Col>
            <Col className="col" lg={2} md={4} sm={12} sx={6}>
              <img src={logoIcon9} alt="logo" />
            </Col>
            <Col className="col" lg={2} md={4} sm={12} sx={6}>
              <img src={logoIcon9} alt="logo" />
            </Col>
            <Col className="col" lg={2} md={4} sm={12} sx={6}>
              <img src={logoIcon7} alt="logo" />
            </Col>
            <Col className="col" lg={2} md={4} sm={12} sx={6}>
              <img src={logoIcon4} alt="logo" />
            </Col>
            <Col className="col" lg={2} md={4} sm={12} sx={6}>
              <img src={logoIcon5} alt="logo" />
            </Col> */}
          </Row>
        </div>
      </Section>
    </>
  );
};

export default Trusted;
