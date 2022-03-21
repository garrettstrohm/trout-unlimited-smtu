import React from 'react'
import { 
  HeaderInfoSection,
  WritingSection
} from '../../components'
import { 
  aboutHeader,
  aboutObjOne,
  aboutObjTwo,
  aboutObjThree 
} from './Data'

const About = () => {
  return (
    <div>
        <HeaderInfoSection {...aboutHeader} />
        <WritingSection {...aboutObjOne} />
        <WritingSection {...aboutObjTwo} />
        <WritingSection {...aboutObjThree} />
    </div>
  )
}

export default About