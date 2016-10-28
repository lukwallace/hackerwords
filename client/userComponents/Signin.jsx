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

  componentDidMount() {

    /** Makes pressing enter on any input box click submit */
    $('input').each(function () {
      $(this).keypress((e) => {
        if (e.which === 13) {
          $('#signin').click();
        }
      });
    });
  }

  submitFn() {

    /** Grab username and password values from fields */
    const username = $('#username').val();
    const password = $('#password').val();
    $('#username').val('');
    $('#password').val('');

    /** Submit username and password for verification */
    $.post({
      url: '/api/signin',
      dataType: 'json',
      data: { username, password },
      success: (data) => {
        console.log('Success!!!!!', data);
        util.storeToken(data);
        this.props.router.push('/');
      },
      error: (error) => {
        console.error(error);
        $('#error').show();
      },
    });
  }

  /** Render signin page */
  render() {
    return (
      <div className="signin">
        <h1> HackerWords </h1>
        <br />
        <div className="signintitle"> Signin </div>
        <br />
        <br />
        <br />
        <label htmlFor="username"> Username </label>
        <input type="text" id="username" name="username" className="signinform" />
        <br />
        <label htmlFor="password"> Password </label>
        <input type="password"id="password" name="password" className="signinform" />
        <br />
        <br />
        <br />
        <input type="button" id="signin" value="Signin" onClick={this.submitFn} className="signinform" />
        <br />
        <br />
        <br />
        <br />
        Don't have an account?
        <Link to="/signup"> Sign up here</Link>
        <h2 id="error"> Invalid user or password! </h2>
      </div>
    );
  }
}

export default withRouter(Signin, { withRef: true });
