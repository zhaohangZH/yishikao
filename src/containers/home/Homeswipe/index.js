import React,{Component} from "react";
import Reactswipe from "react-swipe";
import './css.css';
class Homeswipe extends Component{
    render(){
        const swipelists=this.props.users;
        return(
            <Reactswipe className="carousel" swipeOptions={{continuous: true,auto:3000}}>
                {swipelists.map((item,index)=><div><img src={item.swipelist} alt=""/></div>)}
            </Reactswipe>
        )
    }
}
export default Homeswipe