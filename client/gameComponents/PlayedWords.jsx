import React from 'react';

export default class PlayedWords extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <span className='wordsPlayed'>
          Words Played: 
          <list>
            {this.props.wordsPlayed.map(function(word) {
              return (
                <ul>{word}</ul>
                );
            })}
          </list>
        </span>
      );
  }
}