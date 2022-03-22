import React from 'react'
import { 
  HeaderInfoSection,
  WritingSection,
  BoardSection
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
        <BoardSection />
    </div>
  )
}

export default About