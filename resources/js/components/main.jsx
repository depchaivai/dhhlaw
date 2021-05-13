import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch, } from "react-router-dom";
import { Footer, Navbar } from "./";
import { Menubar } from "./Admin";
import Login from './Login/Login';
import Home from './page/Home/Home';
import Other from './page/Other/Other';
import SearchResult from './SearchReSult/SearchResult';
import API from './Service/api';
import { ReactQueryDevtools } from 'react-query/devtools'
import { useDispatch } from 'react-redux';
import { fetchMenu } from '../features/Menu/menuSlice';

const main = () => {
    const dispatch = useDispatch();
    const [User,setUser] = useState(null);
    const checlLogin = () => {
            const config = {
                headers:{
                    Authorization: 'Bearer '+localStorage.getItem('token'),
                }

            }

            API.post('/auth/me',null,config)
            .then(res=>{
                setUser(res.data);
            })
            .catch(err=>{
                console.log(err);
            })

    }
    useEffect(()=>{
        checlLogin();
        dispatch(fetchMenu());
    },[])
    return (
        <>
        <Router>
            <Switch>
                <Route path="/admin/dashboard">
                    <Menubar />
                </Route>
                <Route exact path="/login" component={Login} />
                <>
                    <Navbar User = {User}/>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/page/:other" component={(props) => <Other {...props} key={window.location.pathname} />} />
                    <Route exact path="/page/:other/:post_detail" component={(props) => <Other {...props} key={window.location.pathname} />} />
                    <Route exact path="/search/:searchKey" component={SearchResult}/>

                    <Footer />
                </>
            </Switch>
            </Router>
        </>
    )
}

export default main
