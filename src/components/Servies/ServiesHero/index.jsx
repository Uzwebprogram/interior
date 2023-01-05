import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {GetproductsId } from "./../../../redux/about/index"
const ServiesHero = () => {
  const DataImg = useSelector(state => state.categories.getproductsid?.Data)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetproductsId(window.localStorage.getItem("MoreId")))
  }, [])
  
  return (
    <>
    {DataImg.map((elem , index) => 
      <img style={{width: "100%" , height: "753px"}} key={index} src={elem.product_img1} alt="" />
    )}
    </>
  )
}

export default ServiesHero