import React, { Component } from 'react';
import aze from './Login.css';
import {Route} from 'react-router-dom';
import PageUserInfo from '../PageUser/PageUserInfo';


import axios from 'axios';
const instance = axios.create({
  baseURL: 'http://localhost:8000/',
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  
  }
});
var currentLocation = window.location.pathname;
let st= false;
class Login extends Component {

  clicke = () => {

    

    let body = {
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,

    };

    instance.post('user/login', body)
      .then((response) =>{
     
          console.log(response)
          

     
        this.props.Clicked(body.email);
      } 
      );   
     
  }
 

  render() {



    return (<div>
      <center> <h1 className={aze.titre}>
        Login
                </h1>
        <br></br>
        <input className={aze.username} placeholder='Username...' type='text' id='email' name='email' />
        <input className={aze.username} placeholder='Password...' type='password' id='password' name='password' />
        <button className={aze.btn} onClick={this.clicke}>Sign in<i className="fa fa-arrow-right fa-lg"></i> </button>


        <span className={aze.dot}></span>
        <span className={aze.dot2}></span>
        <span className={aze.dot3}></span> </center>
    </div>
    )
  }


}
export default Login;