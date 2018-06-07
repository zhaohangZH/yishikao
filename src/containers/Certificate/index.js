import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import jtup01 from '../../images/jtup01.png';
import jtup02 from '../../images/jtup02.png';
import jtdow01 from '../../images/jtdow01.png';
import jtdow02 from '../../images/jtdow02.png';
import './index.css';
class Certificate extends Component {
    constructor(){
        super()
        this.state={
            Choicetype:['面试','笔试'],
            Choiceclass:['1','2','3'],
            Choicesubject:['1','2','3','4'],
            typekey:0,
            classkey:0,
            subjectkey:0,
            sortClass:1,//排序激活状态
            sortRqJt:true,//人气排序
            sortPriceJt:true//价格排序
        }
    }
    handleTypeClick(key,event){
        this.setState({typekey:key});
        console.log(key);
    }
    handleClassClick(key,event){
        this.setState({classkey:key});
        console.log(key);
    }
    handleSubjectClick(key,event){
        this.setState({subjectkey:key});
        console.log(key);
    }
    //人气排序
    handleRqClick(){
        this.setState({
            sortClass:1,
            sortRqJt:!this.state.sortRqJt
        })
    }
    //价格排序
    handlePriceClick(){
        this.setState({
            sortClass:0,
            sortPriceJt:!this.state.sortPriceJt
        })
    }
    render() {
        return (
            <div className="Certificate">
                <div className="Certificate-box">
                    <div className="Certificate-type">
                        <div className="Certificate-choice">选择类别:</div>
                        <ul className='Certificate-ul'>
                            {this.state.Choicetype.map((arr,i)=>{
                                return (<li className={this.state.typekey===i?'active':""} key={i} onClick={this.handleTypeClick.bind(this,i)}>{arr}</li>)
                            })}
                        </ul>
                    </div>
                    <div className="Certificate-type">
                        <div className="Certificate-choice">选择年级:</div>
                        <ul className='Certificate-ul'>
                            {this.state.Choiceclass.map((arr,i)=>{
                                return (<li className={this.state.classkey===i?'active':""} key={i} onClick={this.handleClassClick.bind(this,i)}>{arr}</li>)
                            })}
                        </ul>
                    </div>
                    <div className="Certificate-type">
                        <div className="Certificate-choice">选择学科:</div>
                        <ul className='Certificate-ul'>
                            {this.state.Choicesubject.map((arr,i)=>{
                                return (<li className={this.state.subjectkey===i?'active':""} key={i} onClick={this.handleSubjectClick.bind(this,i)}>{arr}</li>)
                            })}
                        </ul>
                    </div>
                </div>
                <div className="sort-content">
                    <div className="sort-text">
                        <span>全部</span>
                        <ul>
                            <li className={this.state.sortClass?'active':''} onClick={this.handleRqClick.bind(this)}>人气优先{this.state.sortClass?(this.state.sortRqJt?<img src={jtup01} alt=""/>:<img src={jtdow01} alt=""/>):((this.state.sortRqJt?<img src={jtup02} alt=""/>:<img src={jtdow02} alt=""/>))}</li>
                            <li className={this.state.sortClass?'':'active'} onClick={this.handlePriceClick.bind(this)}>价格优先{this.state.sortClass?(this.state.sortPriceJt?<img src={jtup02} alt=""/>:<img src={jtdow02} alt=""/>):((this.state.sortPriceJt?<img src={jtup01} alt=""/>:<img src={jtdow01} alt=""/>))}</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Certificate;