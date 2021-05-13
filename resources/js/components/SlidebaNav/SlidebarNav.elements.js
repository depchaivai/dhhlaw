import styled from "styled-components";
import { Link } from 'react-router-dom'

export const SlideBarLink = styled(Link)`
    text-decoration:none;
    width:100%;
    color:rgb(0,0,0);
    &:hover{
        text-decoration:none;
    }
`

export const Menuslide = styled.ul`
    list-style:none;
    width:100%;
    box-shadow: 0 10px 10px -10px gray;
`
export const Parentmenu = styled.li`
    padding: 16px 30px;
    display:flex;
    flex-wrap:nowrap;
    font-size:18px;
`
export const MenuIcon = styled.span`
    padding: 3px 10px;

`
export const MenuName = styled.span`
    padding: 3px 10px;
    width:100%;
    justify-self:stretch;

`
export const Subsidebarcontain = styled.ul`
    list-style:none;
    display:flex;
    flex-direction:column;
    padding: 0 30px 0 70px;
    width:100%;
`
export const Subitemsidebar = styled.li`
    padding: 10px 0;
    display:flex;
    flex-wrap:nowrap;
    align-items:center;

`
