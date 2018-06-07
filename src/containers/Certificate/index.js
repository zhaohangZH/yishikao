import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './index.css';
// import Certificatetype from './Certificatetype';
import Certificateclass from './Certificateclass';
import Certificatesubject from './Certificatesubject';
class Certificate extends Component {
    constructor(){
        super()
        this.state={
            Choicetype:['面试','笔试','3'],
            Choiceclass:['1','2','3'],
            Choicesubject:['1','2','3','4'],
            typekey:0,
            classkey:0,
            subjectkey:0
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
            </div>
        );
    }
}

export default Certificate;