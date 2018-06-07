import React,{Component} from 'react';

class Certificatesubject extends Component{
    constructor(){
        super()
        this.state={
            classkey:0
        }
    }
    handleClassClick(key,event){
        this.setState({classkey:key});
    }
    render(){
        return(
            <ul className='Certificate-ul'>
                {this.props.Choicesubject.map((arr,i)=>{
                    return (<li className={this.state.classkey===i?'active':""} key={i} onClick={this.handleClassClick.bind(this,i)}>{arr}</li>)
                })}
            </ul>
        )
    }
}
export default Certificatesubject;


