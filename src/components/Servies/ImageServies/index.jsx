import React from 'react'
import { Col, Row } from 'react-grid-system'
import {Section, ServiesImgContainer} from './styled-index'
import serviesBg from '../../../assets/image/servies/serviesBg.png'
 
const ImageServies = () => {
  return (
    <>
     <Section>
        <ServiesImgContainer>
           <Row className='row'>
            <Col className='col' lg={12} md={12} sx={12} sm={12}>
                <img className='col-img' src={serviesBg} alt="image" />
            </Col>
            <Col className='col' lg={12} md={12} sx={12} sm={12}>
                <img className='col-img' src={serviesBg} alt="image" />
            </Col>
            <Col className='col' lg={12} md={12} sx={12} sm={12}>
                <img className='col-img' src={serviesBg} alt="image" />
            </Col>
           </Row>
        </ServiesImgContainer>
     </Section>
    </>
  )
}

export default ImageServies