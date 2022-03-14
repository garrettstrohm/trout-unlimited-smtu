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
    bgImg,
    message
}) => {
    return (
        <>
            <HeaderInfoSec lightBg={lightBg} bgImg={bgImg}>
                <Container>
                    <HeaderInfoRow>
                        <Header lightText={lightText}>{message}</Header>
                    </HeaderInfoRow>
                </Container>
            </HeaderInfoSec>
        </>
    );
}

export default HeaderInfoSection