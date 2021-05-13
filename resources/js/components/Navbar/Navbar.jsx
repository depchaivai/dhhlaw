import React, { useEffect, useState } from 'react';
import { FaTimes, FaBars, FaAngleDown } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import Submenu from './Submenu';
import { Button } from "../../globalStyle";
import API from "../Service/api";
import { withRouter } from 'react-router';
import {

    Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemButton,
    NavBtnLinks
} from "./Navbar.elements";
import { useHistory,useLocation } from 'react-router';
import Userpopup from './Userpopup';
import SearchBox from './SearchBox';
import { useQuery } from 'react-query';
import { getAllmenu } from '../../service/menuAPI';
import { useSelector } from 'react-redux';



const Navbar = (props) => {
    const location =useLocation();
    const thisPath = location.pathname;
    const history = useHistory();
    const menulList = useSelector(({menu})=>menu);
    const [Click, setClick] = useState(false);
    const [Dropdown, setDropdown] = useState(-1);
    const [button, setButton] = useState(true);
    const [navBarS, setNabar] = useState(true);
    const [nBR, setNBR] = useState(true);
    const [User,setUser] = useState(props.User);
    useEffect(() => {
        if(thisPath==='/'){
            setNBR(true);
            return

        }
        if(thisPath!=='/'){
            setNBR(false);
        }
    }, [thisPath]);

    const handleClick = () => {
        setClick(!Click);
    }
    const onMouseEnter = (index) => {
        if (window.innerWidth < 960) {
            setDropdown(-1);
        } else {
            setDropdown(index);
        }
    }
    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(-1);
        } else {
            setDropdown(-1);
        }
    }
    const shownavbar = () => {

        if (window.scrollY >= 80) {
            setNabar(true);
            setNBR(false);
            return
        }
        if((window.scrollY < 80) && (thisPath==="/")){
            setNabar(false);
            return
        }
    }
    const redirectpage = () => {
        history.push('/login');
    }
    const redirectToDashBoard = () => {
        history.push('/admin/dashboard');
    }
    const logoutuser = () => {
        localStorage.removeItem('token');
        setUser(null);
    }
    window.addEventListener('scroll', shownavbar);
    return (

            <IconContext.Provider value={{ color: '#fff' }}>

                <Nav nBR={nBR} navBarS={navBarS}>
                    <NavbarContainer>
                        <NavLogo to="/">
                            <NavIcon />

                    DHHLAW

                </NavLogo>
                <SearchBox/>
                        <MobileIcon onClick={handleClick}>
                            {Click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                        {menulList.status === "success" &&(
                        <NavMenu onClick={handleClick} Click={Click}>
                            {menulList.MenuList.map((item, index) => {
                                if (item.parent_id === 0) {
                                    return <NavItem key={index} onMouseEnter={()=>onMouseEnter(index)} onMouseLeave={onMouseLeave}>
                                        <NavLinks to={'/page/'+item.e_name}>
                                            {item.name}
                                            {item.is_parent === 1 &&<FaAngleDown style={{marginLeft:'10px'}}/>}
                                        </NavLinks>
                                        {Dropdown===index &&<Submenu listmenu={menulList.MenuList} parent={item.id}/>}
                                    </NavItem>

                                }

                            })}
                            <NavItemButton>
                                {User!==null ? (
                                    // <h1>0k</h1>
                                    <Userpopup Logout={logoutuser} DashBoard={redirectToDashBoard} Uname = {User.name}/>

                                ) : (

                                    <Button primary onClick={redirectpage}>SIGN-UP</Button>

                                )}
                            </NavItemButton>
                        </NavMenu>
                        )}
                    </NavbarContainer>
                </Nav>

            </IconContext.Provider>

    )
}

export default withRouter(Navbar)
