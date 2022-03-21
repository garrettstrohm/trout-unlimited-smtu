import styled from "styled-components";

export const BoardSec = styled.div`
    color: #fff;
    width: 100%;
    padding: 160px 0px 40px 0px;
    background: #f0f0e2;
`;

export const BoardSecRow = styled.div`
    display: flex;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    align-items: center;
`;

export const BoardSecColumn = styled.div`
    margin-bottom: 15px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 1;
    max-width: 25%;
    flex-basis: 25%;

    @media screen and (max-width: 860px){
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`;

export const ImgWrapper = styled.div`
    max-width: 325px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Img = styled.img`
    max-width: 100%;
    border: 0;
    vertical-align: middle;
    display: inline-block;
    max-height: 450px;
`;

export const Heading = styled.h3`
    margin: 10px 24px;
    font-size: 24px;
`;

export const TextWrapper = styled.div`
    max-width: 325px;
    padding-top: 0;
    padding-bottom: 60px;
    color: #1c2237;
    text-align: center;

    @media screen and (max-width: 860px) {
        padding-bottom: 65px;
    }
`;

export const Position = styled.p`
    font-size: 24px;
    text-align: center;
    margin: 10px 24px;
`;

export const Description = styled.p`
    font-size: 18px;
    margin: 10px 24px;
`;

export const Email = styled.p`
    font-size: 18px;
    margin: 10px 24px;
`;

export const Header = styled.h1`
    color: #101522;
    font-size: 48px;
    text-align: center;
    margin: -50px 0px 40px 0px;
`;