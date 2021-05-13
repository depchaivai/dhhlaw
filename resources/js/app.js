import React from 'react';
import {  Footer, Navbar, SectionInfo, Simplelayout, Twocardlayout,TexboxSection } from "./components";
import  GlobalStyle from './globalStyle';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Other from './components/page/Other/Other';
import Home from './components/page/Home/Home'
import { Menubar } from "./components/Admin";
import AdminCategory from './components/Admin/AdminCategory/AdminCategory';
import PostsManager from './components/Admin/PostsManager/PostsManager';
import main from './components/main';
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()


function App() {

  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">

      <GlobalStyle/>
      <Router>
         {/* <Menubar/> */}
         <Switch>
         <Route exact path="/" component={main}/>
         <Route exact history={history} path="/admin/dashboard" component={Menubar}/>
         </Switch>
    </Router>


    </div>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
