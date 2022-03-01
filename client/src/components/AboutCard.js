import React from 'react'
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardFieldset,
} from "./styled/Card.styled";
import {Button} from './styled/Button.styled'

function About({navigate}) {

  return (
    <CardWrapper>
      <CardHeader>
        <CardHeading>About</CardHeading>
      </CardHeader>
      <CardBody>
        <CardFieldset>
          Checkout our about section to find out more about who we are and what we do!
        </CardFieldset>
        <CardFieldset>
          <Button onClick={() => navigate('/about')}>Read More</Button>
        </CardFieldset>
      </CardBody>

    </CardWrapper>
  )
}

export default About