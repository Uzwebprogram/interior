import React, { useState } from 'react'
import CommonHero from '../../components/common/CommonHero'
import {Wrapper} from "./styled-index"
import Background from "./../../assets/image/About/Background.png"
import { WrapperContainer } from '../../style-App';
import { useTranslation } from 'react-i18next';
import {Row , Col} from "react-grid-system"
function About() {
  const [bg , setBg] = useState(Background);
  const {t , i18n} = useTranslation();
  const data = [1 , 2 , 3 , 4  , 5 , 6]
  return (
    <>
      <CommonHero
      style={{padding : " 100px 0"}}
        bg={bg}
        isTitle={true}
        title2={t("About.1")}
        isButton={false}
        isIcon={false}
      />
      <WrapperContainer>
        <Wrapper>
        <h2>{t("About.0")}</h2>
        <Row>
          {data.map((elem , index) =>
              <Col lg={4} md={12} className="Card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjb-Jsep9tAcYMGcwnDZl9MuXwtJ87LMh-KkFZT04M9XQRs6I0mWi4GJcUD7bTPEOAXRU&usqp=CAU" alt="" />
                    <h4>Елойр</h4>
                    <div className="about">
                    <p>направление работы:</p>
                    <span>дизайнер</span>
                    </div>
              </Col>
          )}
        </Row>
        </Wrapper>
      </WrapperContainer>
    </>
  )
}
export default About