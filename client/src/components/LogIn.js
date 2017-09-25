import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import { setAxiosHeaders } from '../util';

class LogIn extends Component {
 constructor(){
   super();
   this.state = {
       email: '',
       password: '',
       redirect: false
   }
 }

_signIn = async (e) => {
  e.preventDefault();
  const payload = {
    email: this.state.email,
    password: this.state.password,
  }
  const response = await axios.post('/auth/sign_in', payload);
  setAxiosHeaders(response.headers);
  this.setState({redirect: true})
}

 _handleChange = (e) => {
   const newState = {...this.state};
   newState[e.target.name] = e.target.value;
   this.setState(newState);
 }

 render() {
   if (this.state.redirect){
     return <Redirect to="/" />
   }
   return (
     <div className="sign-in-container">
       <form onSubmit={this._signIn}>
         <div className="sign-in-form">
         <div>
           <label htmlFor="email">E-mail: </label>
           <input onChange={this._handleChange} type="text" name="email" value={this.state.email} />
         </div>
         <div>
           <label htmlFor="password">Password: </label>
           <input onChange={this._handleChange} type="text" name="password" value={this.state.password} />
         </div>
         <button className="form-button">Sign In</button>
         </div>
       </form>
     </div>
   );
 }
}

export default LogIn;