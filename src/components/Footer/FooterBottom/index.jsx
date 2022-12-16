import React from 'react'
import { Wrapper } from './styled-index'
import {Col , Row} from "react-grid-system"
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
function FooterBottom() {
    const data = [
        {
            id : 1, 
            title : "Header.0",
            link : "/services",

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
          link : "/reviews",
      }, 
    ]
    const {t , i18n} = useTranslation();
  return (
    <Wrapper>
        <Row  style={{margin:"0px"}} >
            <Col md={12} lg={6}>
                <p>Мы предоставляем полный спектр услуг по дизайну интерьера</p>
            </Col>
            <Col md={12} lg={3}>
            <h2>Навигация</h2>
            {data.map(elem =>(
                        <>
                <li key={elem.id}>
                    <NavLink  to={elem.link}>{t(elem.title)}</NavLink>
                </li> 
                    <hr />
                    </>
                    ))}
            </Col>
            <Col md={12} lg={3}>
                <h2>Свяжитесь с нами</h2>
            </Col>
        </Row>
    </Wrapper>
  )
}

export default FooterBottom