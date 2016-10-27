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

  componentDidMount() {
    // Makes pressing enter on any input box click submit
    $('input').each(function () {
      $(this).keypress((e) => {
        if (e.which === 13) {
          $('#signin').click();
        }
      });
    });
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
        $('#error').show();
      },
    });
  }

  render() {
    return (
      <div className="signup">
        <h1 className="signuph1"> HackerWords </h1>
        <br />
        <div className="signuptitle"> Signup </div>
        <br />
        <br />
        <br />
        <label htmlFor="username" className="signuplabel">Username </label>
        <input type="text" id="username" name="username" className="signupform" />
        <br />
        <label htmlFor="password" className="signuplabel"> Password </label>
        <input type="password"id="password" name="password" className="signupform" />
        <br />
        <br />
        <br />
        <input type="button" id="signup" value="Signup" onClick={this.submitFn} className="signupform signupbutton" />
        <br />
        <br />
        <br />
        <br />
        Have an account?
        <Link to="/signin"> Sign in here</Link>
        <h2 id="error"> Username already exists! </h2>
      </div>
    );
  }
}

export default withRouter(Signup, { withRef: true });
