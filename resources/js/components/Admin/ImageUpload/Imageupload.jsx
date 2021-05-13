import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Table,Button,Form, FormGroup, Label, Input, FormText } from "reactstrap";
import API from '../../Service/api'
import { useRouteMatch } from 'react-router';
const ContainImgs = styled.div`
    width:100%;
    display:flex;
    flex-wrap:wrap;
`
const Imgbox = styled.div`
    height:200px;
    width:200px;
    position:relative;
`
const Img = styled.img`
    vertical-align:middle;
    object-fit: cover;
    width:100%;
    height:100%;
`
const ImgPopup = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100px;
    border-radius:3px;
    box-shadow: 0 8px 8px 10px rgba(0,0,0,0.1);
    background-color:#fff;
`
const PopupItem = styled.h6`
    padding: 10px;
    cursor: pointer;
    &:hover{
        background-color:yellow;
    }
`
const Imageupload = () => {
    const { Url } = useRouteMatch();
    const [showPopup,setShow] = useState(-1);
    const [image,setImage] = useState(null);
    const [listIMG,setList] = useState([]);
    const fetchListIMG = ()=>{
        API.get('/image')
        .then(res=>{
            setList(res.data)
        })
    }
    const uploadimge = ()=>{
        const formData = new FormData();
        formData.append('image',image);
        API.post('/uploadimg',formData);
        fetchListIMG();
    }
    const deleteImage = (item) =>{
        const itname = item.replace(/storage\/img\//,'')
        API.delete('image/delete'+itname);
        fetchListIMG();
    }
    useEffect(() => {
        fetchListIMG();
    }, [])
    return (
        <div style={{padding:'50px',display:'flex',justifyContent: 'center',flexDirection:'column'}}>
        <FormGroup>
            <Label for="FileName">chọn ảnh</Label>
            <Input type="File" onChange={(e)=>setImage(e.target.files[0])}/>
            <Button onClick={uploadimge}>upload</Button>
        </FormGroup>
        <ContainImgs>
            {listIMG.map((item, index)=>{
                return <Imgbox key={index}>
                    <Img src={item} alt={index} onClick={()=>setShow(index)}/>
                    { showPopup===index &&<ImgPopup>
                        <PopupItem onClick={()=>deleteImage(item)}>xoa</PopupItem>
                        <PopupItem onClick={()=>setShow(-1)}>huy</PopupItem>
                    </ImgPopup>}
            </Imgbox>
            })}
        </ContainImgs>
        </div>
    )
}

export default Imageupload
