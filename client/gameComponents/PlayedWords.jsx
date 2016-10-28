import React from 'react';

export default class PlayedWords extends React.Component {
  constructor(props) {
    super(props);
  }

  /** Render words played */
  render() {
    return (
        <span className='wordsPlayed'>
          Words Played: <br/>
          <div>
            {this.props.wordsPlayed.map(function(word, index) {

              return (
                <p key={word}>{word + ' [' + this.props.wordScores[index] + '], '}</p>
                );
            }, this)}
          </div>
        </span>
      );
  }
}