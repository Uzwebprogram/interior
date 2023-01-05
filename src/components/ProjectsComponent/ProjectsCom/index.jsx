import React, { useEffect } from "react";
import { Section, BeforeContainer } from "./styled-index";
import { Row, Col } from "react-grid-system";
import TwentyTwenty from "react-twentytwenty";
import { useDispatch, useSelector } from "react-redux";
import "./twentytwenty.css";
import Before_After_Icon from "./../../../assets/image/beforeVSafter/icon_before_black.svg"
import { GetSingle } from "../../../redux/before-after";

import After from "../../../assets/image/after.png";
import Before from "../../../assets/image/hero.png";
import icons1 from "../../../assets/image/beforeVSafter/icons1.png";
import { useTranslation } from "react-i18next";
const arr = [1, 2, 3, 4];
const ProjectsCom = () => {
  const getSingle = useSelector((state) => state.single.getSingle?.Data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetSingle());
  }, []);
  const LangVal = () => {
    return window.localStorage.getItem("i18nextLng");
  };
  const {t , i18n} = useTranslation();
  return (
    <>
      <Section>
        <BeforeContainer>
          <Row className="row">
            {getSingle.map((elem, index) => (
              <Col lg={12} md={12} sm={12} className="big-col">
                <Row className="small-row">
                  <Col className="col" lg={9} md={12} sm={12} sx={12}>
                    <TwentyTwenty
                      className="twenty"
                      left={
                        // eslint-disable-next-line jsx-a11y/alt-text
                        <img
                          className="twenty-img"
                          src={elem.single_img1}
                          width="100%"
                          height="557px"
                        />
                      }
                      right={
                        // eslint-disable-next-line jsx-a11y/alt-text
                        <img
                          src={elem.single_img2}
                          className="twenty-img"
                          width="100%"
                          height="557px"
                        />
                      }
                      slider={<div className="slider" />}
                      minDistanceToBeginInteraction={15}
                    />
                  </Col>
                  <Col className="white-col" lg={3} md={12} sm={12} sx={12}>
                    <div className="col-content">
                      <h3>
                        {LangVal() == "ru" ? (
                          <h3>{elem.single_title_ru}</h3>
                        ) : LangVal() == "uz" ? (
                          <h3>{elem.single_title_uz}</h3>
                        ) : LangVal() == "en" ? (
                          <h3>{elem.single_title_en}</h3>
                        ) : (
                          <h3>{elem.single_title_ru}</h3>
                        )}
                      </h3>
                      <p>
                        {LangVal() == "ru" ? (
                          <p>{elem.single_description_ru}</p>
                        ) : LangVal() == "uz" ? (
                          <p>{elem.single_description_uz}</p>
                        ) : LangVal() == "en" ? (
                          <p>{elem.single_description_en}</p>
                        ) : (
                          <p>{elem.single_description_uz}</p>
                        )}
                      </p>
                      <div className="Before_After_About">
                      <img src={Before_After_Icon} width={60} height={60} alt="" />
                      <p>{t("before_after.0")}</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            ))}
          </Row>
        </BeforeContainer>
      </Section>
    </>
  );
};

export default ProjectsCom;
