console.log(ReactRouter.Router, ReactRouter.hashHistory);
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const hashHistory = ReactRouter.hashHistory;

class Index extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
      </Router>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('app'));
