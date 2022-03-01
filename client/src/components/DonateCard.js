import React from 'react'
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardFieldset,
} from "./styled/Card.styled";
import {Button} from './styled/Button.styled'

function Donate({navigate}) {

  return (
    <CardWrapper>
      <CardHeader>
        <CardHeading>
            How to Join & Donate
        </CardHeading>
      </CardHeader>
      <CardBody>
        <CardFieldset>
            Looking to join? Or Donate? Read more for details!
        </CardFieldset>
        <CardFieldset>
          <Button onClick={() => navigate('/donate&join')}>Read More</Button>
        </CardFieldset>
      </CardBody>

    </CardWrapper>
  )
}

export default Donate