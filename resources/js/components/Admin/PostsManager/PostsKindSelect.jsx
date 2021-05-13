import React, { useEffect, useState } from 'react'
import API from '../../Service/api'
import { Input } from 'reactstrap';

const PostsKindSelect = (props) => {
    const [listkind,setListkind] = useState([]);
    const fecthKind=() =>{
        API.get('/kindposts')
        .then(res=>{
            setListkind([...res.data]);
        })
    }
    useEffect(()=>{
        fecthKind();
    },[])
    return (<Input type="select" onChange={props.onChange} value={props.sltd}>
            <option></option>
            {listkind.map((ik,i)=>{
                return <option key={i} value={ik.id}>{ik.name}</option>
            })}
            </Input>

    )


}

export default PostsKindSelect
