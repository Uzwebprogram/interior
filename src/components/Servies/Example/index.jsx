import React, { useEffect } from "react";
import { Col, Row } from "react-grid-system";
import { useTranslation } from "react-i18next";
import { WrapperContainer } from "../../../style-App";
import { Section } from "./styled-index";

import location from "../../../assets/image/servies/location.svg";
import square from "../../../assets/image/servies/24px.svg";
import calendar from "../../../assets/image/servies/calendar.png";
import light from "../../../assets/image/servies/light.png";
import user from "../../../assets/image/servies/user.png";
import { useDispatch, useSelector } from "react-redux";
import { GetproductsId } from "../../../redux/about";

const Example = () => {
  const [t, i18n] = useTranslation();
  const DataImg = useSelector((state) => state.categories.getproductsid?.Data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetproductsId(window.localStorage.getItem("MoreId")));
  }, []);
  const LangVal = () => {
    return window.localStorage.getItem("i18nextLng");
  };
  const DateFormat = (date) => {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year].join(".");
  };

  return (
    <>
      <Section>
        <WrapperContainer>
          {DataImg.map((elem, index) => (
            <Row key={index} className="row">
              <Col lg={7} md={12} sx={12} sm={12} className="col">
                {LangVal() == "ru" ? (
                  <h2>{elem.product_title_ru}</h2>
                ) : LangVal() == "uz" ? (
                  <h2>{elem.product_title_uz}</h2>
                ) : LangVal() == "en" ? (
                  <h2>{elem.product_title_en}</h2>
                ) : (
                  <h2>{elem.product_title_ru}</h2>
                )}

                {LangVal() == "ru" ? (
                  <p>{elem.product_description_ru}</p>
                ) : LangVal() == "uz" ? (
                    <p>{elem.product_description_uz}</p>
                ) : LangVal() == "en" ? (
                    <p>{elem.product_description_en}</p>
                ) : (
                  <p>{elem.product_description_ru}</p>
                )}
              
              </Col>
              <Col lg={5} md={12} sx={12} sm={12} className="col col-media">
                <div className="col-content-wrapper">
                  <img
                    width={62}
                    height={62}
                    style={{ marginLeft: "23px" }}
                    src={location}
                    alt=""
                  />
                  <div className="col-content">
                    <h4>{t("Example.8")}</h4>
                    <p>{elem.location}</p>
                  </div>
                </div>
                <div className="col-content-wrapper">
                  <img width={62} height={62} src={square} alt="" />
                  <div className="col-content">
                    <h4>{t("Example.10")}</h4>
                    <p>{elem.metr}</p>
                  </div>
                </div>
                <div className="col-content-wrapper">
                  <img
                    width={40}
                    height={39}
                    style={{ marginLeft: "35px" }}
                    src={calendar}
                    alt=""
                  />
                  <div className="col-content">
                    <h4>{t("Example.17")}:</h4>
                    <p>{DateFormat(elem.date)}</p>
                  </div>
                </div>
                <div className="col-content-wrapper">
                  <img
                    width={62}
                    height={62}
                    style={{ marginLeft: "25px" }}
                    src={light}
                    alt=""
                  />
                  <div className="col-content">
                    <h4>{t("Example.13")}</h4>
                    <p>{elem.still}</p>
                  </div>
                </div>
                <div className="col-content-wrapper">
                  <img
                    width={62}
                    height={62}
                    style={{ marginLeft: "27px" }}
                    src={user}
                    alt=""
                  />
                  <div className="col-content">
                    <h4>{t("Example.15")}</h4>
                    <p>{elem.design}</p>
                  </div>
                </div>
              </Col>
            </Row>
          ))}
        </WrapperContainer>
      </Section>
    </>
  );
};

export default Example;
