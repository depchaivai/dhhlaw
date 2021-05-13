import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from "react-router-dom";
import API from '../Service/api';
import { getCmtCount } from '../../service/postAPI';
import {
    Coutcmt,


    CoutLike, IconCmt,


    IconLike, ImgPost, ImgPostBox,





    InfoView, PostAuth,
    PostDes, PostTextBox,
    PostTitle, Postwrapper,
    TaltalLike, TotalCmt
} from "./Thepost.elements";
const Thepost = (props) => {
    const [cmtCount,setCmtCount] = useState(0);
    const [user,setUser] = useState();
    const { status } = useQuery('cmtCout',()=>getCmtCount(props.post.id),{onSuccess: (data)=>{
        setCmtCount(data.cmtCount);
        setUser(data.username);
    }});
    useEffect(()=>{
        Aos.init({duration:500});
    },[])
    return (
        <Link style={{textDecoration:'none'}} to={'/page/'+props.topath+'/'+props.post.e_name}>
        <Postwrapper data-aos="fade-right">
            <ImgPostBox>
                <ImgPost alt="image" src={props.post.image}/>
                <InfoView>
                    <TotalCmt>
                        <IconCmt/>
                        <Coutcmt>
                        {cmtCount}
                        </Coutcmt>
                    </TotalCmt>
                    <TaltalLike>
                        <IconLike/>
                        <CoutLike>{props.post.views}</CoutLike>
                    </TaltalLike>
                </InfoView>
            </ImgPostBox>
            <PostTextBox>
                <PostTitle
                    text={props.post.title}
                    maxLine='3'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'/>
                <PostAuth>{user}</PostAuth>
                <PostDes
                   text={props.post.description}
                   maxLine='2'
                   ellipsis='...'
                   trimRight
                   basedOn='letters'
                />

            </PostTextBox>
        </Postwrapper>
        </Link>
    )
}

export default Thepost
