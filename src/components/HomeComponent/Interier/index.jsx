import React from "react";
import { Section, InterContainer } from "./styled-index";
import { Row, Col } from "react-grid-system";
import komerchskiy from "../../../assets/image/Home/komerchskiy.png";
import jily from "../../../assets/image/Home/jily.png";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Getcategories } from "../../../redux/about";
import { useNavigate } from "react-router-dom";
const Interier = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const HandleClick = async (e) => {
    console.log(e.target.id);
      await window.localStorage.setItem("aboutId" , e.target.id)
      dispatch(Getcategories(window.localStorage.getItem("aboutId")))
      navigate("/aboutUs")
  }
  return (
    <>
      <Section>
        <InterContainer>
          <Row className="row">
            <Col id="1" onClick={HandleClick} md={12} lg={12} className='col'>
              <div id="1" onClick={HandleClick}>
                <h2 id="1" onClick={HandleClick}>{t("Interier.0")}</h2>
                <img  id="1" onClick={HandleClick} src={komerchskiy} alt="image" />
              </div>
            </Col>
            <Col id="2" onClick={HandleClick} md={12} lg={12} className='col'>
              <div id="2"onClick={HandleClick}  >
                <h2 id="2" onClick={HandleClick} >{t("Interier.1")}</h2>
                <img id="2" onClick={HandleClick}  src={jily} alt="image" />
              </div>
            </Col>
          </Row>
        </InterContainer>
      </Section>
    </>
  );
};

export default Interier;
