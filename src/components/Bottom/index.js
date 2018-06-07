import React,{Component} from 'react';
import './index.css';

class Bottom extends Component {
    render() {
        return (
            <footer className="Bottom">
                <div className='service'>
                    <div className='about'>
                        <p className='service-title'>关于我们</p>
                        <a href="#">了解易师考</a>
                        <a href="#">加入易师考</a>
                    </div>
                    <div className='contact'>
                        <p className='service-title'>联系方式</p>
                        <a>客服热线：4001234567（周一至周五9:00-18:00）</a>
                        <a>客服邮箱：kefu@eshikao.com</a>
                        <a href="#root" className='consult' >在线咨询</a>
                    </div>
                    <div className='follow'>
                        <p className='service-title'>关注我们</p>
                        <div className='follow-gz'>
                            <div className='follow-gz-img'>
                                <img src="" alt=""/>
                            </div>
                            <span>微博关注</span>
                        </div>
                        <div className='follow-gz'>
                            <div className='follow-gz-img'>
                                <img src="" alt=""/>
                            </div>
                            <span>微信关注</span>
                        </div>
                    </div>
                </div>
                <div className='copyright'>
                    © 2011-2017 eshikao.com , All Rights Reserved.京ICP备17004480号-1 | 京公网安备110108008330友情链接
                </div>
            </footer>
        );
    }
}

export default Bottom;