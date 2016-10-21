export default class Timer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      'timeLeft': 10
    }
    var context = this;
    var timerInterval = setInterval(function() {
      context.setState({
        'timeLeft': context.state.timeLeft - 1
      })

      if(context.state.timeLeft === 0) {
        clearInterval(timerInterval);
      }
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