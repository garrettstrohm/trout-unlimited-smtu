import React from 'react'
import { Container } from '../../globalStyles';
import { 
    HeaderInfoSec,
    HeaderInfoRow, 
    Header 
} from './HeaderInfoSection.elements';

const HeaderInfoSection = ({
    lightBg,
    lightText, 
    bgImg
}) => {
    return (
        <>
            <HeaderInfoSec lightBg={lightBg} bgImg={bgImg}>
                <Container>
                    <HeaderInfoRow>
                        <Header lightText={lightText}>Join TU or Donate Today</Header>
                    </HeaderInfoRow>
                </Container>
            </HeaderInfoSec>
        </>
    );
}

export default HeaderInfoSection