import styled from "styled-components";
import trout from '../../assets/trout.jpg';

export const HeaderInfoSec = styled.div`
    color: #fff;
    width: 100%;
    padding: 210px 0;
    background: ${({lightBg}) => (lightBg ? '#f0f0e2' : '#101522')};
    background-image: ${({bgImg}) => (bgImg)};
    background-size: cover;
    background-repeat: none;
`;
// ${({bgImg}) => (bgImg ? `url(${trout})` : '')};

export const HeaderInfoRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

export const Header = styled.h1`
    color: ${({lightText}) => (lightText ? '#fff' : '#101522')};
    font-size: 3rem;
    text-shadow: 2px 2px #000;
`;