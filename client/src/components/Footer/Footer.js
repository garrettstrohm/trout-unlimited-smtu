import React from 'react'
import { Button } from '../../globalStyles.js'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'
import tuLogo from '../../assets/tu-logo-xs.png'
import {
    FooterContainer,
    FooterSubHeading,
    FooterSubscription,
    FooterSubText,
    Form,
    FormInput,
    FooterLink,
    FooterLinkTitle,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItems,
    SocialIcon,
    SocialMedia,
    SocialMediaWrap,
    SocialIconLink,
    SocialIcons,
    SocialLogo,
    WebsiteRights
} from './Footer.elements.js'
const Footer = () => {
  return (
    <FooterContainer>
        <FooterSubscription>
            <FooterSubHeading>
                Learn more about what Trout Unlimited is All About Below
            </FooterSubHeading>
        </FooterSubscription>
        <FooterLinksContainer>
            <FooterLinksWrapper>
                <FooterLinksItems>
                    <FooterLinkTitle>About Us</FooterLinkTitle>
                    <FooterLink to='/about'>Our Chapter</FooterLink>
                    <FooterLink to='/'>History</FooterLink>
                    <FooterLink to='/'>Past Events</FooterLink>
                </FooterLinksItems>
                <FooterLinksItems>
                    <FooterLinkTitle>Contact Us</FooterLinkTitle>
                    <FooterLink to='/'>Contact Page</FooterLink>
                    <FooterLink to='/'>Email Us</FooterLink>
            </FooterLinksItems>
            </FooterLinksWrapper>
                <FooterLinksWrapper>
                <FooterLinksItems>
                    <FooterLinkTitle>Resources</FooterLinkTitle>
                    <FooterLink to='/'>Fly Tying & Selection</FooterLink>
                    <FooterLink to='/'>Upcoming Events</FooterLink>
                </FooterLinksItems>
                <FooterLinksItems>
                    <FooterLinkTitle>Videos</FooterLinkTitle>
                    <FooterLink to='/sign-up'>Fly Tying 101</FooterLink>
                </FooterLinksItems>
            </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo to='/'>
                    <SocialIcon src={tuLogo}/>
                    Snowy Mountain Trout Unlimited
                </SocialLogo>
                <WebsiteRights>
                    SMTU © 2022
                </WebsiteRights>
                <SocialIcons>
                    <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                        <FaFacebook />
                    </SocialIconLink>
                    <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                        <FaInstagram />
                    </SocialIconLink>
                    <SocialIconLink href={'https://www.youtube.com/channel/UC69GIppDOwRiTFhBzfgruMQ'} target='_blank' aria-label='Youtube' rel='noopener noreferrer'>
                        <FaYoutube />
                    </SocialIconLink>
                    <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                        <FaTwitter />
                    </SocialIconLink>
                </SocialIcons>
            </SocialMediaWrap>
        </SocialMedia>
    </FooterContainer>
  )
}

export default Footer