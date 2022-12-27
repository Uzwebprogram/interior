import React, { useState, useEffect } from "react";
import { Col, Row } from "react-grid-system";
import { useTranslation } from "react-i18next";
import { Section } from "./styled-index";
import { WrapperContainer } from "../../../style-App";
import { useDispatch, useSelector } from "react-redux";
import "./styled.css";
import { GetYoutube } from "../../../redux/youtube/index";

// Mui tabs import
import { Tabs } from "antd";
// Mui tabs import end

const OurProject = () => {
  const [tabPosition, setTabPosition] = useState("right");
  const { t, i18n } = useTranslation();
  const getYoutube = useSelector((state) => state.youtube.getYoutube?.Data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetYoutube());
  }, []);
  const LangVal = () => {
    return window.localStorage.getItem("i18nextLng");
  };
  return (
    <>
      <Section>
        <WrapperContainer>
          <Row className="row">
            <Col lg={12} md={12} className="col">
              <h2>{t("OurProject.0")}</h2>
              <Tabs
                tabPosition={tabPosition}
                items={getYoutube.map((elem) => {
                  const id = String(elem.tube_id + 1);
                  return {
                    label: `${
                      LangVal() == "ru"
                        ? elem.tube_title_ru
                        : LangVal() == "uz"
                        ? elem.tube_title_uz
                        : LangVal() == "en"
                        ? elem.tube_title_en
                        : elem.tube_title_ru
                    }`,
                    key: id,
                    children: (
                      <>
                        <iframe
                          width="100%"
                          height="100%"
                          src={elem.tube_video}
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                      </>
                    ),
                  };
                })}
              />
            </Col>
          </Row>
        </WrapperContainer>
      </Section>
    </>
  );
};

export default OurProject;
