import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaMagento } from "react-icons/fa";
import { Container } from '../../globalStyle';

export const Nav = styled.div`
background-color: ${({nBR})=>(nBR ? 'none' : '#1f1f1f')};
opacity: ${({navBarS})=>(navBarS ? '0.85' : '1')};
color: ${({navBarS})=>(navBarS ? 'black' : '#fff')};
height: 80px;
display: flex;
justify-content: center;
box-shadow: ${({navBarS})=>(navBarS ? '0 8px 8px -10px black' : 'none')};
align-items: center;
font-size: 1.2rem;
position: fixed;
width:100vw;
top:0;
z-index:999;
transition: 1s ease;

`;
export const NavbarContainer = styled(Container)`
display:flex;
justify-content: space-between;
height:80px;
${Container}
`;

export const NavLogo = styled.div`
color:#fff;
justify-self: start;
cursor: pointer;
text-decoration:none;
display:flex;
align-items:center;
&:hover{
    color: #FFFB2B;
    text-decoration: none;
}
`;
export const NavIcon = styled(FaMagento)`
margin-right:0.5rem;
`;
export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 960px){
    display: block;
    position: absolute;
    top:0;
    right:0;
    transform: translate(-100%,60%);
    font-size: 1.8rem;
    cursor: pointer;
}
`;
export const NavMenu = styled.ul`
    display:flex;
    height:100%;
    padding:0px;
    text-transform:uppercase;
    justify-content:center;
    font-size:14px;
    align-items:center;
    list-style:none;
    text-align:center;
@media screen and (max-width:960px){
    display:flex;
    flex-direction:column;
    width:100%;
    height:90vh;
    position: absolute;
    top: 80px;
    left: ${({Click})=>(Click? 0 : '-100%')};
    opacity:1;
    transition: all 0.5s ease;
    background-color: #f54e42;
}
`;
export const NavItem = styled.li`
    height:80px;
    align-items:center;
    border-bottom:2px solid transparent;
    &:hover{
        border-bottom: 2px solid #155511;
    }

@media screen and (max-width:960px){
    width: 100%;
    &:hover{
        border:none;

    }
}
`;
export const NavLinks = styled(Link)`
    color:#fff;
    display:flex;
    align-items:center;
    text-align:center;
    text-decoration:none;
    padding: 0 0.5rem;
    vertical-align:center;
    height: 100%;
    &:hover{
        color:#FFFB2B;
        text-decoration:none;

    }
@media screen and (max-width:960px){
    text-align:center;
    padding: 2rem;
    width:100%;
    display:table;

    &:hover{
        color:#456665;
        transition: all 0.5s ease;
    }
}
`;
export const SubMenu = styled.ul`
    position: absolute;
    background-color:#911A00;
    width:170px;
    top:80px;
    display:${({click})=>(click ? "none" : "flex")};
    align-items:center;
    flex-direction:column;
    list-style:none;
    text-align:center;
    animation:rotateMenu 400ms ease-in-out forwards;
    @keyframes rotateMenu {
        0% {
        transform: rotateY(90deg)
    }
    80% {
        transform: rotateY(-10deg)
    }
    100% {
        transform: rotateY(0)
    }
}


@media screen and (max-width:960px){
    display:none;
}
`;
export const ItemSub = styled.li`
    height:50px;
    width:100%;
    align-items:center;
    border-bottom:2px solid transparent;
    &:hover{
        background-color:#F7F4F4;
        border:2px solid darkred;
    }

@media screen and (max-width:960px){
    width: 100%;
    &:hover{
        border:none;

    }
}
`;
export const NavItemButton = styled.li`
display:flex;
justify-content:center;
align-items:center;
height:100px;
`;
export const NavBtnLinks = styled(Link)`
display:flex;
justify-content:center;
align-items:center;
width:100%;
height:100%;
border:none;
padding: 8px 16px;
text-decoration:none;
&:hover{
    text-decoration:none;
}
`;


