class Timer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      'timeLeft': 120
    }
    var context = this;
    setInterval(function() {
      // context.state.timeLeft -= 1;
      // context.render();
      context.setState({
        'timeLeft': context.state.timeLeft - 1
      })
      console.log(context.state.timeLeft);
    }, 1000)
  }

  render() {
    return (
        <div>
          Time Left: {this.state.timeLeft}
        </div>
      );
  }

  
}