import React from 'react';
import { Link, withRouter } from 'react-router';
import $ from 'jquery';

const util = require('../util.js');

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.submitFn = this.submitFn.bind(this);
    util.signOut();
  }

  submitFn() {
    const username = $('#username').val();
    const password = $('#password').val();
    $('#username').val('');
    $('#password').val('');

    $.post({
      url: '/api/signin',
      dataType: 'json',
      data: { username, password },
      success: (data) => {
        console.log('Success!!!!!', data);
        util.storeToken(data);
        this.props.router.push('/home');
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  render() {
    return (
      <div>
      HackerWords Signin
        <br />
        <label htmlFor="username"> Username </label>
        <input type="text" id="username" name="username" />
        <label htmlFor="password"> Password </label>
        <input type="password"id="password" name="password" />
        <input type="button" id="signin" value="Signin" onClick={this.submitFn} />
        <br />
        Don't have an account?
        <Link to="/signup"> Sign up here</Link>
      </div>
    );
  }
}

export default withRouter(Signin);
