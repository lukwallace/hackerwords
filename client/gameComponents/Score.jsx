import React from 'react';

export default class Score extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <span className='scoreboard'>
          Score: {this.props.score}
        </span>
      );
  }
}