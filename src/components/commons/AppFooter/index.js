import React,{Component} from "react"
import "./index.scss"
import {NavLink} from "react-router-dom"
class AppFooter extends Component{

    renderFooter(){
        let {navs} = this.props;
        return navs.map(item=>(
            <NavLink exact={item.exact} key={item.id} to={{pathname:item.path}}>
                <i className={"fa fa-" + item.icon}></i>
                <span>{item.title}</span>
            </NavLink>
        ))
    }
    render(){
        return (
            <footer className="app-footer">
                {this.renderFooter()}
            </footer>
        )
    }
}
AppFooter.defaultProps = {
    navs:[
        { id: 1, icon: "home", title: "首页" ,path:"/",exact:true},
        { id: 2, icon: "list", title: "列表", path: "/list"},
        { id: 3, icon: "shopping-bag", title: "购物袋", path: "/buycar"},
        { id: 4, icon: "globe", title: "我的", path: "/mine"},
    ]
}
export default AppFooter;