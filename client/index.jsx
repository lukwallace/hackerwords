import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './gameComponents/App.jsx';
import Signin from './userComponents/Signin.jsx';
import Signup from './userComponents/Signup.jsx';


class Index extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/home" component={App} />
        <Route path="/" component={Signin} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/logout" component={Signin} />
      </Router>
    );
  } 
}


ReactDOM.render(<Index />, document.getElementById('app'));
