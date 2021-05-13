import styled from 'styled-components';
import { FaLongArrowAltRight } from "react-icons/fa";

export const SimpleSection = styled.div`
    padding: 100px 0 0 0;
    color: #fff;
    background: ${({redB})=>(redB ? 'red' : '#fff')};
`
export const ImgSimple = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
    vertical-align:middle;
    transition: transform 0.9s ease;

`
export const ContinueIcon = styled(FaLongArrowAltRight)`
    font-weight:20px;
    font-size:20px;
    color:black;

`

export const TexboxContent = styled.div`
    font-family:courier,arial,helvetica;
    width:80%;
    padding:20px 70px;
    height:100%;
    max-height:20%;
    border: 1px solid #E9E9E9;
    background-color:#fff;
    min-height:140px;
    display: flex;
    align-items:center;
    position:absolute;
    bottom:0;
    padding: 16px 30px;
    flex-direction:column;
    -webkit-transition: all 0.4s ease-out;
    -moz-transition: all 0.4s ease-out;
    -o-transition: all 0.4s ease-out;
    transition: all 1s ease-out;
@media screen and (max-width:960px){
    width:100%;
    min-height:40%;
    padding: 10px 20px;
}
`
export const RowSimple = styled.div`
    display: flex;
    min-height: 550px;
    margin: 0 -15px -15px -15px;
    position: relative;
    justify-content:center;
    align-items:center;
    max-height:80%;
    background-color:#fff;

    &:hover ${ImgSimple}{
        transform: scale(1.1);
    }
    &:hover ${TexboxContent}{
        max-height: 30%;

    }

@media screen and (max-width:960px){
    min-height:80vh;
    transition: 0.5s ease-out;
    &:hover{

        min-height: 55vh;
    }
    &:hover ${TexboxContent}{
        transition: 0.5s ease-in-out;
        max-height: 50%;

    }

}
`
export const Imagecontain = styled.div`
    width:100%;
    height:90%;
    position:absolute;
    top: 0;
    overflow: hidden
`


export const Sologan = styled.h4`
    color: #988166;
    font-size:11px;
    line-height:10px;
    letter-spacing:1.4px;
    margin-bottom:16px;
`
export const HeadSection = styled.h1`
    color: #3c3c3c;
    font-size:24px;
    text-transform:uppercase;
    line-height:1.1;
    margin-bottom:18px;
`
export const DescritpSec = styled.p`
    color: #3c3c3c;
    letter-spacing:1.2px;
    font-size:13px;
    line-height:24px;
    margin-bottom:10px;
    max-width:440px;
`
