import React, { Component } from 'react'
import Link from 'umi/link';
import router from 'umi/router';
export default class componentName extends Component {
  login = ()=>{
     localStorage.setItem('login','true');
     if(this.props.location.state&&this.props.location.state.from){
        router.push(this.props.location.state.from);
     }
  } 
  render() {
    return (
     <button onClick={this.login}>登录</button>
    )
  }
}