import React from 'react'
import {Switch, Route} from 'react-router-dom';
//Components
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import Browse from './Components/Browse/Browse';
import DetailedBrowse from './Components/Browse/DetailedBrowse';
import BrowseCategory from './Components/Browse/BrowseCategory';
import Login from './Components/Login/Login';
import CreateArticle from './Components/CreateArticle/CreateArticle';
import SingleArticle from './Components/Browse/SingleArticle';
import Admin from './Components/Admin/AdminDashboard';
import Random from './Components/Random/Random'

export default <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/register' component={Register} />
    <Route path='/login' component={Login} />
    <Route exact path='/browse' component={Browse} />
    <Route path='/browseAll' component={DetailedBrowse} />
    <Route path='/browse/:category' component={BrowseCategory} />
    <Route path='/create' component={CreateArticle} />
    <Route path='/article/:id' component={SingleArticle} />
    <Route path='/admin' component={Admin} />
    <Route path='/:random' component={Random} />

</Switch>