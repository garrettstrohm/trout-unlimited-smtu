import React from 'react';
import { Button } from '../../globalStyles';
import { GiCrystalBars } from 'react-icons/gi';
import { GiRock } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  CardsSection,
  CardsWrapper,
  CardsHeading,
  CardsContainer,
  CardsCard,
  CardsCardInfo,
  CardsCardIcon,
  CardsCardPlan,
  CardsCardCost,
  CardsCardLength,
  CardsCardFeatures,
  CardsCardFeature
} from './Cards.elements';

const Cards = () => {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 86 }}>
      <CardsSection>
        <CardsWrapper>
          <CardsHeading>Our Services</CardsHeading>
          <CardsContainer>
            <CardsCard to='/sign-up'>
              <CardsCardInfo>
                <CardsCardIcon>
                  <GiRock />
                </CardsCardIcon>
                <CardsCardPlan>Starter Pack</CardsCardPlan>
                <CardsCardCost>$99.99</CardsCardCost>
                <CardsCardLength>per month</CardsCardLength>
                <CardsCardFeatures>
                  <CardsCardFeature>100 New Users</CardsCardFeature>
                  <CardsCardFeature>$10,000 Budget</CardsCardFeature>
                  <CardsCardFeature>Retargeting analytics</CardsCardFeature>
                </CardsCardFeatures>
                <Button primary>Choose Plan</Button>
              </CardsCardInfo>
            </CardsCard>
            <CardsCard to='/sign-up'>
              <CardsCardInfo>
                <CardsCardIcon>
                  <GiCrystalBars />
                </CardsCardIcon>
                <CardsCardPlan>Gold Rush</CardsCardPlan>
                <CardsCardCost>$299.99</CardsCardCost>
                <CardsCardLength>per month</CardsCardLength>
                <CardsCardFeatures>
                  <CardsCardFeature>1000 New Users</CardsCardFeature>
                  <CardsCardFeature>$50,000 Budget</CardsCardFeature>
                  <CardsCardFeature>Lead Gen Analytics</CardsCardFeature>
                </CardsCardFeatures>
                <Button primary>Choose Plan</Button>
              </CardsCardInfo>
            </CardsCard>
          </CardsContainer>
        </CardsWrapper>
      </CardsSection>
    </IconContext.Provider>
  );
}
export default Cards;

