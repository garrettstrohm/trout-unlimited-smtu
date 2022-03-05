import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CardsSection = styled.div`
  padding: 100px 0 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #142d5f;
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  
  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const CardsHeading = styled.h1`
  color: #fff;
  font-size: 48px;
  margin-bottom: 24px;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const CardsCard = styled(Link)`
  background: #242424;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.25);
  width: 280px;
  height: 500px;
  text-decoration: none;
  border-radius: 4px;
  &:nth-child(2) {
    margin: 24px;
  }
  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }
  @media screen and (max-width: 960px) {
    width: 90%;
    &:hover {
      transform: none;
    }
  }
`;

export const CardsCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 24px;
  align-items: center;
  color: #fff;
`;

export const CardsCardIcon = styled.div`
  margin: 24px 0;
`;

export const CardsCardImage = styled.img`
  height: 80px;
  margin: 15px auto;
`

export const CardsCardTitle= styled.h3`
  margin-bottom: 5px;
  font-size: 24px;
`;

export const CardsCardLength = styled.p`
  font-size: 14px;
  margin-bottom: 24px;
`;

export const CardsCardFeatures = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #fff;
`;

export const CardsCardFeature = styled.li`
  margin-bottom: 10px;
`;