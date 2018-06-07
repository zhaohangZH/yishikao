import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Router,Route} from 'react-router-dom';
import './index.css';
import App from './containers/App';
import Recruit from "./containers/Recruit";
import Home from "./containers/home";
import Certificate from "./containers/Certificate";
import Notice from "./containers/Notice";
import Download from "./containers/Download";
import Login from "./containers/Login/Login";
import Register from "./containers/Login/Register";
import Sign from "./containers/Login/Sign";

ReactDOM.render(<HashRouter>
    <App>
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/certificate" component={Certificate}/>
        <Route exact path="/recruit" component={Recruit}/>
        <Route exact path="/notice" component={Notice}/>
        <Route exact path="/download" component={Download}/>
        <Route path="/login" component={Login}/>
    </App>
</HashRouter>, document.querySelector('#root'));
