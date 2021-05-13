import styled from 'styled-components';
import API from '../../Service/api'
import { Table,Button,Form, FormGroup, Label, Input, FormText } from "reactstrap";
import React,{ useState,useEffect } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiFillCloseSquare } from "react-icons/ai";

const AdminMenu =  styled.div`
    display:flex;
    justify-content:space-between;
    padding: 30px 50px;
`
const ContainMenu1 = styled.div`
    display:flex;
    flex-direction:column;
    border:1px solid rgba(0,0,0,0.1);
    justify-content:flex-start;
    padding:0;
    box-shadow: 0 8px 6px -6px rgba(0,0,0,0.2);
    position:relative;
`
const ItemLv1 = styled.h4`
    background-color:darkred;
    color: #fff;
    position:relative;
    padding:12px 30px 12px 12px;
    font-size:16px;
    width:100%;
`
const Options = styled(BsThreeDotsVertical)`
    position:absolute;
    top:0;
    right:0;
    height:100%;
    background-color:#fff;
    color:black;
    text-align:center;
    vertical-align:center;
    cursor: pointer;
`
const Popup1 = styled.div`
    display:flex;
    flex-direction:column;
    width:100px;
    box-shadow: -8px 6px 6px rgba(0,0,0,0.2);
    position:absolute;
    z-index:10;
    top:35px;
    right:0;
    background-color:#fff;
`
const Popup1Item = styled.h6`
    width:100%;
    padding:10px;
    margin:0;
    cursor: pointer;
    &:hover{
        background-color:#16AEF4;
    }
`
const ContainPopup2 = styled.div`
        position:absolute;
        top:0;
        left:0;
        background-color: rgba(0,0,0,0.7);
        width:100vw;
        height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
    `
const Popup2 = styled.div`
    box-shadow: 0px 10px 10px rgba(0,0,0,0.2);
    padding:50px;
    width:400px;
    height:300px;
    position:relative;
    background-color:#fff;
`
const Subcontain = styled.ul`
    display:flex;
    flex-direction:column;
    list-style:none;
`
const Submenuitem = styled.li`
    width:100%;
    padding:8px 10px;
    position:relative;
`
const MenuManager = () => {
    const [listMenu,setlistMenu] = useState([]);
    const [addnew,setAddnew] = useState(false);
    const [isUpdate,setUpdate] = useState(false);
    const [popup,setPopup] = useState(-1);
    const [idmenu1,setIdmenu1] = useState(null);
    const [menu1,setMenu1] = useState(null);
    const [parent1,setParent1] = useState(0);
    const fecthMenu = () => {
        API.get('/menu')
        .then(res=>{
            setlistMenu([...res.data]);
        })
    }
    const addmenu=(e)=>{
        const newdata = {
            name: menu1,
            parent:parent1
        }
        API.post('/menu',newdata)
        .then(
            API.put('/menu/isparent/'+parent1)
        );
        setMenu1(null);
        setAddnew(false);
        fecthMenu();
    }
    const updateMenu = (e)=>{
        const id = idmenu1;
        const dataupdate = {
            name:menu1,
            parent:parent1
        }
        API.put('/menu/update/'+id,dataupdate);
        setMenu1(null);
        setUpdate(false);
        fecthMenu();
    }
    useEffect(()=>{
        fecthMenu();
    },[]);
    const handleDelete = (id,index)=>{
        const newlist = listMenu;
        newlist.splice(index,1);
        var yes = confirm('bạn thực sự muốn xóa menu này?');
        if(yes){
            API.delete('menu/delete/'+id);
            setlistMenu([...newlist]);
        }
        setPopup(-1);

    }

    const handleEdit = (id, index)=>{
        API.put('/menu/'+id)
        .then(res=>{
            setIdmenu1(res.data.id);
            setMenu1(res.data.name);
            setParent1(res.data.parent_id);
        })
        setUpdate(true);
        setAddnew(true);
        setPopup(-1);
    }
    const closePopup=(e)=>{
        setMenu1(null);
        setUpdate(false);
        setIdmenu1(null);
        setAddnew(false);

    }
    return (
        <>
        <AdminMenu>
        {listMenu.map((item,index)=>{
           if(item.parent_id===0){
               return <ContainMenu1 key={item.id}>
               <ItemLv1>{item.name}<Options onClick={(e)=>setPopup( popup >= 0 ? -1 : index)}/></ItemLv1>
                <Subcontain>
                {listMenu.map((item3,i3)=>{
                    return item3.parent_id===item.id&&(
                        <Submenuitem key={item3.id}>{item3.name}<Options onClick={(e)=>setPopup( popup >= 0 ? -1 : i3)}/>
                        {popup===i3 &&(<Popup1><Popup1Item onClick={(e)=>handleEdit(item3.id,i3)}>Sửa</Popup1Item><Popup1Item onClick={(e)=>handleDelete(item3.id,i3)}>Xóa</Popup1Item></Popup1>)}
                        </Submenuitem>


                    )
                })}
                </Subcontain>
                {popup===index &&(<Popup1><Popup1Item onClick={(e)=>handleEdit(item.id,index)}>Sửa</Popup1Item><Popup1Item onClick={(e)=>handleDelete(item.id,index)}>Xóa</Popup1Item></Popup1>)}
               </ContainMenu1>

           }
        })}
        {
            addnew &&(
                <ContainPopup2>
                <Popup2>
                    <AiFillCloseSquare onClick={closePopup} style={{fontSize:'48px',position:'absolute',top:0,right:0}}/>
                    <Form>
      <FormGroup>

        <Label for="menu1">Menu mới</Label>
        <Input type="text" value={menu1 || ''} onChange={(e)=>setMenu1(e.target.value)} placeholder="Nhập vào tên menu" />
      </FormGroup>
          <FormGroup>
          <Label for="Parent">Là menu con của</Label>
        <Input type="select" onChange={(e)=>setParent1(e.target.value)}>
            <option value='0'>MENU GỐC</option>
          {listMenu.map((item2,i2)=>{
              if(item2.id !== idmenu1 && item2.parent_id === 0){
                  return  item2.id===parent1 ? (<option key={i2} selected value={item2.id}>{item2.name}</option>) : (<option key={i2} value={item2.id}>{item2.name}</option>)
              }
          })}
        </Input>
        </FormGroup>
      <Button onClick={ isUpdate ? updateMenu : addmenu}>Submit</Button>
    </Form>
                </Popup2>
                </ContainPopup2>
            )
        }
        <Button onClick={(e)=>{setAddnew(!addnew)}}>+</Button>
        </AdminMenu>
        </>
    )
}

export default MenuManager

