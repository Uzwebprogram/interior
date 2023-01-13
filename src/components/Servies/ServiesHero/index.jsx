import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import {GetproductsId } from "./../../../redux/about/index"
import { Wrapper } from './styled-index'
const ServiesHero = () => {
  const DataImg = useSelector(state => state.categories.getproductsid?.Data)
  const dispatch = useDispatch();
  const pathname = useLocation();
    var names = pathname.pathname;
    let idProducts = names.split('/')
    window.localStorage.setItem("MoreId" , idProducts[2])
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