import React,{Component} from 'react';
import Homeswipe from './Homeswipe';
import Qualified from './Qualified';
import banner from '../../images/banner.png';
import banner2 from '../../images/banner2.png';
import banner3 from '../../images/banner3.png';
import './index.css';
class Home extends Component{
    constructor(){
        super()
    }
    render(){
        const users = [
            {swipelist:banner},
            {swipelist:banner2},
            {swipelist:banner3}
        ]
        return(
            <div className='Home'>
                <Homeswipe users={users}/>
                <Qualified/>
                <div className="home-advert">
                    <div>
                        <div className="home-advert-erwm">
                            <img src="" alt=""/>
                        </div>
                        <span>
                            扫一扫二维码<br/>
                            下载易师考APP
                        </span>
                    </div>

                </div>
            </div>
        )
    }
}
export default Home;
