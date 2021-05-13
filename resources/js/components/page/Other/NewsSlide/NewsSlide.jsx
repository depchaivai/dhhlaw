import React, { useEffect, useState } from 'react';
import API from '../../../Service/api'
import {
    ImageSlide,
    LeftSLSection,
    MostPostImg,
    MostPostTitle,
    NewsSlideWrap,
    NSlide,
    NSlideAuth,
    NSlideImagebox,
    NSlideItextbox,
    NSlideItiltle,
    MostviewPot,
    RightSLSection, SlideClick, SlideClickTitle } from "./NewsSlide.element";
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getNewspost } from '../../../../service/postAPI';
<NSlideAuth>Manh Hiep</NSlideAuth>
const NewsSlide = () => {
    const [news,setNews] = useState([]);
    const [mostV,setMostV] = useState([]);
    const [show, setShow] = useState(0);
    const { isSuccess, data } = useQuery('newspost',getNewspost, {onSuccess: (data)=>{
        setNews(data.news);
        setMostV(data.most);
    }});
    useEffect(() => {
        const interval = setInterval(() => {
          setShow(show === 3 ? 0 : show+1)
        }, 4500);
        return () => clearInterval(interval);
      }, [show]);

        return (
            <NewsSlideWrap>
                <LeftSLSection>
                {news.map((item, index) => {
                    return show === index && <NSlide key={index}>
                        <NSlideImagebox
                            initial={{ opacity: 0, y: 200 }}
                            animate={{ opacity: 1,y:0 }}
                            transition={{ duration: 0.7 }}
                            exit={{ opacity: 0 }}>
                            <ImageSlide src={item.image} />
                        </NSlideImagebox>
                        <NSlideItextbox
                            initial={{ opacity: 0, x: '-100%' }}
                            animate={{ opacity: 1,x:0 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            exit={{ opacity: 0 }}>
                            <Link style={{textDecoration:'none'}} to={'/page/newsposts/'+item.e_name}>
                            <NSlideItiltle>{item.title}</NSlideItiltle>
                            </Link>
                        </NSlideItextbox>
                    </NSlide>
                })}

                <SlideClick>
                    {news.map((item, index) => {
                        return <SlideClickTitle activecond={show === index ? true : false} onClick={() => setShow(index)} key={index}>{item.title}</SlideClickTitle>
                    })}
                </SlideClick>
                </LeftSLSection>
                <RightSLSection>
                    {mostV.map((item2,i)=>{
                        return <MostviewPot key={i}>
                            <Link style={{textDecoration:'none'}} to={'/page/mostviews/'+item2.e_name}>
                            <MostPostImg src={item2.image}/>
                            <MostPostTitle>{item2.title}</MostPostTitle>
                            </Link>
                        </MostviewPot>
                    })}
                </RightSLSection>
            </NewsSlideWrap>
        )


}

export default NewsSlide
