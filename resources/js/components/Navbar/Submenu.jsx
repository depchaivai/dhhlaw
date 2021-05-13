import React, { useState } from 'react';
import { SubMenu, ItemSub, NavLinks } from "./Navbar.elements";

const Submenu = (props) => {
    const [click,setClick] = useState(false);
    const parent = props.parent;
    const menu = props.listmenu;
    const handleClick = ()=>{
        setClick(true);
    }
    return (
        <SubMenu click={click}>
            {menu.map((Item,Index)=>{
                if(Item.parent_id===parent)
                return(
                    <ItemSub key={Index}>
                        <NavLinks to={'/page/'+Item.e_name} onClick={handleClick}>
                            {Item.name}
                        </NavLinks>
                    </ItemSub>
                )
            })}
        </SubMenu>
    )
}

export default Submenu

