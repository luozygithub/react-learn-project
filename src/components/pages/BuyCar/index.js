import React,{Component} from "react"
import "./index.scss"
class BuyCar extends Component{
    componentWillReceiveProps(){
        console.log("bucar",this);
      }
    render(){
        console.log("bucar",this);
        return (
            <div>
                BuyCar
            </div>
        )
    }
}
export default BuyCar;