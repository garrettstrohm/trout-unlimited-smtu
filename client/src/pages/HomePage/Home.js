import React from 'react'
import { 
  InfoSection,
  HeaderInfoSection 
} from '../../components'
import {
  homeHeaderObj, 
  homeObjOne, 
  homeObjTwo, 
  homeObjThree
} from './Data'

const Home = () => {
  return (
    <>
      <HeaderInfoSection {...homeHeaderObj}/>
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <InfoSection {...homeObjThree}/>
    </>
  )
}

export default Home