import React, { useEffect, useState } from 'react'
import { IoMdArrowDropup } from "react-icons/io";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FaHome, FaDesktop,FaAngleDown } from 'react-icons/fa';
import API from '../Service/api'
import {
    Menuslide,
    Parentmenu,
    MenuIcon,
    MenuName,
    SlideBarLink
} from "./SlidebarNav.elements";
import Subsidebar from './Subsidebar'
import { useSelector } from 'react-redux';

const SlidebarNav = () => {
    const listMenu = useSelector(({menu})=>menu);
    const [showSubsidebar, setShowub] = useState(-1);
    useEffect(() => {
        Aos.init({ duration: 500 })
    }, [])
    const menuClick=(e,index)=>{
        e.stopPropagation();
        if(showSubsidebar>0){
            setShowub(-1);
            return
        }
        setShowub(index);
    }
    return (
        <>
            <Menuslide data-aos="fade-up">
                <SlideBarLink to='/'>
                    <Parentmenu>
                        <MenuIcon><FaHome /></MenuIcon>
                        <MenuName>Home</MenuName>
                    </Parentmenu>
                </SlideBarLink>
                {listMenu.MenuList.map((item, index) => {
                    if (item.parent_id === 0) {

                        return <div key={index}><Parentmenu >
                                <MenuIcon><FaDesktop style={{fontSize:'12px'}}/></MenuIcon>
                                <SlideBarLink  to={'/page/' + item.e_name}>
                                <MenuName>{item.name}</MenuName>
                                </SlideBarLink>
                                {item.is_parent === 1 &&<MenuIcon onClick={(e)=>menuClick(e,index)} style={{justifySelf:'end'}}><FaAngleDown /></MenuIcon>}
                            </Parentmenu>
                            {showSubsidebar===index &&<Subsidebar listnav={listMenu} pr={item.id}/>}</div>

                    }

                })}
            </Menuslide>
        </>
    )
}

export default SlidebarNav
