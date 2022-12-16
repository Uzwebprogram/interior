import React from 'react'
import { Wrapper } from './styled-index'
import {Col , Row} from "react-grid-system"
import { NavLink } from 'react-router-dom'
import Arrow from "./../../../assets/image/Footer/arrow.png"
import Location from "./../../../assets/image/Footer/location.svg"
import Mail from "./../../../assets/image/Footer/mail.svg"
import Instagram from "./../../../assets/image/Footer/instagram.png"
import Telegram from "./../../../assets/image/Footer/telegram.png"
import Youtube from "./../../../assets/image/Footer/youtube.png"

import { WrapperContainer } from '../../../style-App'
import { useTranslation } from 'react-i18next'
function FooterBottom() {
    const data = [
        {
            id : 1, 
            title : "Header.0",
            link : "/",

        },
        {
            id : 2, 
            title : "Header.1",
            link : "/projects",

        },
        {
            id : 3, 
            title : "Header.2",
            link : "/about",

        },
        {
            id : 4, 
            title : "Header.3",
            link : "/team",

        },
        {
            id : 5, 
            title : "Header.4",
            link : "/Blog",

        },
          {
            id : 5, 
            title : "Header.5",
            link : "/reviews",
        }, 
        {
          id : 6, 
          title : "Header.6",
          link : "/contact",
      }, 
    ]
    const {t , i18n} = useTranslation();
  return (
    <Wrapper>
        <WrapperContainer>
        <Row  style={{margin:"0px"}} >
            <Col md={12} lg={5} className="Col-Right">
                <p>{t("Footer.2")}</p>
                <div className='Networks'>
                <a href="https://www.instagram.com/luxhouse_studio/" target="_blank"><img src={Instagram} width={30} height={30} alt="" /></a>
                <a href="https://youtu.be/hePn0bolmVU" target="_blank"><img src={Youtube} width={30} height={30} alt="" /></a>
                <a href="https://t.me/L_H_STUDIO" target="_blank"><img src={Telegram} width={30} height={30} alt="" /></a>
                </div>
            </Col>
            <Col className='Col' md={12} lg={3}>
            <h2>{t("Footer.3")}</h2>
            <ul>
            {data.map(elem =>(
                        <>
                <li key={elem.id}>
                    <img style={{marginRight:"8px"}} src={Arrow} width={20} height={20} alt="" />
                    <NavLink  to={elem.link}>{t(elem.title)}</NavLink>
                </li> 
                    </>
                    ))}
            </ul>

            </Col>
            <Col className='Col' md={12} lg={4}>
                <h2>{t("Footer.4")}</h2>
                <div className='Footer-Address'>
                <img style={{marginRight:"5px"}} src={Location} width={20} height={20} alt="" />
                <span>{t("Footer.5")}</span>
                </div>
                <div className='Footer-Address'>
                <img style={{marginRight:"8px"}} src={Mail} width={20} height={20} alt="" />
                <a href="mailto:luxhouse@gmail.com">luxhouse@gmail.com</a>
                </div>
                <div className='Footer-Address-Button'>
                <p>{t("Footer.6")}</p>
                <button>{t("Footer.7")}</button>
                </div>
            </Col>
        </Row>
        </WrapperContainer>
    </Wrapper>
  )
}

export default FooterBottom