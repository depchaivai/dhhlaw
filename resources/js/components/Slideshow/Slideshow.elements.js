import styled from 'styled-components';
import { motion } from "framer-motion";
import { FaArrowCircleLeft,FaArrowAltCircleRight } from "react-icons/fa";
export const Slider = styled(motion.div)`
    padding:0;
    margin:0;
    position:relative;
    height:100vh;
    overflow:hidden;

`
export const ContainImgSlide = styled(motion.div)`
    position:absolute;
    opacity: ${({show})=>(show ? '1' : '0')};
    top:0;
    width:100%;
    transition: 1s ease;
    height:100%;

`
export const ImgSlide = styled.img`
    width: 100%;
    height:100%;
    object-fit:cover;
    vertical-align:middle;

`
export const PreArrow = styled(FaArrowCircleLeft)`
    font-size:48px;
    position:absolute;
    top:50%;
    left: 30px;
    cursor: pointer;

`
export const NextArrow = styled(FaArrowAltCircleRight)`
    font-size:48px;
    position:absolute;
    top:50%;
    right: 30px;
    cursor: pointer;

`