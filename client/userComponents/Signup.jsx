import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
var util = require('../util.js');

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
  }

  submitFn () {
    var username = $('#username').val();
    var password= $('#password').val();
    $('#username').val("");
    $('#password').val("");

    $.post({
      url: '/api/signup',
      dataType: 'json',
      data: {username: username, password: password},
      success: function (data) {
        console.log('Success', data);
        util.storeToken(data);
        //console.log(this.props.router);
      },
      error: function (error) {
        console.error(error);
      }
    });
  }

  render() {
    return (
      <div>
      HackerWords Signup
        <br/>
        <label>Username </label>
        <input type='text' id='username' name='username'></input>
        <label> Password </label>
        <input type='password'id='password' name='password'></input>
        <input type="button" id='signup' value="Signup" onClick={this.submitFn}></input>
        <br/>
        Have an account?
        <Link to='/signin'> Sign in here</Link>
      </div>
    );
  }
}