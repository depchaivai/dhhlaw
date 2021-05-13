import styled from 'styled-components';
import { FaLongArrowAltRight,FaLongArrowAltLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { CardData } from "./CardData";
export const TwoSec = styled.div`
    padding: 100px 0 0 0;
    color: black;
`;
export const TwoRow = styled.div`
    height:420px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    @media screen and (max-width:960px){
        height: auto;
        padding:0;
    }
`;
export const TwoImg = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
    transition: transform 0.9s ease;
    @media screen and (max-width:768px){
        height:70%;
    }
`;
export const TwoTextbox = styled.div`
    position: absolute;
    bottom:0;
    padding:16px 30px;;
    display:flex;
    flex-direction:column;
    justify-self:start;
    min-height:100px;
    width:80%;
    margin:30px;
    background-color:#fff;
    transition: min-height 0.7s ease;
    @media screen and (max-width:960px){
        margin:0;
        width:95%;
        min-height:40%;
    }
`;
export const Cicon = styled(FaLongArrowAltRight)`
    font-weight:20px;
    font-size:20px;
    color:black;
    opacity:0;
    transition: 1.5s ease;
`;
export const TwoCol = styled(motion.div)`
    max-width: 40%;
    padding:0;
    height:100%;
    margin: 0 30px;
    flex:1;
    box-shadow: 0 8px 25px rgba(0,0,0,0.5);
    display: flex;
    justify-content:center;
    align-items:center;
    &:hover ${TwoImg}{
        transform: scale(1.1);
    }
    &:hover ${Cicon}{
        opacity:1;

    }
    &:hover ${TwoTextbox}{
        min-height:170px;

    }
    @media screen and (max-width:960px){
        max-width:100%;
        height: 65vh;
        flex-basis:100%;
        padding:0;
        margin:0 ;
    }
`;
export const TwoImgbox = styled.div`
    padding: 0;
    position: relative;
    margin: 0;
    max-width:100%;
    height:100%;
    overflow:hidden;
`;

export const THeadTile = styled.h1`
    font-family:courier,arial,helvetica;
    font-size:20px;
    text-transform:uppercase;
    font-weight:bold;
`;
export const TsubHead = styled.h4`
    color: #988166;
    font-size:11px;
    line-height:10px;
    letter-spacing:1.4px;
    margin-bottom:16px;
`;
export const TDescript = styled.p`
    color: #3c3c3c;
    letter-spacing:1.2px;
    font-size:13px;
    line-height:24px;
    margin-bottom:10px;
    max-width:440px;
`;
export const ControlTextWrap = styled.div`
    position: relative;
    width:100%;
    padding:15px;
    bottom:0;
    display:none;
    @media screen and (max-width:960px){
        display:block;
    }
`;
export const CiconRight = styled(FaLongArrowAltRight)`
    font-size:24px;
    position: absolute;
    right:40%;
`;
export const CiconLeft = styled(FaLongArrowAltLeft)`
    font-size:24px;
    position: absolute;
    left:40%;
`;
export const Ttitle = styled.h1`
    text-align: center;
    padding: 16px 30px;
`
