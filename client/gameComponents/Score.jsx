/**
 * @file Manages the score component.
 */

import React from 'react';

/**
 * @module Score
 */

export default class Score extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="scoreboard">
        Score: {this.props.score}
      </div>
    );
  }
}
