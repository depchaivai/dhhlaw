import React,{ useState, useEffect } from 'react'
import styled from 'styled-components';
import API from '../../Service/api'
import { Table,Button,Form, FormGroup, Label, Input, FormText } from "reactstrap";
const AdminCate =  styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding: 30px 50px;
`
const AdminCategory = () => {
    const [list,setList] = useState([]);
    const [isAdd,setIsadd] = useState(true);
    const [isUpdate,setIsupdate] = useState(false);
    const [Cateid,setCateid] = useState(null);
    const [Catename,setCatename] = useState(null);
    const fetchCate = () =>{
        API.get('/category')
        .then(res=>{
            setList([...res.data]);
        })
    }
    useEffect(()=>{
        fetchCate();
    },[]);

    const handleDelete = async (index,id) =>{
        var yes = confirm('bạn có thực sự muốn xóa bản ghi này?');
        console.log(list);
        if(yes===true){
            API.delete('/category/delete/'+id)
            .then(res=>{
                if(res.success){
                    alert('xóa thành công');
                    console.log('xóa thành công');
                }
            });
            const newlist = list;
            newlist.splice(index,1);
            console.log(newlist);
            setList([...newlist]);
        }

    }
    const addCate=()=>{
        const data={name:Catename};
        console.log(data);
        API.post('/category',data);
        fetchCate();
    }

    const handleEdit = (id)=>{
        setIsupdate(true);
        API.put('/category/'+id)
        .then(res=>{
            setCatename(res.data.name);
            setCateid(res.data.id);
        })

    }
    const upDateCate=()=>{
        const id = Cateid;
        const data = {name:Catename}
        API.put('/category/update/'+id,data);
        fetchCate();
        setIsupdate(false);
    }
    return (
        <>
        <AdminCate>
            <h2>Category</h2>
            {isAdd &&(
                <Form>
                <FormGroup>
                  <Label for="category">Category</Label>
                  <Input type="text" name="name" value={Catename} onChange={(e)=>setCatename(e.target.value)} placeholder="Nhập vào Category mới" />
                </FormGroup>
                <Button onClick={isUpdate ? upDateCate : addCate}>Thêm</Button>
              </Form>
            )}
            <Table bordered>
                <thead>
                <tr>
                    <th scope='row'>#id</th>
                    <th>menu</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>

            {list.map((item, index)=>{
                return <tr key={index}>
                    <td>{index}</td>
                    <td>{item.name}</td>
                    <td><Button color="primary" onClick={(e)=>{handleEdit(item.id)}}>edit</Button><Button color="danger" onClick={(e)=>{handleDelete(index,item.id)}}>delete</Button></td>
                </tr>
            })}
            </tbody>
            </Table>
        </AdminCate>
        </>
    )
}

export default AdminCategory
