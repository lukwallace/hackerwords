import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import App from './gameComponents/App.jsx';
import Signin from './userComponents/Signin.jsx';
import Signup from './userComponents/Signup.jsx';

class Index extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Signin}/>
        <Route path='/signin' component={Signin}/>
        <Route path='/signup' component={Signup}/>
      </Router> 
    );
  }
};

ReactDOM.render(<Index />, document.getElementById('app'));
