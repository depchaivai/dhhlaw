import React,{ useState } from 'react';
import { DataSlide } from "./DataSlide";
import {
    Slider,
    ContainImgSlide,
    ImgSlide,
    PreArrow,
    NextArrow
 } from "./Slideshow.elements";

const Slideshow = () => {
    const [slide,setSlide] = useState(0);
    const length = DataSlide.length;
    const NextSlide = () =>{
        setSlide(slide === length-1 ? 0 : slide+1)
    }
    const PreSlide = () =>{
        setSlide(slide === 0 ? length-1 : slide-1)
    }
    return (

        <Slider>
            {DataSlide.map((Image,Index)=>{
                return <ContainImgSlide  key={Index} show={Index === slide ? true : false}>
                    <ImgSlide src={Image.Url} alt="image"/>
                </ContainImgSlide>
            })}
            <PreArrow onClick={PreSlide}/>
            <NextArrow onClick={NextSlide}/>

        </Slider>

    )
}

export default Slideshow
