import React,{Component} from 'react';
import User from './User';
import {Switch, NavLink, Route} from 'react-router-dom';

class App extends Component{
  render(){
    return(
      <div>
      <NavLink to="/">User</NavLink>
        <Switch>
          <Route path="/" component={User} />
        </Switch>
      </div>
    )
  }
}

export default App;
