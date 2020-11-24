import React, { Component } from 'react';
import Page from './Page';
import c from './App.css';
let name;
class PageUserInfo extends Component{
  constructor(){
    super();

   
  }
  componentWillMount(){
    name=( decodeURIComponent(new URLSearchParams(this.props.location.search)))
    .replace('=','')
    }
  
  
render()
{
return(<div>
        
        <img alt='' src='images/background.png' className={c.backgroun} />
        <center>
          <div className={c.glad} >
            <div className={c.log}>
            </div>

            <Page name={name}/>
           
          </div>
        </center>
      </div>
      )

}

}

export default PageUserInfo;