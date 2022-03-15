import React from 'react'
import { 
  HeaderInfoSection,
  WritingSection
} from '../../components'
import { 
  aboutHeader,
  aboutObjOne 
} from './Data'

const About = () => {
  return (
    <div>
        <HeaderInfoSection {...aboutHeader}/>
        <WritingSection {...aboutObjOne} />
    </div>
  )
}

export default About