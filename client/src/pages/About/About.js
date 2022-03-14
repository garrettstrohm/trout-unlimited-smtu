import React from 'react'
import { HeaderInfoSection } from '../../components'
import { aboutObjOne } from './Data'

const About = () => {
  return (
    <div>
        <HeaderInfoSection {...aboutObjOne}/>
    </div>
  )
}

export default About