import React from 'react';
import { FaMobileAlt } from 'react-icons/fa';
import { Subsidebarcontain,Subitemsidebar } from "./SlidebarNav.elements";

const Subsidebar = (props) => {
    const listNav = props.listnav;
    const parent = props.pr;
    return (
        <Subsidebarcontain>
            {listNav.map((item,index)=>{
                if(item.parent_id===parent){
                    return <Subitemsidebar key={index} to={'/page/'+item.e_name}><FaMobileAlt style={{marginRight:'10px',fontSize:'10px'}}/>{item.name}</Subitemsidebar>
                }
            })}
        </Subsidebarcontain>
    )
}

export default Subsidebar
