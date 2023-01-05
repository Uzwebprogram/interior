import React from "react";
import { Wrapper } from "./styled-index";
import { Col, Row } from "react-grid-system";
import { NavLink, useNavigate } from "react-router-dom";
import Arrow from "./../../../assets/image/Footer/arrow.png";
import Location from "./../../../assets/image/Footer/location.svg";
import Mail from "./../../../assets/image/Footer/mail.svg";
import Instagram from "./../../../assets/image/Footer/instagram.png";
import Telegram from "./../../../assets/image/Footer/telegram.png";
import Youtube from "./../../../assets/image/Footer/youtube.png";
import { Getcategories } from "./../../../redux/about/index.js";
import { WrapperContainer } from "../../../style-App";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
function FooterBottom() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const HandleClickAbout = async (e) => {
    await window.localStorage.setItem("aboutId", e.target.value);
    dispatch(Getcategories(window.localStorage.getItem("aboutId")));
    navigate("/aboutUs");
  };
  const data = [
    {
      id: 1,
      title: "Header.0",
      link: "/",
    },
    {
      id: 4,
      title: "Header.3",
      link: "/projects",
    },
    {
      id: 5,
      title: "Header.4",
      link: "/portfolio",
    },
    {
      id: 5,
      title: "Header.5",
      link: "/addinterior",
    },
    {
      id: 6,
      title: "Header.6",
      link: "/contact",
    },
  ];
  const { t, i18n } = useTranslation();
  return (
    <Wrapper>
      <WrapperContainer>
        <Row style={{ margin: "0px" }}>
          <Col md={12} lg={5} className="Col-Right">
            <p>{t("Footer.2")}</p>
            <div className="Networks">
              <a
                href="https://www.instagram.com/luxhouse_studio/"
                target="_blank"
              >
                <img src={Instagram} width={30} height={30} alt="" />
              </a>
              <a href="https://youtu.be/hePn0bolmVU" target="_blank">
                <img src={Youtube} width={30} height={30} alt="" />
              </a>
              <a href="https://t.me/L_H_STUDIO" target="_blank">
                <img src={Telegram} width={30} height={30} alt="" />
              </a>
            </div>
            <h4>{t("Footer.8")}</h4>
            <a href="https://www.instagram.com/luxhouse_studio/" target="_blank" className="buttonSub">{t("Footer.7")}</a>
          </Col>
          <Col className="Col" md={12} lg={3}>
            <h2>{t("Footer.3")}</h2>
            <ul>
              {data.slice(0, 1).map((elem) => (
                <>
                  <li key={elem.id}>
                    <img
                      style={{ marginRight: "8px" }}
                      src={Arrow}
                      width={20}
                      height={20}
                      alt=""
                    />
                    <button>
                      <NavLink to={elem.link}>{t(elem.title)}</NavLink>
                    </button>
                  </li>
                </>
              ))}
              <li>
                <img
                  style={{ marginRight: "8px" }}
                  src={Arrow}
                  width={20}
                  height={20}
                  alt=""
                />

                <button className="links" value="1" onClick={HandleClickAbout}>
                  {t("Header.1")}
                </button>
              </li>
              <li>
                <img
                  style={{ marginRight: "8px" }}
                  src={Arrow}
                  width={20}
                  height={20}
                  alt=""
                />

                <button className="links" value="2" onClick={HandleClickAbout}>
                  {t("Header.2")}
                </button>
              </li>
              {data.slice(2).map((elem) => (
                <>
                  <li key={elem.id}>
                    <img
                      style={{ marginRight: "8px" }}
                      src={Arrow}
                      width={20}
                      height={20}
                      alt=""
                    />
                    <button>
                      <NavLink to={elem.link}>{t(elem.title)}</NavLink>
                    </button>
                  </li>
                </>
              ))}
            </ul>
          </Col>
          <Col className="Col" md={12} lg={4}>
            <h2>{t("Footer.4")}</h2>
            <div className="Footer-Address">
              <img
                style={{ marginRight: "5px" }}
                src={Location}
                width={20}
                height={20}
                alt=""
              />
              <span>{t("Footer.5")}</span>
            </div>
            <div className="Footer-Address">
              <img
                style={{ marginRight: "8px" }}
                src={Mail}
                width={20}
                height={20}
                alt=""
              />
              <a href="mailto:luxhouse@gmail.com" >luxhouse@gmail.com</a>
            </div>
            <div className="Footer-Address-Button">
              <p>{t("Footer.6")}</p>
            </div>
          </Col>
        </Row>
      </WrapperContainer>
    </Wrapper>
  );
}

export default FooterBottom;
