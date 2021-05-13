import { Link } from "react-router-dom";
import styled from "styled-components";


export const CardContain = styled.div`
    margin: 20px 10px;
    box-shadow: 5px 10px 10px -10px rgba(0,0,0,0.5);
`
export const Card = styled(Link)`
    display:flex;
    align-items:center;
    text-decoration: none;
    flex-wrap:nowrap;
    border: 1px solid rgba(0,0,0,0.1);
    margin-left: -1px;
    margin-top: -1px;
    color: black;
    &:hover{
        text-decoration: none;
    }

`
export const ImageBox = styled.div`
    width:70px;
    padding:10px;
    height:70px;
`
export const Img = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
    border-radius:40px;
    vertical-align:middle;
`
export const Titlebox = styled.p`
    margin:0;
    width: calc( 100% - 70px );
    padding: 10px;
    min-height: 80px;
    overflow:hidden;
`
