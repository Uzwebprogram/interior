import React, { useState } from 'react'
import CommonHero from '../../../components/common/CommonHero/index'
import serviesBg from '../../../assets/image/servies/serviesBg.png'

const ServiesHero = () => {
  const [bg, setBg] = useState(serviesBg)
  return (
    <>
    <CommonHero bg={bg} style={{padding: '154px 0',height: '100%'}}></CommonHero>
    </>
  )
}

export default ServiesHero