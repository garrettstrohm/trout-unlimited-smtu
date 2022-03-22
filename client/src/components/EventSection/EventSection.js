import React from 'react'
import { Container } from '../../globalStyles'
import {
  EventSec,
  EventRow,
  EventColumn,
  TextWrapper,
  Heading,
  Subtitle,
  ImgWrapper,
  Img
} from './EventSection.elements.js'

const EventSection = ({
  lightBg,
  imgStart,
  lightText,
  lightTextDesc,
  description,
  headline,
  start,
  img,
  alt,
  bgImg
}) => {
  return (
    <>
        <EventSec lightBg={lightBg} bgImg={bgImg}>
          <Container>
            <EventRow imgStart={imgStart}>
              <EventColumn>
                <TextWrapper>
                  <Heading lightText={lightText}>{headline}</Heading>
                  <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                </TextWrapper>
              </EventColumn>
              <EventColumn>
                <ImgWrapper start={start}>
                  <Img src={img} alt={alt}/>
                </ImgWrapper>
              </EventColumn>
            </EventRow>
          </Container>
        </EventSec>
    </>
  )
}

export default EventSection