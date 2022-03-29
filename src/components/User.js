import React,{Component} from 'react';
import {connect}from 'react-redux';

class User extends Component{
  render(){
    return(
      <div>{this.props.username}</div>
    )
  }
}
const mapStateToProps =(state)=>{
  return{
    username:state.UserReducer.username
  }
}
export default connect(mapStateToProps,null)(User)
