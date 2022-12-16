import React, { useState } from 'react'
import { Wrapper } from './styled-index'
import { WrapperContainer } from '../../style-App'
import Logo from "./../../assets/image/Header/Logo.svg"
import LogoMedia from "./../../assets/image/Header/LogoMedia.svg"
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageHeader from './header-language'
import HamburgerMenu from './hamburger-menu'
function Header() {
  const {t , i18n} = useTranslation();
  const [HamburgerClick , setHamburgerClick] = useState(false)
  const HandleClick = () =>{
      setHamburgerClick(true)
    }
    const HandleClickClose = () =>{
      setHamburgerClick(false)
    }
  return (
    <>
      <Wrapper>
        <WrapperContainer>
          <div className='Header'>
          <NavLink to={"/"}><img className='logo' src={Logo} width={152} height={38} alt="" /></NavLink>

          <ul>
            <li>
              <NavLink to={"/"}><a href=' '>{t("Header.0")}</a></NavLink>
            </li>
            <li>
              <NavLink to={"/"}><a href=' '>{t("Header.1")}</a></NavLink>
            </li>
            <li>
              <NavLink to={"/"}><a href=' '>{t("Header.2")}</a></NavLink>
            </li>
            <li>
              <NavLink to={"/"}><a href=' '>{t("Header.3")}</a></NavLink>
            </li>
            <li>
              <NavLink to={"/"}><a href=' '>{t("Header.4")}</a></NavLink>
            </li>
            <li>
              <NavLink to={"/"}><a href=' '>{t("Header.5")}</a></NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}><a href=' '>{t("Header.6")}</a></NavLink>
            </li>
          </ul>
              <LanguageHeader HandleClick={HandleClick}/>
          </div>
        </WrapperContainer>
        {HamburgerClick === false ? (
                                    <div className="overlay" ></div>
                        ) : HamburgerClick === true ? (
                            <div className="overlay" style={{display : "block"}} onClick={HandleClickClose}></div>

                        ):null}
    </Wrapper>
    <HamburgerMenu HamburgerClick={HamburgerClick} HandleClickClose={HandleClickClose}/>
    </>
  )
}

export default Header