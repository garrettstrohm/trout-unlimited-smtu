import React from 'react'
import { Button } from '../../globalStyles.js'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'
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
                Join our membership to gain access to the latest news and trends
            </FooterSubHeading>
            <FooterSubText>
                You can unsubscribe at any time.
            </FooterSubText>
            <Form>
                <FormInput name='email' type='email' placeholder='Your Email'/>
                    <Button fontBig>Subscribe</Button>
            </Form>
        </FooterSubscription>
        <FooterLinksContainer>
            <FooterLinksWrapper>
                <FooterLinksItems>
                    <FooterLinkTitle>About Us</FooterLinkTitle>
                    <FooterLink to='/sign-up'>How it works</FooterLink>
                    <FooterLink to='/'>Testimonials</FooterLink>
                    <FooterLink to='/'>Careers</FooterLink>
                    <FooterLink to='/'>Investors</FooterLink>
                    <FooterLink to='/'>Terms of Service</FooterLink>
                </FooterLinksItems>
                <FooterLinksItems>
                    <FooterLinkTitle>Contact Us</FooterLinkTitle>
                    <FooterLink to='/sign-up'>How it works</FooterLink>
                    <FooterLink to='/'>Testimonials</FooterLink>
                    <FooterLink to='/'>Careers</FooterLink>
                    <FooterLink to='/'>Investors</FooterLink>
                    <FooterLink to='/'>Terms of Service</FooterLink>
            </FooterLinksItems>
            </FooterLinksWrapper>
                <FooterLinksWrapper>
                <FooterLinksItems>
                    <FooterLinkTitle>Resources</FooterLinkTitle>
                    <FooterLink to='/sign-up'>How it works</FooterLink>
                    <FooterLink to='/'>Testimonials</FooterLink>
                    <FooterLink to='/'>Careers</FooterLink>
                    <FooterLink to='/'>Investors</FooterLink>
                    <FooterLink to='/'>Terms of Service</FooterLink>
                </FooterLinksItems>
                <FooterLinksItems>
                    <FooterLinkTitle>Videos</FooterLinkTitle>
                    <FooterLink to='/sign-up'>How it works</FooterLink>
                    <FooterLink to='/'>Testimonials</FooterLink>
                    <FooterLink to='/'>Careers</FooterLink>
                    <FooterLink to='/'>Investors</FooterLink>
                    <FooterLink to='/'>Terms of Service</FooterLink>
                </FooterLinksItems>
            </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo to='/'>
                    <SocialIcon/>
                    COMPANY
                </SocialLogo>
                <WebsiteRights>
                    Company 2022
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