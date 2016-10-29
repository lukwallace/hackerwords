/**
 * @file Manages the signup component.
 */

import React from 'react';
import { Link, withRouter } from 'react-router';
import $ from 'jquery';

const util = require('../util.js');

/**
 * Creates a new Signup Component.
 * @class
 */
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.submitFn = this.submitFn.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
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

  onUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  onPasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  submitFn() {
    /** Grab username and password values from fields */
    const username = this.state.username;
    const password = this.state.password;
 
    this.setState({ username:'', password:'' });

    /** Submit username and password for verification and creation */
    $.post({
      url: '/api/signup',
      dataType: 'json',
      data: { username, password },
      success: (data) => {
        console.log('Success', data);
        util.storeToken(data);
        this.props.router.push('/');
      },
      error: (error) => {
        console.error(error);
        $('.error').show();
      },
    });
  }

  /** Render signup page */
  render() {
    return (
      <div className="signup">
        <h1> HackerWords </h1>
        <div className="signuptitle"> Signup </div>
        <label htmlFor="username"> Username </label>
        <input type="text" id="username" name="username" onChange={event => this.onUsernameChange(event)} />
        <label htmlFor="password"> Password </label>
        <input type="password" id="password" name="password" onChange={event => this.onPasswordChange(event)} />
        <input type="button" id="signup" value="Signup" onClick={this.submitFn} />
        Have an account?
        <Link to="/signin"> Sign in here</Link>
        <h2 className="error"> Username already exists! </h2>
      </div>
    );
  }
}

export default withRouter(Signup, { withRef: true });
