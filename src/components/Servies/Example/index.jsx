import React from 'react'
import { Col, Row } from 'react-grid-system'
import { useTranslation } from 'react-i18next'
import { WrapperContainer } from '../../../style-App'
import {Section} from './styled-index'

import location from '../../../assets/image/servies/location.svg'
import square from '../../../assets/image/servies/24px.svg'
import calendar from '../../../assets/image/servies/calendar.png'
import light from '../../../assets/image/servies/light.png'
import user from '../../../assets/image/servies/user.png'

const Example = () => {
    const [t,i18n] = useTranslation()
  return (
    <>
      <Section>
        <WrapperContainer>
            <Row className='row'>
                <Col lg={7} md={12} sx={12} sm={12} className='col'>
                    <h2>{t("Example.0")}</h2>
                    <p>{t("Example.1")}</p>
                    <p>{t("Example.2")}</p>
                    <p>{t("Example.3")}</p>
                    <p>{t("Example.4")}</p>
                    <p>{t("Example.5")}</p>
                    <p>{t("Example.6")}</p>
                    <p>{t("Example.7")}</p>
                </Col>
                <Col lg={5} md={12} sx={12} sm={12} className='col col-media'>
                    <div className='col-content-wrapper'>
                        <img width={62} height={62} style={{marginLeft: '23px'}} src={location} alt="" />
                        <div className='col-content'>
                            <h4>{t("Example.8")}</h4>
                            <p>{t("Example.9")}</p>
                        </div>
                    </div>
                    <div className='col-content-wrapper'>
                        <img width={62} height={62} src={square} alt="" />
                        <div className='col-content'>
                            <h4>{t("Example.10")}</h4>
                            <p>{t("Example.11")}</p>
                        </div>
                    </div>
                    <div className='col-content-wrapper'>
                        <img width={40} height={39} style={{marginLeft: '35px'}} src={calendar} alt="" />
                        <div className='col-content'>
                            <p>{t("Example.12")}</p>
                        </div>
                    </div>
                    <div className='col-content-wrapper'>
                        <img width={62} height={62} style={{marginLeft: '25px'}} src={light} alt="" />
                        <div className='col-content'>
                            <h4>{t("Example.13")}</h4>
                            <p>{t("Example.14")}</p>
                        </div>
                    </div>
                    <div className='col-content-wrapper'>
                        <img width={62} height={62} style={{marginLeft: '27px'}} src={user} alt="" />
                        <div className='col-content'>
                            <h4>{t("Example.15")}</h4>
                            <p>{t("Example.16")}</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </WrapperContainer>
      </Section>
    </>
  )
}

export default Example