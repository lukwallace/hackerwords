class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  submitFn () {
    console.log($('#username').val());
    console.log($('#password').val());
    $('#username').val("");
    $('#password').val("");
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
        <input type="button" id='login' value="Login" onClick={this.submitFn}></input>
      </div>
    );
  }
}
