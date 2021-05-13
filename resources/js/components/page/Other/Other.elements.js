import styled from 'styled-components'
import { Container } from '../../../globalStyle'
import StickyBox from "react-sticky-box";

export const OrtherContainer = styled(Container)`
    margin-top: 100px;
    ${Container}

`
export const NewPage = styled.div`
    margin: 160px 0;

`
export const NewWraper = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
`
export const Sectiontitle = styled.h1`
    text-transform:uppercase;
    padding: 16px;
`
export const NewsContainer = styled.div`
    width:100%;
    border-top:1px solid rgba(0,0,0,0.1);
    display:flex;
    align-items:flex-start;
    flex-wrap:wrap;

`
export const NewS = styled.div`
    justify-content: center;
    flex:1;
    width:75%;
    @media screen and (max-width:960px){
        width:100%;
    }
`
export const NavMenuDropDowns = styled(StickyBox)`
    padding: 30px 0;
    width:25%;
    justify-content: center;
    border-left: 1px solid rgba(0,0,0,0.1);
    @media screen and (max-width:960px){
        display:none;
    }

`
export const Marketting = styled.div`
    height: 350px;
    margin-top:-30px;
    width: 100%;
`
export const MarkettingImg = styled.img`
    height:100%;
    width:100%;
    vertical-align:middle;
    object-fit:cover;
`
