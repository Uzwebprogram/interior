import React from 'react'
import { WrapperContainer } from '../../style-App'
import FooterBottom from './FooterBottom'
import FooterContact from './FooterContact'
function Footer() {
  return (
    <WrapperContainer>
            <FooterContact/>
            <FooterBottom/>
    </WrapperContainer>
  )
}

export default Footer