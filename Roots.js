import React from 'react';
import { BrowserRouter as Router, Switch, Redirect,Route } from 'react-router-dom';
import Async from 'react-code-splitting';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = props => (
    <Async load={import('./components/Layout')} componentProps={props} />
  );
  
 
  const supportsHistory = 'pushState' in window.history;
  const Roots = props => {
    return (
      <Router forceRefresh={!supportsHistory}>
        <Switch>  
        <Redirect exact from="/" to="/Layout" />                                    
             <Route  exact  path="/Layout" component={(Layout)}/>                                       
        </Switch>
    </Router>
  );
};

export default Roots;
