import React from 'react';
import { Link, withRouter } from 'react-router';
import $ from 'jquery';

const util = require('../util.js');

class Signup extends React.Component {
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
      url: '/api/signup',
      dataType: 'json',
      data: { username, password },
      success: (data) => {
        console.log('Success', data);
        util.storeToken(data);
        this.props.router.push('/signin');
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  render() {
    return (
      <div className="signup">
        <h1> HackerWords </h1>
        <br />
        <div> Signup </div>
        <div>
          <br />
          <label htmlFor="username">Username </label>
          <input type="text" id="username" name="username" />
          <br />
          <label htmlFor="password"> Password </label>
          <input type="password"id="password" name="password" />
          <br />
          <br />
          <input type="button" id="signup" value="Signup" onClick={this.submitFn} />
          <br />
        </div>
        Have an account?
        <Link to="/signin"> Sign in here</Link>
      </div>
    );
  }
}

export default withRouter(Signup, { withRef: true });
