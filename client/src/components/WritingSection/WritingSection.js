import React from 'react'
import { Container } from '../../globalStyles'
import {
    WritingSec,
    WritingRow,
    // WritingColumn,
    TextWrapper,
    Heading,
    WritingParagraph,
    // WritingImageWrapper,
    // WritingImage
} from './WritingSection.elements.js'

const WritingSection = ({
    lightBg,
    imgStart,
    lightText,
    lightTextDesc,
    about,
    header,
    img,
    alt, 
    start
}) => {
  return (
    <>
        <WritingSec lightBg={lightBg}>
            <Container>
                <WritingRow imgStart={imgStart}>
                    {/* <WritingColumn> */}
                        <TextWrapper>
                            <Heading lightText={lightText}>{header}</Heading>
                            <WritingParagraph lightTextDesc={lightTextDesc}>{about}</WritingParagraph>
                        </TextWrapper>
                    {/* </WritingColumn> */}
                    {/* <WritingColumn>
                        <WritingImageWrapper start={start}>
                            <WritingImage src={img} alt={alt}/>
                        </WritingImageWrapper>
                    </WritingColumn> */}
                </WritingRow>
            </Container>
        </WritingSec>
    </>
  )
}

export default WritingSection