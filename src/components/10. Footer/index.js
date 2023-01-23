import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import {FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink, WebsiteRights1 } from "./FooterElements";
import {animateScroll as scroll} from "react-scroll";
import Logo from "../Logo";
import "./footer.css";

const Footer = () => {
    
    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to="/" onClick={scroll.scrollToTop}><Logo size={100}/></SocialLogo>
                            <WebsiteRights>Fr. Conceicao Rodrigues College of Engineering, Bandra (W) <br/> <br/>+91 79000 94875 | +91 82919 16643 <br/> <br/> <a href="mailto:unscriptrookiehackathon@gmail.com">unscriptrookiehackathon@gmail.com</a></WebsiteRights>

                            <SocialIcons>
                             <SocialIconLink href="https://frcrce.acm.org/" target="_blank" aria-label="Acm website">ACM
                             </SocialIconLink>
                                <SocialIconLink href="https://www.instagram.com/unscriptrookies/" target="_blank" aria-label="Instagram">
                                    <FaInstagram />
                                
                                </SocialIconLink>
                                <SocialIconLink href="https://csicrce.github.io/csi/" target="_blank" aria-label="Csi website">CSI
                             </SocialIconLink>
                            </SocialIcons>
                            <WebsiteRights1>
                            © Copyright UnScr;pt2k23. All Rights Reserved. <br/>
                        </WebsiteRights1>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
        </>
    )
}

export default Footer
