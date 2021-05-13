import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { getCmt, addCmt } from '../../service/cmtAPI';
import API from '../Service/api';
import { CommentArea, CommentBox, CommentContent, Commenter, Commentime, FormButton, FormContain, InputForm, LabelForm, RowComment,Cmtspan } from './Comment.element';
const Comment = (props) => {
    moment.locale('vi');
    const [savedCMT, setSaved] = useState(true);
    const [Cname,setCName] = useState('');
    const [Ccontent,setContent] = useState();
    const [email,setEmail] = useState('');
    const [listCmt, setList] = useState([]);
    const { mutate } = useMutation(addCmt,{onSuccess: ()=>{
        refetch();
    }})
    if(!props.post_id){
        return <h5>loadding</h5>
    }
    const post_id = props.post_id;
    const { status,data,error,refetch } = useQuery('cmtinPost',()=>getCmt(post_id),{onSuccess: (data)=>{
        setList(data);
    }});
    const handleCmt = async () => {
        const newCmt = {
            post_id: post_id,
            Cname: Cname,
            content: Ccontent,
            email: email
        }
        if(savedCMT===false){
            setCName('');
            setEmail('');

        }
        setContent('');
        try {
            await mutate({cmtdata: newCmt});
        } catch (e) {
            console.log(e);
        }
    }

    const getValueContent = (e)=>{
        setContent(e.target.value);
    }
    return (
        <CommentBox>
            <h6>ý kiến bạn đọc</h6>
            <FormContain>
                <LabelForm>Họ tên *</LabelForm>
                <InputForm value = {'' || Cname} onChange={(e)=>setCName(e.target.value)}></InputForm>
            </FormContain>
            <FormContain>
                <LabelForm>Email *</LabelForm>
                <InputForm value = {'' || email} onChange={(e)=>setEmail(e.target.value)}></InputForm>
            </FormContain>
            <FormContain>
                <LabelForm>Nội dung *</LabelForm>
                <CommentArea value={''|| Ccontent} onChange={(e)=>getValueContent(e)} onBlur={(e)=>getValueContent(e)}></CommentArea>
                <input type='checkbox' defaultChecked={true} onChange={(e)=>setSaved(e.target.checked)}/><span>Sử dụng cho làn bình luận tiếp theo</span>
            </FormContain>
            <FormContain>
                <FormButton onClick={handleCmt}>Comment</FormButton>
            </FormContain>
            {status === "success" &&(<>
                { listCmt.length > 0 &&listCmt.map((item,index)=>{
                return <RowComment key={index}>
                    <Commenter>{item.name}</Commenter>
                    <Commentime>{moment(item.created_at,'YYYY-MM-DD HH:mm:ss').fromNow()}</Commentime>
                    <CommentContent>{item.content}</CommentContent>
                    <div>
                        <Cmtspan>Like</Cmtspan><Cmtspan>reply</Cmtspan>
                    </div>
                </RowComment>
            })}
            </>)}

        </CommentBox>
    )
}

export default Comment
