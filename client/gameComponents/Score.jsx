import React from 'react';

export default class Score extends React.Component {
  constructor(props) {
    super(props);
  }

  /** Render current score */
  render() {
    return (
        <div className='scoreboard'>
          Score: {this.props.score}
        </div>
      );
  }
}