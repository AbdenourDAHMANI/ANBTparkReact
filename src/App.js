import React from 'react';
import ReactDOM from "react-dom";
import {  Route, Switch,  } from "react-router-dom";
import PageUserInfo from './PageUser/PageUserInfo';
import PageUser from './PageUser/PageUser'



import AdminLayout from "layouts/Admin/Admin.jsx";

import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";




function App() {
  return (
    <div><Switch>
    <Route path="/admin" render={props => <AdminLayout {...props} />} />
   
    <Route path='/' exact component={PageUser} />
         <Route path='/User' component={PageUserInfo} />
  </Switch>
    
    
    
    </div>       
            
         
  );
}

export default App;
