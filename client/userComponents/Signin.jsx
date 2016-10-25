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
    console.log('Wahahaha');
    console.log(username);
    console.log(password);
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
        $('#error').show();
      },
    });
  }

  render() {
    return (
      <div className='signin'>
        <h1> HackerWords </h1>
        <br/>
        <div> Signin </div>
        <br/>
        <label htmlFor="username"> Username </label>
        <input type="text" id="username" name="username" />
        <br/>
        <label htmlFor="password"> Password </label>
        <input type="password"id="password" name="password" />
        <br/>
        <br/>
        <input type="button" id="signin" value="Signin" onClick={this.submitFn} />
        <br />
        Don't have an account?
        <Link to="/signup"> Sign up here</Link>
        <h2 id="error"> Invalid user or password! </h2>
      </div>
    );
  }
}

export default withRouter(Signin, { withRef: true });
