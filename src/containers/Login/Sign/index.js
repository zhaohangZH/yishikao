import React,{Component} from 'react';
import './index.css';
import cwicon from '../../../images/cwicon.png';
import gban from '../../../images/gban.png';
import sjtb from '../../../images/sjtb.png';
import mmtb from '../../../images/mmtb.png';

class Sign extends Component {
    constructor () {
        super();
        this.state = {
            phone: '',
            Password:'',
            format:''
        }
    }
    handlePhoneChange(event){
        this.setState({
            phone:event.target.value
        })
    }
    handlePasswordChange(event){
        this.setState({
            Password:event.target.value
        })
    }
    handleSjtbChange(){
        this.setState({
            phone:'',
            format:''
        })
    }
    handlePhoneBlur(){
        this.state.phone.match(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/)?this.setState({format:''}):this.setState({format:'请输入有效的手机号码'})
    }
    render(){
        return(
            <div className='Sign'>
                <i className='sjtb'><img src={sjtb} alt=""/></i>
                <input value={this.state.phone} placeholder='请输入手机号码' onChange={this.handlePhoneChange.bind(this)} onBlur={this.handlePhoneBlur.bind(this)}/>
                {this.state.phone?<i className='gban' onClick={this.handleSjtbChange.bind(this)}><img src={gban} alt=""/></i>:null}
                {this.state.format?<i className='cwicon'><img src={cwicon}/></i>:null}
                <span className='zh-prompt'>{this.state.format}</span>
                <i className='mmtb'><img src={mmtb} alt=""/></i>
                <input type='password' value={this.state.Password} placeholder='请输入密码' onChange={this.handlePasswordChange.bind(this)}/>
                <span className='forgetmm'><a href="">忘记密码?</a></span>
                <a href="#">立即登录</a>
            </div>
        )
    }
}
export default Sign