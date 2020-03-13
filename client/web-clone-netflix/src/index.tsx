import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Login from "./pages/Login";
import ProfileManagement from "./pages/ProfileManagement";
import Home from './pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App}/>
            <Route path="/login" exact={true} component={Login}/>
            <Route path="/profiles" exact={true} component={ProfileManagement}/>
            <Route path="/home" exact={true} component={Home}/>
        </Switch>
    </BrowserRouter>
    
    , document.getElementById('root'));
