import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Page from './Page';
import Login from '../Login/Login'
import c from './App.css';



class PageUser extends Component {
 

  constructor() {
    super();


  }
 
 
  ChangeMethod = (texat) => {
    let name= encodeURIComponent(texat);
    
    this.props.history.push({pathname : '/User',search: name} )
   
    
    
  }
  render() {

    
    return (
      <div>
        
        <img alt='' src='images/background.png' className={c.backgroun} />
        <center>
          <div className={c.glad} >
            <div className={c.log}>
            </div>

            {  <Login Clicked={this.ChangeMethod} /> }
           
          </div>
        </center>
      </div>
    )




  }
}
export default PageUser;