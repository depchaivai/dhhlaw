import React, { useEffect, useState } from 'react'
import { Slideshow } from "../..";
import SlidebarNav from '../../SlidebaNav/SlidebarNav';
import Thepost from '../../ThePost/Thepost';
import API from '../../Service/api'
import {
    NewPage,
    NewWraper,
    Sectiontitle,
    NewsContainer,
    NewS,
    NavMenuDropDowns,
    Marketting,
    OrtherContainer,
    MarkettingImg
 } from "./Other.elements";
import { useParams } from 'react-router';
import DetailPost from '../../Detail/DetailPost'
import NewsSlide from './NewsSlide/NewsSlide';
import Pagination  from 'react-js-pagination'
import './paging.css'
import { ceil } from 'lodash';
import Similar from '../../Similar/Similar';
import { useQuery } from 'react-query';
import { getpost, getposts } from '../../../service/postAPI';

const Other = () => {
    const pageparam = useParams();
    const [loading,setLoadding] = useState(false);
    const [curent,setCurent] = useState(pageparam.other);
    const [PDetail,setPDetail] = useState([]);
    const [showDetail,setshowDetail] = useState(false);
    const [ListP,setListP] = useState([]);
    const [activePage,setActivepage] = useState(1);
    const [total,setTotal] = useState(0);
    if(pageparam.post_detail){
        const e_name = pageparam.post_detail;
        const { status, data, error } = useQuery('getost',()=>getpost(e_name),{onSuccess: (data)=>{
            setPDetail(data[0]);
            setshowDetail(true);
            setLoadding(true);
        }})
    }

    const fetchList = (pageNumber = 1) =>{
        try {
            const dataday = getposts(curent,pageNumber);
            dataday.then(
                res=>{
                    setListP([...res.data.data]);
                    setActivepage(res.data.current_page);
                    setTotal(res.data.total);
                }
            )

        } catch (error) {
            console.log(error);
        }


    }

    useEffect(()=>{

        if(pageparam.post_detail){

            return
        }
        fetchList();
    },[])
    return (
        <>
        <OrtherContainer>
         <NewsSlide/>
        <NewPage>
            <NewWraper>
                <NewsContainer>

                    <NewS>
                    {
                        showDetail === true ? (loading &&<DetailPost  post={PDetail}/>) : (ListP.map((item,i)=>{
                            return <Thepost key={i} post={item} topath={curent}/>
                        }))
                    }
                    {total > 15 &&(<div>
                        <Pagination
                        activePage={activePage}
                        itemsCountPerPage={15}
                        totalItemsCount={total}
                        pageRangeDisplayed={ceil(total/15)}
                        onChange={(pageNumber) => fetchList(pageNumber)}
                        innerClass='ulPaging'
                        activeClass='liPagingActive'
                        activeLinkClass='aactive'
                        linkClass='alinkClass'
                        itemClass='liPaging'

                        />
                    </div>)}
                    </NewS>
                    <NavMenuDropDowns>
                        <Marketting><MarkettingImg src='/storage/img/OzkMhdWTkR3wHoRtl5CwDNpgQgknD5Lx1sQGUCio.jpg' alt='image'/></Marketting>
                        <SlidebarNav/>
                        <Similar similar={curent}/>
                    </NavMenuDropDowns>
                </NewsContainer>
            </NewWraper>
        </NewPage>
        </OrtherContainer>
        </>
    )
}

export default Other
