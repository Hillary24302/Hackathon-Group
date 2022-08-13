import React from 'react'
import { FaYoutube, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import {FooterContainer, FooterSubHeading, FooterSubscription, FooterSubText,
FooterLinksContainer, FooterLinksItems, FooterLinkTitle, FooterLink, FooterLinksWraper,
SocialMedia, SocialMediaWrap, SocialLogo, SocialLinks, SocialIcons, WebsiteRight} from './Footer.elements'

function Footer() {
  return (
    <FooterContainer>
        <FooterSubscription>
            <FooterSubHeading>
                Footer
            </FooterSubHeading>
            <FooterSubText>
                My foot
            </FooterSubText>
            <FooterLinksContainer>
                <FooterLinksWraper>
                    <FooterLinksItems>
                        <FooterLinkTitle>Navigate</FooterLinkTitle>
                        <FooterLink to ="/">About</FooterLink> 
                        <FooterLink to ="/">Patner</FooterLink>
                        <FooterLink to ="/">Press</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Navigate</FooterLinkTitle>
                        <FooterLink to ="/">About</FooterLink> 
                        <FooterLink to ="/">Patner</FooterLink>
                        <FooterLink to ="/">Press</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWraper>
                <FooterLinksWraper>
                    <FooterLinksItems>
                        <FooterLinkTitle>Navigate</FooterLinkTitle>
                        <FooterLink to ="/">About</FooterLink> 
                        <FooterLink to ="/">Patner</FooterLink>
                        <FooterLink to ="/">Press</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Navigate</FooterLinkTitle>
                        <FooterLink to ="/">About</FooterLink> 
                        <FooterLink to ="/">Patner</FooterLink>
                        <FooterLink to ="/">Press</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWraper>
            </FooterLinksContainer>
            <SocialMedia>
              <SocialMediaWrap>
                    <SocialLogo to='/'>
                        MediCare
                    </SocialLogo>
                    <WebsiteRight>
                        MediCare @ 2022
                    </WebsiteRight>
                    <SocialIcons>
                        <SocialLinks href='/' target='_blank' aria-label='Facebook'>
                            <FaFacebook />
                        </SocialLinks>
                        <SocialLinks href='/' target='_blank' aria-label='Instagram'>
                            <FaInstagram />
                        </SocialLinks>
                        <SocialLinks href='/' target='_blank' aria-label='Youtube'>
                            <FaYoutube />
                        </SocialLinks>
                        <SocialLinks href='/' target='_blank' aria-label='LinkedIn'>
                            <FaLinkedin />
                        </SocialLinks>
                    </SocialIcons>
                </SocialMediaWrap>  
            </SocialMedia>
        </FooterSubscription>
    </FooterContainer>
  )
}

export default Footer