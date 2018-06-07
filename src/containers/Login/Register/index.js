import React,{Component} from 'react';
import './index.css';
import cwicon from '../../../images/cwicon.png';
import gban from '../../../images/gban.png';

class Register extends Component {
    constructor () {
        super();
        this.state = {
            phone: '',
            Password:'',
            Format:'',
            Veri:'',
            Verification:''
        }
    }
    handlePhoneChange(event){
            this.setState({
                phone:event.target.value.replace(/[^\d]/g,'')
            })
    }
    handlePasswordChange(event){
        this.setState({
            Password:event.target.value
        })
    }
    handleVeriChange(event){
        this.setState({
            Veri:event.target.value.replace(/[^\d]/g,'')
        })
    }
    handleSjtbChange(){
        this.setState({
            phone:'',
            Format:''
        })
    }
    handlePhoneBlur(){
        this.state.phone.match(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/)?this.setState({Format:''}):this.setState({Format:'请输入有效的手机号码'})

    }
    render(){
        return(
            <div className='Register'>
                <input value={this.state.phone} placeholder='请输入手机号码' onChange={this.handlePhoneChange.bind(this)} onBlur={this.handlePhoneBlur.bind(this)}/>
                {this.state.phone?<i className='gban' onClick={this.handleSjtbChange.bind(this)}><img src={gban} alt=""/></i>:null}
                {this.state.Format?<i className='cwicon'><img src={cwicon}/></i>:null}
                <span className='zh-prompt'>{this.state.Format}</span>
                <input type="string"  value={this.state.Veri} onChange={this.handleVeriChange.bind(this)} placeholder='请短信验证码'/>
                <span className='getveri'>获取验证码</span>
                <span className='zh-prompt'>{this.state.Verification}</span>
                <input type='password' value={this.state.Password} placeholder='请设置密码6-12位数字或字母' onChange={this.handlePasswordChange.bind(this)}/>
                <a href="#">立即注册</a>
                <span className='forgetmm'><a href="">已有账号，马上登录</a></span>
            </div>
        )
    }
}
export default Register