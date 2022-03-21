import React from 'react'
import { 
    Container 
} from '../../globalStyles'

import tu from '../../assets/trout.jpg'

import { 
    BoardSec,
    BoardSecRow,
    BoardSecColumn,
    ImgWrapper,
    Img, 
    TextWrapper, 
    Heading, 
    Position, 
    Description, 
    Email,
    Header 
} from './BoardSection.elements'

const BoardSection = () => {

  return (
    <>
        <BoardSec>
            <Container>
            <Header>Our Board</Header>
                <BoardSecRow>
                    <BoardSecColumn>
                            <ImgWrapper>
                            <Img src={tu} alt="logo"/>
                            </ImgWrapper>
                            <TextWrapper>
                            <Heading>Firstname Lastname</Heading>
                            <Position>President</Position>
                            <Description>Firstname Lastname has been president since 2004.</Description>
                            <Email>fakeemail@fakeemail.com</Email>
                            </TextWrapper>
                    </BoardSecColumn>
                    <BoardSecColumn>
                            <ImgWrapper>
                            <Img src={tu} alt="logo"/>
                            </ImgWrapper>
                            <TextWrapper>
                            <Heading>Firstname Lastname</Heading>
                            <Position>President</Position>
                            <Description>Firstname Lastname has been president since 2004.</Description>
                            <Email>fakeemail@fakeemail.com</Email>
                            </TextWrapper>
                    </BoardSecColumn>
                    <BoardSecColumn>
                            <ImgWrapper>
                            <Img src={tu} alt="logo"/>
                            </ImgWrapper>
                            <TextWrapper>
                            <Heading>Firstname Lastname</Heading>
                            <Position>President</Position>
                            <Description>Firstname Lastname has been president since 2004.</Description>
                            <Email>fakeemail@fakeemail.com</Email>
                            </TextWrapper>
                    </BoardSecColumn>
                    <BoardSecColumn>
                            <ImgWrapper>
                            <Img src={tu} alt="logo"/>
                            </ImgWrapper>
                            <TextWrapper>
                            <Heading>Firstname Lastname</Heading>
                            <Position>President</Position>
                            <Description>Firstname Lastname has been president since 2004.</Description>
                            <Email>fakeemail@fakeemail.com</Email>
                            </TextWrapper>
                    </BoardSecColumn>
                </BoardSecRow>
            </Container>
        </BoardSec>
    </>
  )
}

export default BoardSection