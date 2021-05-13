import React from 'react'
import { Input } from 'reactstrap';
import { useSelector } from 'react-redux';

const MenuSelect = (props) => {
    const MenuList = useSelector(({menu}) => menu.MenuList );
    return (<Input type="select" onChange={props.onChange} value={props.slmn}>
            <option></option>
            {MenuList.map((ik,i)=>{
                return <option key={i} value={ik.e_name}>{ik.name}</option>
            })}
            </Input>

    )


}

export default MenuSelect
