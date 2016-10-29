/**
 * @file Manages the timer component.
 */

import React from 'react';

/**
 * Creates a new Timer
 * @class
 */
export default class Timer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      'timeLeft': 10
    }
    var context = this;

    /**
    * This function is used to make the timer work.
    * @method timerInterval
    */
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