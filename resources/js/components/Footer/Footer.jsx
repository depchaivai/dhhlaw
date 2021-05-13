import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { Button } from "../../globalStyle";
import {
    FooterContainer,
    FooterSubcript,
    FooterSubHeading,
    FooterSubtext,
    FormInput,
    Form,
    FooterLinksWrapper,
    FooterLinksContainer,
    FooterLinkItems,
    LinkTitle,
    ItemLinks,
    SocialMedia,
    SocialWrapper,
    SocialLogo,
    SocialIcon,
    SocialRight,
    SocialIcons,
    SocialIconsLinks

} from "./Footer.elements";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubcript>
                <FooterSubHeading>
                    Hãy bắt đầu cùng chúng tôi ngay hôm nay
                </FooterSubHeading>
                <FooterSubtext>
                    this is yourself
                </FooterSubtext>
            </FooterSubcript>
            <Form>
                <FormInput name="email" type="email" placeholder="your email"/>
                <Button fontBig>
                        Subcrirse
                </Button>
            </Form>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <LinkTitle>Contact US</LinkTitle>
                        <ItemLinks to='/'>Supcrisre</ItemLinks>
                        <ItemLinks to='/'>More infomation</ItemLinks>
                        <ItemLinks to='/'>yes, it's your choice</ItemLinks>
                        <ItemLinks to='/'>that perfect</ItemLinks>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <LinkTitle>Introduct</LinkTitle>
                        <ItemLinks to='/'>The most popular</ItemLinks>
                        <ItemLinks to='/'>The new your starup</ItemLinks>
                        <ItemLinks to='/'>New lane</ItemLinks>
                        <ItemLinks to='/'>Presents for life</ItemLinks>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <LinkTitle to='/'>Privider</LinkTitle>
                        <ItemLinks to='/'>See my side</ItemLinks>
                        <ItemLinks to='/'>The best service</ItemLinks>
                        <ItemLinks to='/'>carrybay</ItemLinks>
                        <ItemLinks to='/'>Step by step</ItemLinks>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <LinkTitle to='/'>Os supplier</LinkTitle>
                        <ItemLinks to='/'>MacOS</ItemLinks>
                        <ItemLinks to='/'>Windows</ItemLinks>
                        <ItemLinks to='/'>Linux</ItemLinks>
                        <ItemLinks to='/'>Android</ItemLinks>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialWrapper>
                    <SocialLogo to='/'>
                        <SocialIcon/> DHHLAW
                    </SocialLogo>
                    <SocialRight>
                        UNTRA © 2021
                    </SocialRight>
                    <SocialIcons>
                        <SocialIconsLinks to="/">
                            <FaFacebook/>
                        </SocialIconsLinks>
                        <SocialIconsLinks to="/">
                            <FaTwitter/>
                        </SocialIconsLinks>
                        <SocialIconsLinks to="/">
                            <FaInstagram/>
                        </SocialIconsLinks>
                        <SocialIconsLinks to="/">
                            <FaYoutube/>
                        </SocialIconsLinks>
                    </SocialIcons>
                </SocialWrapper>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
