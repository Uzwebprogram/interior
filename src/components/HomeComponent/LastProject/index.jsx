import React, { useEffect } from "react";
import { WrapperContainer } from "../../../style-App";
import { Section } from "./styled-index";
import { Row, Col } from "react-grid-system";
// import lastPrjct from "../../../assets/image/Home/lasts.png";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { GetProject } from "../../../redux/lastProjects";
import { useNavigate } from "react-router-dom";

// const arrMap = [1, 2, 3, 4, 5, 6];
const LastProject = () => {
  const { t, i18n } = useTranslation();
  const dipatch = useDispatch();
  const navigate = useNavigate();
  const getProject = useSelector((state) => state.lastProject.getProject?.Data);
  useEffect(() => {
    dipatch(GetProject());
  }, []);
  function GetValueLang(){
    return window.localStorage.getItem("i18nextLng")
  }
  const HandleClick = (e) =>{
      if (e.target.id == 1) {
        navigate("/komerchskiy")
      }else if ( e.target.id == 2) {
        navigate("/jily")
      }
  }
  return (
    <>
      <Section>
          <h2>{t("LastProject.0")}</h2>
          <Row className="row">
            {getProject.map((elem, index) => (
              <Col onClick={HandleClick} id={elem.category_id} className="col" lg={4} md={6} sx={12} sm={12} key={index}>
                <div className="col-content" id={elem.category_id} >
                  <div className="blur-box" id={elem.category_id} ></div>
                  <div className="col-text" id={elem.category_id} >
                    <h3 id={elem.category_id} >{GetValueLang() == "uz" ? elem.project_title_uz : GetValueLang() == "ru" ? elem.project_title_ru : GetValueLang() == "en" ? elem.project_title_en :null}</h3>
                    <p id={elem.category_id} >{GetValueLang() == "uz" ? elem.project_description_uz : GetValueLang() == "en" ? elem.project_description_en :GetValueLang() == "ru" ? elem.project_description_ru : null}</p>
                  </div>
                  <img id={elem.category_id}  src={elem.project_img} alt="image" />
                </div>
              </Col>
            ))}
          </Row>
        </Section>
    </>
  );
};

export default LastProject;
