import React, { useState } from "react";
import { Wrapper } from "./styled-index";
import { WrapperContainer } from "../../style-App";
import Logo from "./../../assets/image/Header/Logo.svg";
import LogoMedia from "./../../assets/image/Header/LogoMedia.svg";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageHeader from "./header-language";
import HamburgerMenu from "./hamburger-menu";
import { useDispatch } from "react-redux";
import { Getcategories } from "../../redux/about";
import { useNavigate } from "react-router-dom";
function Header() {
  const { t, i18n } = useTranslation();
  const [HamburgerClick, setHamburgerClick] = useState(false);
  const navigate = useNavigate();
  const HandleClick = () => {
    setHamburgerClick(true);
  };
  const HandleClickClose = () => {
    setHamburgerClick(false);
  };
  const dispatch = useDispatch();
  const HandleClickAbout = async (e) =>{
    await window.localStorage.setItem("aboutId" , e.target.value)
    dispatch(Getcategories(window.localStorage.getItem("aboutId")))
    navigate("/aboutUs")
  }
  return (
    <>
      <Wrapper>
        <WrapperContainer>
          <div className="Header">
            <NavLink to={"/"}>
              <img className="logo" src={Logo} width={152} height={38} alt="" />
            </NavLink>

            <ul>
              <li>
                <NavLink className='links' to={"/"}>
                  <p>{t("Header.0")}</p>
                </NavLink>
              </li>
              <li>
       
                <button className='links'  value="1" onClick={HandleClickAbout}>
                  {t("Header.1")}
                </button>
              </li>
              <li>
                <button className='links' value="2" onClick={HandleClickAbout}>
                  {t("Header.2")}
                </button>
              </li>
              <li>
              <NavLink className='links' to={"/projects"}>
                  <p>{t("Header.3")}</p>
                </NavLink>
              </li>
              <li>
                <NavLink className='links' to={"/portfolio"}>
                  <p>{t("Header.4")}</p>
                </NavLink>
              </li>
              <li>
                <NavLink className='links' to={"/addinterior"}>
                  <p>{t("Header.5")}</p>
                </NavLink>
              </li>
              <li>
                <div class="dropdown">
                  <button class="dropbtn">{t("Header.6")}</button>
                  <div class="dropdown-content">
                    <NavLink className='link' to={"/about"}>
                      <p>{t("Header.7")}</p>
                    </NavLink>
                    <NavLink className='link' to={"/vacancy"}>
                      <p>{t("Header.8")}</p>
                    </NavLink>
                    <NavLink className='link' to={"/contact"}>
                      <p>{t("Header.6")}</p>
                    </NavLink>
                  </div>
                </div>
              </li>
            </ul>
            <LanguageHeader HandleClick={HandleClick} />
          </div>
        </WrapperContainer>
        {HamburgerClick === false ? (
          <div className="overlay"></div>
        ) : HamburgerClick === true ? (
          <div
            className="overlay"
            style={{ display: "block" }}
            onClick={HandleClickClose}
          ></div>
        ) : null}
      </Wrapper>
      <HamburgerMenu
        HamburgerClick={HamburgerClick}
        HandleClickClose={HandleClickClose}
      />
    </>
  );
}

export default Header;
