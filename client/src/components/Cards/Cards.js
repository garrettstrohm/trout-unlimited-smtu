import React from 'react';
import { Button } from '../../globalStyles';
import tuWhite from '../../assets/tu-white.png'
import { BiDollarCircle } from 'react-icons/bi';
import { IconContext } from 'react-icons/lib';
import {
  CardsSection,
  CardsWrapper,
  CardsHeading,
  CardsContainer,
  CardsCard,
  CardsCardInfo,
  CardsCardIcon,
  CardsCardTitle,
  CardsCardFeatures,
  CardsCardFeature, 
  CardsCardImage
} from './Cards.elements';
const Cards = () => {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 86 }}>
      <CardsSection>
        <CardsWrapper>
          <CardsHeading>Join or Donate</CardsHeading>
          <CardsContainer>
            <CardsCard to='/donate'>
              <CardsCardInfo>
                <CardsCardIcon>
                  <BiDollarCircle />
                </CardsCardIcon>
                <CardsCardTitle>Donate</CardsCardTitle>
                <CardsCardFeatures>
                  <CardsCardFeature>Donations are currently only being accepted by cash or check via mail at this time.</CardsCardFeature>
                  <CardsCardFeature>Please mail donations to:</CardsCardFeature>
                  <CardsCardFeature>*Address*</CardsCardFeature>
                </CardsCardFeatures>
                <Button>Donate Now</Button>
              </CardsCardInfo>
            </CardsCard>
            <CardsCard to='/sign-up'>
              <CardsCardInfo>
                <CardsCardIcon>
                  <CardsCardImage src={tuWhite} alt="white tu logo"/>
                </CardsCardIcon>
                <CardsCardTitle>Join</CardsCardTitle>
                <CardsCardFeatures>
                  <CardsCardFeature>To join our chapter, all you need is a membership to Trout Unlimited. Click the button below to go to Trout Unlimited's national website and sign up!</CardsCardFeature>
                </CardsCardFeatures>
                <Button>Join Today</Button>
              </CardsCardInfo>
            </CardsCard>
          </CardsContainer>
        </CardsWrapper>
      </CardsSection>
    </IconContext.Provider>
  );
}
export default Cards;

