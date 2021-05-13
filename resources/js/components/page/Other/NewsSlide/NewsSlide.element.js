import styled from 'styled-components'
import { motion } from "framer-motion"
import { Container } from '../../../../globalStyle'

export const NewsSlideWrap = styled.div`
    display:flex;
    margin:0;
    padding:0;
    flex-wrap:nowrap;
    height:480px;
`
export const LeftSLSection = styled.div`
    width: 75%;
    display:flex;
`
export const RightSLSection = styled.div`
    width: 25%;
    margin-left:50px;
    display:flex;
    flex-direction:column;
    padding:0;

`
export const RowContainer = styled(Container)`
    display:flex;
    flex-wrap:nowrap;
`
export const NSlide = styled.div`
    display:flex;
    width:67%;
    flex-direction:column;
    overflow:hidden;
    height: 100%;

`
export const SlideClick = styled.div`
    display:flex;
    width:33%;
    flex-direction:column;
    height: 100%;
`
export const NSlideImagebox = styled(motion.div)`
    max-height: 76%;
    height:76%;
    min-height: 60%;
    background-color:grey;
`
export const NSlideItextbox = styled(motion.div)`
    background-color:black;
    padding: 10px 50px;
    max-height:40%;
    min-height:24%;
`
export const NSlideItiltle = styled.h3`
    color:#fff;
    padding: 10px 0;
`
export const NSlideAuth = styled.p`
    color:#fff;
    margin:0;
    padding-bottom: 16px;
`
export const SlideClickTitle = styled.div`
    border: 1px solid rgba(0,0,0,0.1);
    border-left: 10px solid ${({activecond})=>(activecond ? 'rgba(150,5,112,1)' : 'rgba(0,0,0,0.1)')};
    border-collapse:collapse;
    height: 25%;
    padding:30px;
    cursor: pointer;
`
export const ImageSlide = styled.img`
    object-fit:cover;
    vertical-align:middle;
    width:100%;
    height: 100%;

`
export const MostviewPot = styled.div`
    width:100%;
    height:50%;
    position: relative;
`
export const MostPostImg = styled.img`
    vertical-align:middle;
    width:100%;
    height:100%;
`
export const MostPostTitle = styled.h4`
    position: absolute;
    bottom: 0;
    width:100%;
    padding: 10px 20px;
    margin:0;
    background-color: black;
    color: #fff;
`
