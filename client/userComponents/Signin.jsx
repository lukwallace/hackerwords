/**
 * @file Manages the signin component.
 */

import React from 'react';
import { Link, withRouter } from 'react-router';
import $ from 'jquery';

const util = require('../util.js');

/**
 * Creates a new Signin Component.
 * @class
 */
class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.submitFn = this.submitFn.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.state = {
      username: '',
      password: '',
    };
    util.signOut();
  }

  onUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  onPasswordChange(event) {
    this.setState({ password: event.target.value });
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
    const username = this.state.username;
    const password = this.state.password;
    
    this.setState({ username:'', password:'' });

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
        $('.error').show();
      },
    });
  }

  /** Render signin page */
  render() {
    return (
      <div className="signin">
        <h1> HackerWords </h1>
        <div className="signintitle"> Signin </div>
        <label htmlFor="username"> Username </label>
        <input type="text" value={this.state.username} id="username" name="username" className="signinform" onChange={(event) => this.onUsernameChange(event)}/>
        <br />
        <label htmlFor="password"> Password </label>
        <input type="password" value={this.state.password} id="password" name="password" className="signinform" onChange={(event) => this.onPasswordChange(event)}/>
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
        <h2 className="error"> Invalid user or password! </h2>
      </div>
    );
  }
}

export default withRouter(Signin, { withRef: true });
