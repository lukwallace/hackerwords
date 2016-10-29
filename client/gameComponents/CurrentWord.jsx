/**
 * @file Manages the current word component.
 */

import React from 'react';

/**
 * Creates a new Current Word.
 * @class
 */
export default class CurrentWord extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'curWord': props.curWord
    }
  }

  /** Render current word */
  render() {
    return (
        <div>
          Current Word: {this.state.curWord}
        </div>
      );
  }
}