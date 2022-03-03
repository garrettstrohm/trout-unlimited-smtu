import styled from "styled-components";
import water from '../../assets/water.jpg'

export const InfoSec = styled.div`
    color: #fff;
    width: 100%;
    padding: 160px 0;
    background: ${({lightBg}) => (lightBg ? '#f0f0e2' : '#101522')};
    background-image: ${({bgImg}) => (bgImg ? `url(${water})` : '')};
    background-size: cover;
    background-repeat: none;
`;

export const InfoRow = styled.div`
    display: flex;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: ${({imgStart}) => (imgStart ? 'row-reverse' : 'row')};
`;

export const InfoColumn = styled.div`
    margin-bottom: 15px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 1;
    max-width: 50%;
    flex-basis: 50%;

    @media screen and (max-width: 768px){
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
    text-shadow: ${({waterBg}) => (waterBg ? '1px 1px 2px #000' : '')};

    @media screen and (max-width: 768px){
        padding-bottom: 65px;
    }
`;

export const TopLine = styled.div`
    color: ${({lightTopLine}) => (lightTopLine ? '#fff' : '#4B59F7')};
    font-size: 18px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
`;


export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    color: ${({lightText}) => (lightText ? '#f7f8f8' : '#1c2237')};
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    color: ${({lightTextDesc}) => (lightTextDesc ? '#fff' : '#1c2237')};
`;

export const ImgWrapper = styled.div`
    max-width: 555px;
    display: flex;
    justify-content: ${({start}) => ( start ? 'flex-start' : 'flex-end')};
`;

export const Img = styled.img`
    padding-right: 0;
    border: 0;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    max-height: 500px;
`;