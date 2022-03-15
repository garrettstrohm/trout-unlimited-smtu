import styled from "styled-components";

export const WritingSec = styled.div`
    color: #fff;
    width: 100%;
    padding: 160px 0;
    background: ${({lightBg}) => (lightBg ? '#f0f0e2' : '#101522')};
`;

export const WritingRow = styled.div`
    display: flex;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: ${({imgStart}) => (imgStart ? 'row-reverse' : 'row')};
`;

export const WritingColumn = styled.div`
    margin-bottom: 15px;
    padding-inline-start: 15px;
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
    max-width: 620px;
    padding-top: 0;
    padding-bottom: 60px;
    white-space: pre-wrap;
    
    @media screen and (max-width: 768px) {
        padding-bottom: 65px;
    }
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    color: ${({lightText}) => (lightText ? '#fff' : '#1c2237')};
`;

export const WritingParagraph = styled.p`
    max-width: 500px;
    margin-bottom: 40px;
    font-size: 18px;
    color: ${({lightTextDesc}) => (lightTextDesc ? '#fff' : '#1c2237')};
`;