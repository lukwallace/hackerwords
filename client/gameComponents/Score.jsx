import React from 'react';

export default class Score extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'score': 0
    }
  }

  render() {
    return (
        <span className='scoreboard'>
          Score: {this.state.score}
        </span>
      );
  }
}