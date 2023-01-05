import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {GetproductsId } from "./../../../redux/about/index"
import { Wrapper } from './styled-index'
const ServiesHero = () => {
  const DataImg = useSelector(state => state.categories.getproductsid?.Data)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetproductsId(window.localStorage.getItem("MoreId")))
  }, [])
  
  return (
    <Wrapper>
    {DataImg.map((elem , index) => 
      <img style={{}} key={index} src={elem.product_img1} alt="" />
    )}
    </Wrapper>
  )
}

export default ServiesHero