import styled from 'styled-components'
import { GoComment } from "react-icons/go";
import { AiOutlineEye } from "react-icons/ai";
import LinesEllipsis from 'react-lines-ellipsis'

export const Postwrapper = styled.div`
    margin:0;
    height: 300px;
    overflow:hidden;
    padding:30px;
    display:flex;
    flex-wrap:wrap;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    @media screen and (max-width:860px){
        padding:0;
        height: auto;
        box-shadow: 0 8px 16px rgba(0,0,0,0.3);
        margin-top:70px;
    }
`
export const ImgPostBox = styled.div`
    width:35%;
    height:100%;
    @media screen and (max-width:860px){
        width:100%;
    }
`
export const ImgPost = styled.img`
    width:100%;
    height: 85%;
    vertical-align:middle;
    object-fit:cover;
    border:none;
    @media screen and (max-width:860px){
        height:100%;
    }

`
export const PostTextBox = styled.div`
    width:65%;
    height:100%;
    padding-left:30px;
    @media screen and (max-width:860px){
        width:100%;
        flex:1;
        padding: 0;
    }
`
export const PostTitle = styled(LinesEllipsis)`
    color: rgba(0,0,0,0.8);
    white-space:wrap;
    line-height:1.5;
    font-size:20px;
    padding: 16px 24px;
    border-left: 1px dotted rgba(0,0,0,0.2);
    @media screen and (max-width:860px){
        border:none;
    }
`
export const PostAuth = styled.h4`
    color: rgba(219,187,125,0.9);
    padding: 0 0 16px 24px;
    font-size:15px;
    border-left: 1px dotted rgba(0,0,0,0.2);
`
export const PostDes = styled(LinesEllipsis)`
    color: rgba(0,0,0,0.6);
    padding: 16px 0;
    width:100%;
    @media screen and (max-width:860px){
        padding: 16px;
    }
`
export const InfoView = styled.div`
padding:10px;
    width:100%;
    height:15%;
    display: flex;
    justify-content:space-between;
    @media screen and (max-width:860px){
        display:none;
    }
`
export const TotalCmt = styled.div`
    width:200px;
    display:flex;
    justify-content:center;
`
export const IconCmt = styled(GoComment)`

`
export const IconLike = styled(AiOutlineEye)`

`
export const Coutcmt = styled.p`

`
export const TaltalLike = styled.div`
    width:200px;
    display:flex;
    justify-content:center;
`

export const CoutLike = styled.p`

`
