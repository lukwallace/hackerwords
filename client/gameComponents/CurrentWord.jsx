import React from 'react';

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