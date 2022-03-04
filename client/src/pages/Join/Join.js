import React from 'react'
import { Cards, HeaderInfoSection } from '../../components'
import { joinObjOne } from './Data'


const Join = () => {
  return (
    <>
        <HeaderInfoSection {...joinObjOne}/>
        <Cards />
    </>
  )
}

export default Join