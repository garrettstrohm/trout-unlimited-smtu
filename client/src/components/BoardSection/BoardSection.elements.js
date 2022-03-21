import styled from "styled-components";

export const BoardSec = styled.div`
    color: #fff;
    width: 100%;
    padding: 160px 0;
    background: ${({lightBg}) => (lightBg ? '#f0f0e2' : '#101522')};
`;

export const BoardSecRow = styled.div`
    display: flex;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    align-items: center;
`;