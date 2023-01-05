import React, { useEffect } from "react";
import { WrapperContainer } from "../../../style-App";
import { Section } from "./styled-index";
import { Row, Col } from "react-grid-system";
// import lastPrjct from "../../../assets/image/Home/lasts.png";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { GetProject } from "../../../redux/lastProjects";

// const arrMap = [1, 2, 3, 4, 5, 6];
const LastProject = () => {
  const { t, i18n } = useTranslation();
  const dipatch = useDispatch();
  const getProject = useSelector((state) => state.lastProject.getProject?.Data);
  // console.log(getProject);
  useEffect(() => {
    dipatch(GetProject());
  }, []);
  function GetValueLang(){
    return window.localStorage.getItem("i18nextLng")
  }
  return (
    <>
      <Section>
        <WrapperContainer>
          <h2>{t("LastProject.0")}</h2>
          <Row className="row">
            {getProject.map((elem, index) => (
              <Col className="col" lg={4} md={6} sx={12} sm={12} key={index}>
                <div className="col-content">
                  <div className="col-text">
                    
                    <h2>{GetValueLang() == "uz" ? elem.project_title_uz : GetValueLang() == "ru" ? elem.project_title_ru : GetValueLang() == "en" ? elem.project_title_en :null}</h2>
                    <p>{GetValueLang() == "uz" ? elem.project_description_uz : GetValueLang() == "en" ? elem.project_description_en :GetValueLang() == "ru" ? elem.project_description_ru : null}</p>
                  </div>
                  <img src={elem.project_img} alt="image" />
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
