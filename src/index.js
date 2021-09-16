import React from 'react';
import registration from './registration';
import login from './login';
import profile from './profile';
import editProfile from './editProfile'
import changePassword from './changePassword'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactDOM from 'react-dom';
ReactDOM.render(
  <Router>
    <Switch>
          
      <Route  path="/registration" component={registration} /> 
      <Route  path="/login" component={login} /> 
      <Route  path="/profile" component={profile} /> 
      <Route  path="/editProfile" component={editProfile} /> 
      <Route  path="/changePassword" component={changePassword} /> 
      
    </Switch> 
  </Router>
  , document.getElementById('root'));

// If you want to start measuring performance in your app, pass a functioni
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

