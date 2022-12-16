import React from 'react'
import {Button} from './styled-index'

const CommonBtn = ({children, type, onClick}) => {
  return (
    <>
     <Button type={type} onClick={onClick}>{children}</Button>
    </>
  )
}

export default CommonBtn