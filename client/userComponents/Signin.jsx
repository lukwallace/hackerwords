import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, withRouter } from 'react-router'
var util = require('../util.js');

class Signin extends React.Component {
  constructor(props) {
    super(props);

    util.signOut();
  }

  submitFn () {
    var username = $('#username').val();
    var password= $('#password').val();
    $('#username').val("");
    $('#password').val("");

    var context = this;
    $.post({
      url: '/api/signin',
      dataType: 'json',
      data: {username: username, password: password},
      success: function (data) {
        console.log('Success!!!!!', data);
        util.storeToken(data);
        context.props.router.push('/home');

      },
      error: function (error) {
        console.error(error);
      }
    });
  }

  render() {
    return (
      <div>
      HackerWords Signin
        <br/>
        <label>Username </label>
        <input type='text' id='username' name='username'></input>
        <label> Password </label>
        <input type='password'id='password' name='password'></input>
        <input type="button" id='signin' value="Signin" onClick={this.submitFn.bind(this)}></input>
        <br/>
        Don't have an account?
        <Link to='/signup'> Sign up here</Link>
      </div>
    );
  }
}

export default withRouter(Signin)