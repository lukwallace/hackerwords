class Signup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      HackerWords Signup
        <form>
          <label>Username </label>
          <input type='text' name='username'></input>
          <label> Password </label>
          <input type='password' name='password'></input>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}