import React, { useEffect } from 'react'
import AdminCategory from '../AdminCategory/AdminCategory';
import MenuManager from '../Menumanage/MenuManager';
import PostsManager from '../PostsManager/PostsManager';
import {
    Adminsite,
    Adminhead,
    Adminmenu,
    Adminbody,
    Adminlink,
    AdminItemmenu
 } from "./Menubar.element";
 import { useRouteMatch, withRouter } from 'react-router';
 import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CmtManager from '../CommentManeger/CmtManager';
import Imageupload from '../ImageUpload/Imageupload';
import { useDispatch } from 'react-redux';
import { fetchImage } from '../../../features/image/imageSlice'
import { fetchMenu } from '../../../features/Menu/menuSlice'

const Menubar = () => {
    const dispatch = useDispatch();
    const {path,url} = useRouteMatch();
    useEffect(() => {
        dispatch(fetchImage());
        dispatch(fetchMenu());
    }, [])
    return (
        <>
            <Adminsite>
                <Adminmenu>
                    <Adminlink to={url+'/menu'}>
                        <AdminItemmenu>
                            QUẢN LÝ MENU
                        </AdminItemmenu>
                    </Adminlink>
                    <Adminlink to={url+'/post'}>
                        <AdminItemmenu>
                            QUẢN LÝ BÀI VIẾT
                        </AdminItemmenu>
                    </Adminlink>
                    <Adminlink to={url+'/category'}>
                        <AdminItemmenu>
                            QUẢN LÝ CATEGORY
                        </AdminItemmenu>
                    </Adminlink>
                    <Adminlink to={url+'/uploadimg'}>
                        <AdminItemmenu>
                            upload ảnh
                        </AdminItemmenu>
                    </Adminlink>
                </Adminmenu>
                <Adminbody>
                        <Adminhead></Adminhead>
                        <Switch>
                            <Route exact path={path+'/menu'} component={MenuManager}/>
                            <Route exact path={path+'/category'} component={AdminCategory}/>
                            <Route exact path={path+'/post'} component={PostsManager}/>
                            <Route exact path={path+'/post/comment/:id'} component={CmtManager}/>
                            <Route exact path={path+'/uploadimg'} component={Imageupload}/>
                        </Switch>
                </Adminbody>

            </Adminsite>
        </>
    )
}

export default withRouter(Menubar)
