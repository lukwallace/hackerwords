import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './gameComponents/App.jsx';
import Signin from './userComponents/Signin.jsx';
import Signup from './userComponents/Signup.jsx';
import Lobby from './matchComponents/Lobby.jsx';


class Index extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Lobby} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/solo" component={App} />
        <Route path="/game/:id" component={App} />
      </Router>
    );
  }
}


ReactDOM.render(<Index />, document.getElementById('app'));
