import React, { Component } from 'react';
import './index.css';
import {NavLink} from "react-router-dom";
import Logo from '../../images/logo.png';
class header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-content">
                    <a className="header-logo"><img src={Logo} alt=""/></a>
                    <ul>
                        <li><NavLink to="/home">首页</NavLink></li>
                        <li><NavLink to="/certificate">教师资格证</NavLink></li>
                        <li><NavLink to="/recruit">教师招聘</NavLink></li>
                        <li><NavLink to="/notice">招考公告</NavLink></li>
                        <li><NavLink to="/download">APP下载</NavLink></li>
                    </ul>
                    <div className="header-login">
                        <NavLink to="/login/sign">登录</NavLink>
                        <NavLink to="/login/register">注册</NavLink>
                    </div>
                </div>

            </div>
        );
    }
}

export default header;