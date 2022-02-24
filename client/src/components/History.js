import React from 'react'
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardFieldset,
} from "./styled/Card.styled";
import {Button} from './styled/Button.styled'

function History() {
  return (
    <CardWrapper>
      <CardHeader>
        <CardHeading>
            History
        </CardHeading>
      </CardHeader>
      <CardBody>
        <CardFieldset>
          See past projects and our connection to Trout Unlimited.
        </CardFieldset>
        <CardFieldset>
          <Button>Read More</Button>
        </CardFieldset>
      </CardBody>

    </CardWrapper>
  )
}

export default History