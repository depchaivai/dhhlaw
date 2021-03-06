import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { AiFillCloseCircle } from "react-icons/ai";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Button, Form, FormGroup, Label, Input, FormText, Table } from 'reactstrap';
import API from "../../Service/api";
import PostsKindSelect from './PostsKindSelect';
import { useHistory, useRouteMatch } from 'react-router';
import { useSelector } from 'react-redux';
import MenuSelect from './MenuSelect';

const ImageSelectbox = styled.div`
    width:500px;
    max-height:500px;
    display:flex;
`
const ImageFrame = styled.div`
    width:100px;
    height:100px;
`
const Thisimage = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
    vertical-align:middle;
`
const Postcontain = styled.div`
    margin:0;
    padding:60px;
    position: relative;
`
const Popup = styled.div`
    position:fixed;
    overflow: scroll;
    background-color:#fff;
    top:0;
    bottom:0;
    padding:60px;
    z-index:10;
    width:100%;
`

const PostsManager = () => {
    const h = useHistory();
    const imgList = useSelector(({image}) => image.ImgList);
    const { url } = useRouteMatch();
    const [listPost, setListpost] = useState([]);
    const [idPost, setIdpost] = useState('');
    const [image,setImg] = useState('');
    const [content, setContent] = useState('');
    const [menu,setMenu] = useState('');
    const [title, setTitle] = useState('');
    const [des, setDes] = useState('');
    const [kind, setKind] = useState('');
    const [hightlight, setHightlight] = useState('');
    const [addnewPost, setANP] = useState(false);
    const [isUpdate, setUpdate] = useState(false);
    const [selectImg,setslimg] = useState(false);
    const handleChange = (e, editer) => {
        const data = editer.getData();
        setContent(data);
    }
    const addpost = () => {
        const newpost = {
            title: title,
            des: des,
            image: image,
            content: content,
            menu: menu,
            kind:kind,
            hightlight:hightlight
        }
        API.post('/post', newpost);
        fetchPosts();
        closePopup();

    }
    const updatePost = () => {
        const id = idPost;
        const dataUpdate = {
            title: title,
            des: des,
            image: image,
            menu: menu,
            content: content,
            kind:kind,
            hightlight:hightlight
        }
        API.put('/post/update/'+id,dataUpdate);
        fetchPosts();
        closePopup();

    }
    const fetchPosts = () => {
        API.get('/post')
            .then(res => {
                setListpost([...res.data]);
            })
    }
    const getOne=(id)=>{
        API.put('/post/'+id)
        .then(res=>{
            setIdpost(res.data.id);
            setContent(res.data.content);
            setDes(res.data.description);
            setMenu(res.data.menu);
            setHightlight(res.data.hightlight);
            setKind(res.data.kindposts_id);
            setTitle(res.data.title);
        })
        setUpdate(true);
        setANP(true);
    }
    const deletePost = (id,i)=>{
        const newlist = listPost;
        newlist.splice(i,1);
        var yes = confirm('b???n c?? th???c s??? mu???n x??a post n??y?');
        if(yes){
            API.delete('/post/delete/'+id);
            setListpost([...newlist]);
        }
    }
    const toCmt = (id)=>{
        h.push(url+'/comment/'+id);
    }
    useEffect(() => {
        console.log(imgList);
        fetchPosts();
    }, [])
    const closePopup = ()=>{
        setANP(false);
        setUpdate(false);
        setIdpost(null);
        setContent(null);
        setDes(null);
        setImg(null);
        setHightlight(null);
        setKind(null);
        setTitle(null);

    }
    const seclectThis = (im) => {
        setImg(im);
        setslimg(false);
    }
    return (
        <Postcontain>
            <Button color="success" onClick={(e)=>setANP(true)}>th??m</Button>
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>title</th>
                        <th>descrip</th>
                        <th>h??nh ???nh</th>
                        <th>th??? lo???i</th>
                        <th>l?????t xem</th>
                        <th>n???i b???t</th>
                    </tr>
                </thead>
                <tbody>
                    {listPost.map((item, index) => {
                        return <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.title}</td>
                            <td>{item.description}</td>
                            <td>{item.image}</td>
                            <td>{item.kindposts_id}</td>
                            <td>{item.views}</td>
                            <td>{item.hightlight}</td>
                            <td><Button color="primary" onClick = {(e)=>getOne(item.id)}>s???a</Button>{' '}
                                <Button color="secondary" onClick = {(e)=>deletePost(item.id,index)}>x??a</Button>
                                <Button color="secondary" onClick = {(e)=>toCmt(item.id)}>Ph???n h???i</Button>
                            </td>

                        </tr>
                    })}
                </tbody>
            </Table>
            {addnewPost===true &&(
                <Popup>
                <AiFillCloseCircle onClick={closePopup} style={{color: "red",fontSize: 48, position: 'absolute', top: 5, right: '50%', cursor: 'pointer'}}/>
                <Form>
                    <FormGroup>
                        <Label for="title">Ti??u ?????</Label>
                        <Input type="text" value = { title || '' } onChange={(e) => setTitle(e.target.value)} placeholder="nh???p v??o ti??u ????? b??i vi???t" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Des">M?? t??? ng???n</Label>
                        <Input type="text" value = { des || '' } onChange={(e) => setDes(e.target.value)} placeholder="M?? t???" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="hightlight">n???i b???t</Label>
                        <Input type="select" value={hightlight} onChange={(e)=>setHightlight(e.target.value)}>
                            <option value='1'>c??</option>
                            <option value='0'>kh??ng</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="menu">danh m???c</Label>

                    <MenuSelect slmn={menu} onChange={(e)=>setMenu(e.target.value)}/>

                    </FormGroup>
                    <FormGroup>
                        <Label for="kindspost">ki???u</Label>

                    <PostsKindSelect sltd={kind} onChange={(e)=>setKind(e.target.value)}/>

                    </FormGroup>
                    <FormGroup>
                        <Label for="content">N???i dung</Label>
                        <CKEditor editor={ClassicEditor} data={content || ''} onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="image">???nh</Label>
                        <Button onClick={()=>setslimg(true)}>ch???n ???nh</Button>
                        { selectImg &&<ImageSelectbox>
                        {imgList.map((im,index)=>{
                            return <ImageFrame onClick = {(e)=>seclectThis(im)} key={index}><Thisimage src = {im}/></ImageFrame>
                        })}
                        </ImageSelectbox> }

                    </FormGroup>


                    <Button onClick={ isUpdate ? updatePost : addpost}>Submit</Button>
                </Form>
            </Popup>
            )}

        </Postcontain>
    )
}

export default PostsManager
