import styled from 'styled-components';
import { Link } from "react-router-dom";
import { FaMagento } from "react-icons/fa";

export const FooterContainer = styled.div`
    background-color: #1f1f1f;
    padding: 2rem 0 1rem 0;
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

`;
export const FooterSubcript = styled.section`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    padding:16px;
    color:#fff;
`;
export const FooterSubHeading = styled.p`
    margin-bottom:24px;
    font-size:24px;
`;
export const FooterSubtext = styled.p`
    margin-bottom:24px;
    font-size:20px;
`;
export const Form = styled.form`
    display:flex;
    justify-content:center;
    align-items:center;

@media screen and (max-width:820px){
    flex-direction:column;
    width:80%;
}
`;
export const FormInput = styled.input`
    padding:10px 20px;
    border-radius:2px;
    margin-right:10px;
    outline:none;
    font-size:16px;
    border: 1px solid darkred;

    &::placeholder{
        color: grey;
    }
    @media screen and (max-width:820px){
        width:100%;
        margin-right:0;
        margin-bottom:10px;
    }
`;
export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content:center;
    max-width:1000px;
    width:100%;

@media screen and (max-width: 820px){
    padding-top:32px;
}
`;
export const FooterLinksWrapper = styled.div`
    display: flex;

@media screen and (max-width: 820px){
    flex-direction:column;
}
`;
export const FooterLinkItems = styled.div`
    display: flex;
    align-items:flex-start;
    flex-direction:column;
    text-align:left;
    color:#fff;
    box-sizing:border-box;
    margin:16px;
    width:160px;


@media screen and (max-width: 820px){
    margin:0;
    padding:10px;
    width:100%;
}
`;
export const LinkTitle = styled.h2`
    margin-bottom:16px;
`;
export const ItemLinks = styled(Link)`
    margin-bottom:0.5rem;
    text-decoration:none;
    color:#fff;
    &:hover{
        color:#ff7b00;
        transition:0.3 ease-ease-out;
    }
`;
export const SocialMedia = styled.section`
    width:100%;
    max-width:1000px;
`;
export const SocialWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:90%;
    max-width:1000px;
    margin: 40px auto 0 auto;

@media screen and (max-width:820px){
    flex-direction:column;
}
`;
export const SocialLogo = styled(Link)`
    display:flex;
    justify-self:start;
    align-items:center;
    color:#fff;
    cursor: pointer;
    text-decoration:none;
    margin-bottom:16px;
    font-size:2rem;
`;
export const SocialIcon = styled(FaMagento)`
    margin-left: 18px;
`;
export const SocialRight = styled.small`
    color:#fff;
    margin-bottom:16px;
`;
export const SocialIcons = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:240px;

`;
export const SocialIconsLinks = styled.div`
    color:#fff;
    font-size:24px;

`;