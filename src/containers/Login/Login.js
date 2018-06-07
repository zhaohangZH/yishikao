import React,{Component} from 'react';
import './index.css';
import {Route,NavLink} from 'react-router-dom';
import Sign from './Sign';
import Register from './Register';
class Login extends Component{
    render() {
        return(
            <div className='Login'>
                <div className='Login-box'>
                    <div className='logins'>
                        <span><NavLink to='/login/sign'>登录</NavLink></span>
                        <span><NavLink to='/login/register'>注册</NavLink></span>
                        <div>
                            <Route path="/login/sign" component={Sign}/>
                            <Route path="/login/register" component={Register}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login