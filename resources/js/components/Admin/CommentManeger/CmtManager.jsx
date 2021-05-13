import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Button, Form, FormGroup, Label, Input, FormText, Table } from 'reactstrap';
import API from '../../Service/api'

const CmtManager = () => {
    const { id } = useParams();
    const [lisCmt,setList] = useState([]);
    const fetchCmt = () =>{
        API.get('/post/comment/'+id)
        .then(res=>{
            setList(res.data);
        })
    }
    const deleteCmt = (d_id,i)=>{
        let yes = confirm('bạn muốn xó comment này?');
        if(yes){
            API.delete('/comment/delete/'+d_id);
            const newList = lisCmt;
            newList.splice(i,1);
            setList([...newList]);
        }

    }
    useEffect(()=>{
        fetchCmt();
    },[])
    return (
        <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>name</th>
                        <th>email</th>
                        <th>content</th>
                    </tr>
                </thead>
                <tbody>
                    {lisCmt.map((item, index) => {
                        return <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.content}</td>
                            <td><Button color="primary">Liên hệ</Button>{' '}
                                <Button color="secondary" onClick={(e)=>deleteCmt(item.id,index)}>xóa</Button></td>
                        </tr>
                    })}
                </tbody>
            </Table>
    )
}

export default CmtManager
