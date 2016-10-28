import React from 'react';

export default class Timer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      'timeLeft': 10
    }
    var context = this;

    /** Timer functionality, subtract 1 every second */
    var timerInterval = setInterval(function() {
      context.setState({
        'timeLeft': context.state.timeLeft - 1
      })

      if(context.state.timeLeft === 0) {
        clearInterval(timerInterval);
      }
    }, 1000)
  }

  /** Render timer */
  render() {
    return (
        <div>
          Time Left: {this.state.timeLeft}
        </div>
      );
  }


}