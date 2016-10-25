import React from 'react';

export default class PlayedWords extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <span className='wordsPlayed'>
          Words Played: <p> </p>  
          <p>
            {this.props.wordsPlayed.map(function(word) {
              return (
                <p key={word}>{word}</p>
                );
            })}
          </p>
          <p> </p>  
        </span>
      );
  }
}