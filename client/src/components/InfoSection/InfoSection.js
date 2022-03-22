import React from 'react'
import {Link} from 'react-router-dom'
import { Container, Button } from '../../globalStyles'
import {
    InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrapper,
    Img
} from './InfoSection.elements'

const InfoSection = ({
    primary, 
    lightBg, 
    imgStart, 
    lightTopLine, 
    lightText, 
    lightTextDesc, 
    topLine, 
    buttonLabel, 
    description, 
    headline,
    start,
    img,
    alt,
    bgImg,
    waterBg,
    route 
}) => {

  return (
    <>
       <InfoSec lightBg={lightBg} bgImg={bgImg}>
            <Container>
                <InfoRow imgStart={imgStart}>
                    <InfoColumn>
                        <TextWrapper waterBg={waterBg}>
                            <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                            <Link to={route}>
                                <Button big fontBig primary={primary}>
                                    {buttonLabel}
                                </Button>
                            </Link>
                        </TextWrapper>
                    </InfoColumn>
                    <InfoColumn>
                        <ImgWrapper start={start}>
                            <Img src={img} alt={alt} />
                        </ImgWrapper>
                    </InfoColumn>
                </InfoRow>
            </Container>
        </InfoSec> 
    </>
  )
}

export default InfoSection