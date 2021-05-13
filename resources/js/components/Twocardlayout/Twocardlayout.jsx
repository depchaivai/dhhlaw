import React,{useState,useEffect} from 'react';
import { Container } from '../../globalStyle';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {
    TwoSec,
    TwoRow,
    TwoCol,
    TwoImgbox,
    TwoImg,
    TwoTextbox,
    THeadTile,
    TsubHead,
    TDescript,
    Cicon,
    CiconLeft,
    CiconRight,
    ControlTextWrap,
    Ttitle
 } from "./Twocardlayout.elements";
import { CardData } from './CardData';

const Twocardlayout = () => {
    const [show,setShow] = useState(0);
    const [twocard,setTwocard] = useState(false);

    const setslide = ()=>{
        if(window.innerWidth>960){
            setTwocard(true);
        }
        if(window.innerWidth<=960){
            setTwocard(false);
        }
    }
    window.addEventListener("resize",setslide);
    const nextShow = ()=>{
        setShow(show === 1 ? 0 : 1);
    }
    const prevShow = ()=>{
        setShow(show === 0 ? 1 : 0);
    }
    useEffect(() => {
        setslide();
        Aos.init({duration:1000});
    }, [])
    return (
        <TwoSec>
            <Container>
                <Ttitle data-aos="fade-up">Title Section</Ttitle>
                <TwoRow>
                {
                    CardData.map((blog,index)=>{

                        if (twocard) {
                            return <TwoCol key={index} data-aos="fade-up" >
                            <TwoImgbox>
                                <TwoImg src="https://i.pinimg.com/originals/64/5c/98/645c98aad1fb7a86be543a8205047105.jpg" alt="image"/>
                            </TwoImgbox>
                            <TwoTextbox>
                                <THeadTile>{blog.title}</THeadTile>
                                <TsubHead>{blog.auth}</TsubHead>
                                <TDescript>{blog.des}</TDescript>
                                <Cicon/>
                            </TwoTextbox>
                        </TwoCol>


                        }else{
                            return show === index&&(
                                <TwoCol key={index} data-aos="fade-left" >
                            <TwoImgbox>
                                <TwoImg src="https://i.pinimg.com/originals/64/5c/98/645c98aad1fb7a86be543a8205047105.jpg" alt="image"/>
                            </TwoImgbox>
                            <TwoTextbox>
                                <THeadTile>{blog.title}</THeadTile>
                                <TsubHead>{blog.auth}</TsubHead>
                                <TDescript>{blog.des}</TDescript>
                                <Cicon/>
                            </TwoTextbox>
                        </TwoCol>

                            )

                        }


                })}

                <ControlTextWrap>
                        <CiconLeft onClick={prevShow}/>
                        <CiconRight onClick={nextShow}/>
                    </ControlTextWrap>
            </TwoRow>
            </Container>
        </TwoSec>
    )
}

export default Twocardlayout
