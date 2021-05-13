import React, { useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import Comment from '../Comment/Comment';
import {
    ContentPost, DetailContain,
    TitlePost
} from "./Detail.element";
const DetailPost = (props) => {
    if (!props.post){
        return <h5>Loadding</h5>
    }
    return (
        <DetailContain>
            <TitlePost>{ReactHtmlParser(props.post.title)}</TitlePost>
            <ContentPost>{ReactHtmlParser(props.post.content)}</ContentPost>
            <Comment post_id={props.post.id}/>
        </DetailContain>
    )
}

export default DetailPost
