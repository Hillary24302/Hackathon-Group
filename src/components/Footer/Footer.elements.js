import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const FooterContainer = styled.div`
     background: teal;
     padding: 2rem 0 2rem 0;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
`;

export const FooterSubscription = styled.section`
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     text-align: center;
     margin-bottom: 24px;
     padding: 24px;
     color: #fff;
`
export const FooterSubHeading = styled.p`
     font-family: 'rubik';
     margin-bottom: 24px;
     font-size: 24px;
`
export const FooterSubText = styled.p`
     margin-bottom: 24px;
     font-size: 20px;
`
export const FooterLinksContainer = styled.div`
     width: 100%;
     max-width: 1000px;
     display: flex;
     justify-content: center;

     @media screen and (max-width: 820px) {
         padding-top: 32px;
         justify-content: space-between;
     }
`
export const FooterLinksWraper = styled.div`
     display: flex;

     @media screen and (max-width: 820px) {
         flex-direction: column;
     }
`
export const FooterLinksItems = styled.div`
     display: flex;
     flex-direction: column;
     align-items: flex-start;
     margin: 16px;
     text-align: left;
     width: 160px;
     box-sizing: border-box;
     color: #fff;

     @media screen and (max-width: 420px) {
         display: flex;
         padding-top: 10px;
         width: 100%;
         margin: 0;
     }
`
export const FooterLinkTitle = styled.h2`
     margin-bottom: 16px;
`
export const FooterLink = styled(Link)`
     color: #fff;
     text-decoration: none;
     margin-bottom: 0.5rem;

     &:hover {
         color: #0467fb;
         transition: 0.3 ease-out
     } 
`
export const SocialMedia = styled.section`
        max-width: 1000px;
        width: 100%;
`
export const SocialMediaWrap = styled.div`
     display: flex;
     justify-content: space-between;
     align-items: center;
     width: 90%;
     max-width: 1000px;
     margin:    40px auto 0 auto;


     @media screen and (max-width: 820px) {
         flex-direction: column;
     }
`
export const SocialLogo = styled(Link)`
     display: flex;
     justify-self: start;
     align-items: center;
     margin-bottom: 16px;
     text-align: left;
     cursor: pointer;
     font-size: 2rem;
     text-decoration: none;
     color: #fff;
`
export const WebsiteRight = styled.small`
     color: #fff;
     margin-bottom: 16px;
`
export const SocialIcons = styled.div`
     display: flex;
     justify-content: space-between;
     align-items: center;
     width: 240px;
`
export const SocialLinks = styled.a`
     color: #fff;
     font-size: 24px;
`
