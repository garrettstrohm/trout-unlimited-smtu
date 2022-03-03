import React from 'react'
import { InfoSection } from '../../components'
import { 
  homeObjOne, 
  homeObjTwo,  
  homeObjFour 
} from './Data'

const Services = () => {
  return (
    <>
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <InfoSection {...homeObjFour}/>
    </>
  )
}

export default Services