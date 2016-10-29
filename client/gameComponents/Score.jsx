/**
 * @file Manages the score component.
 */

import React from 'react';

/**
 * Creates a new Score
 * @class
 */
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