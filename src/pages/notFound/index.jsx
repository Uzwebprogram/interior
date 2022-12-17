import React from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom';
import { WrapperContainer } from '../../style-App'
import { Section, Wrapper } from './styled-index'

function NotFound() {
    const {t , i18n} = useTranslation();
  return (
    <Section>
        <WrapperContainer>
            <Wrapper>
                <h1>ERROR 404</h1>
                <p>{t("notFound.0")}</p>
                <NavLink to={"/"}><a>{t("notFound.1")}</a></NavLink>
            </Wrapper>
        </WrapperContainer>
    </Section>
  )
}

export default NotFound