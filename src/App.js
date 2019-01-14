import React, { Component } from 'react';
import {Route, Switch, withRouter} from "react-router-dom"
import AppFooter from "./components/commons/AppFooter"

import {
  BuyCar,
  Home,
  Mine,
  List
} from "./components/pages"

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      hasFooter:true
    }

    
  }
  componentWillReceiveProps(props){//必须要用传参 过来的 this.state.props滞后一个状态
    let {pathname}=props.location;
    if(pathname==='/mine'){
      this.setState({
        hasFooter:false
      })
    }else{
      this.setState({
        hasFooter:true
      })
    }
  }
 
  renderRoutes(){
    let {routes} = this.props;
    return (
      <Switch>
        {
          routes.map(item=>
            <Route key={item.id} path={item.path} component={item.component} exact={item.exact}/>
          )
        }
      </Switch>
     
    )
  }
  render() {
    
    return (
      <div className="App">
        {/* <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/List" component={List}></Route>
          <Route path="/Mine" component={Mine}></Route>

        
        </Switch> */}
          {this.renderRoutes()}
          {!this.state.hasFooter||<AppFooter/>}
      </div>
    );
  }
}


App.defaultProps = {
  routes: [
    { id: 1, path: "/", component: Home, exact: true },
    { id: 2, path: "/list", component: List, exact: false },
    { id: 3, path: "/buycar", component: BuyCar, exact: false },
    { id: 4, path: "/mine", component: Mine, exact: false}
  ]
}
export default withRouter(App);