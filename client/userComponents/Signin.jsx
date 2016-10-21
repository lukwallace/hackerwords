import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
var util = require('../util.js');

export default class Signin extends React.Component {
  constructor(props) {
    super(props);
  }

  submitFn () {
    var username = $('#username').val();
    var password= $('#password').val();
    $('#username').val("");
    $('#password').val("");

    $.post({
      url: '/api/signin',
      dataType: 'json',
      data: {username: username, password: password},
      success: function (data) {
        console.log('Success!!!!!', data);
        util.storeToken(data);
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
        <input type="button" id='signin' value="Signin" onClick={this.submitFn}></input>
        <br/>
        Don't have an account?
        <Link to='/signup'> Sign up here</Link>
      </div>
    );
  }
}
