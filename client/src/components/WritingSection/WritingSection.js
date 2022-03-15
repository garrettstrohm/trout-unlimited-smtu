import React from 'react'
import { Container } from '../../globalStyles'
import {
    WritingSec,
    WritingRow,
    WritingColumn,
    TextWrapper,
    Heading,
    WritingParagraph
} from './WritingSection.elements.js'

const WritingSection = ({
    lightBg,
    imgStart,
    lightText,
    lightTextDesc,
    about,
    header
}) => {
  return (
    <>
        <WritingSec lightBg={lightBg}>
            <Container>
                <WritingRow imgStart={imgStart}>
                    <WritingColumn>
                        <TextWrapper>
                            <Heading lightText={lightText}>{header}</Heading>
                            <WritingParagraph lightTextDesc={lightTextDesc}>{about}</WritingParagraph>
                        </TextWrapper>
                    </WritingColumn>
                </WritingRow>
            </Container>
        </WritingSec>
    </>
  )
}

export default WritingSection