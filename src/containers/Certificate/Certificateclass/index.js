import React,{Component} from 'react';

class Certificateclass extends Component{
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
                {this.props.Choiceclass.map((arr,i)=>{
                    return (<li className={this.state.classkey===i?'active':""} key={i} onClick={this.handleClassClick.bind(this,i)}>{arr}</li>)
                })}
            </ul>
        )
    }
}
export default Certificateclass;


