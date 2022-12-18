import React from 'react'
import {Wrapper} from "./styled-index"
import LoaderGif from "./../../assets/video/loader.gif"
import Logo from "./../../assets/image/loader/Logo.svg"

function Loader() {
  return (
    <Wrapper>
      <img src={Logo} width={184} height={156} alt="" />
      <h2>Добро пожаловать  в Luxhouse.</h2>
      <p>Страница загружается ,  это не займет много времени</p>
      <img src={LoaderGif} width={308} height={308} alt="" />
    </Wrapper>
  )
}

export default Loader