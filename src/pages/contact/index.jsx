import React from 'react'
import { useTranslation } from 'react-i18next'
import { WrapperContainer } from '../../style-App'
import { Wrapper } from './styled-index'
function Contact() {
  const {t , i18n} = useTranslation();
  return (
        <WrapperContainer>
    <Wrapper>
      <h2>{t("Contact.0")}</h2>
      <p>{t("Footer.5")}</p>
      <a href="tel:+998903481047">+998 88-(111)-90-90</a>
      <iframe style={{marginTop : "40px"}} width="100%" height="569" id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2996.5214925859855!2d69.2630588!3d41.3192722!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x48a714abe43eb81d!2zTFVYSE9VU0UgLSDRgdGC0YPQtNC40Y8g0LTQuNC30LDQudC90LAg0Lgg0LDRgNGF0LjRgtC10LrRgtGD0YDQvdC-0LPQviDQv9GA0L7QtdC60YLQuNGA0L7QstCw0L3QuNGP!5e0!3m2!1sru!2s!4v1671194816522!5m2!1sru!2s" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
    </Wrapper>
        </WrapperContainer>
  )
}

export default Contact