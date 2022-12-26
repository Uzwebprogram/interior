import React, { useState, useEffect } from "react";
import CommonHero from "../../components/common/CommonHero";
import { Wrapper } from "./styled-index";
import Background from "./../../assets/image/About/Background.png";
import { WrapperContainer } from "../../style-App";
import { useTranslation } from "react-i18next";
import { Row, Col } from "react-grid-system";
import { useDispatch, useSelector } from "react-redux";
import { GetTeam } from "../../redux/team/index";
function About() {
  const [bg, setBg] = useState(Background);
  const { t, i18n } = useTranslation();
 const getTeam = useSelector((state) => state.team.getTeam?.Data);
 const dispatch = useDispatch();
 useEffect(() => {
   dispatch(GetTeam());
 }, []);
 const LangVal = () => {
  return window.localStorage.getItem("i18nextLng");
};
  return (
    <>
      <CommonHero
        style={{ padding: " 100px 0" }}
        bg={bg}
        isTitle={true}
        title2={t("About.1")}
        isButton={false}
        isIcon={true}
      />
      <WrapperContainer>
        <Wrapper>
          <h2>{t("About.0")}</h2>
          <Row>
            {getTeam.map((elem) => (
              <Col lg={4} md={12} className="Card">
                <img
                  src={elem.team_img}
                  alt=""
                />
                <h4>{elem.team_name}</h4>
                <div className="about">
                  <p>направление работы:</p>
                  <span>{elem.team_position}</span>
                </div>
              </Col>
            ))}
          </Row>
        </Wrapper>
      </WrapperContainer>
    </>
  );
}
export default About;
