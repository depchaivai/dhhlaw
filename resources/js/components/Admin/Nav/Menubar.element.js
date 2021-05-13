import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const Adminsite = styled.div`
    display:flex;
    max-width:100%;
    flex-wrap:nowrap;
`
export const Adminhead = styled.div`
    width:100%;
    height:1vh;
    padding:30px;
    background-color:peru;
`
export const Adminmenu = styled.ul`
    margin:0;
    padding-top:16px;
    width:25%;
    background-color:#2D2D2D;
`
export const Adminbody = styled.div`
    width:75%;
    min-height:90vh;
    overflow:scroll;
`
export const Adminlink =  styled(Link)`
    text-decoration:none;
    color: #fff;
`
export const AdminItemmenu =  styled.li`
    padding:16px 16px 16px 50px;
    &:hover{
    background-color:#fff;
    color:black;
}
`
