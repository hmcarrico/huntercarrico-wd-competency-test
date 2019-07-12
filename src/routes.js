import React from 'react'
import {Switch, Route} from 'react-router-dom';
//Components
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import Browse from './Components/Browse/Browse';
import Login from './Components/Login/Login';
import CreateArticle from './Components/CreateArticle/CreateArticle';
import SingleArticle from './Components/Browse/SingleArticle';

export default <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/register' component={Register} />
    <Route path='/login' component={Login} />
    <Route path='/browse' component={Browse} />
    <Route path='/create' component={CreateArticle} />
    <Route path='/article/:id' component={SingleArticle} />
</Switch>