import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinkItems, FooterLinkTitle, FooterLink, FooterLinksWrapper, NavLogo, SocialMedia, SocialMediaWrap,
SocialLogo, WebsiteRights, SocialIcons, SocialIconLink} from './FooterElements'
import {FaInstagram, FaTwitter} from 'react-icons/fa'


const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Sobre nós</FooterLinkTitle>
                                <FooterLink to="/contato">Contato</FooterLink>
                                <FooterLink to="/contato">Como Funciona</FooterLink>
                                <FooterLink to="/contato">Termos de serviço</FooterLink>  
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Mídias Sociais</FooterLinkTitle>
                                <FooterLink to="/">Instagram</FooterLink>
                                <FooterLink to="/">Twitter</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            HCZ soluções
                        </SocialLogo>
                        <WebsiteRights>HCZ soluções © {new Date().getFullYear()} Todos direitos reservados.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//www.instagram.com" target="_blank" aria-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href="//www.twitter.com" target="_blank" aria-label="Twitter">
                                <FaTwitter/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
