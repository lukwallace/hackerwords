import React from 'react';

export default class PlayedWords extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          Words Played: 
          <list>
            {this.props.wordsPlayed.map(function(word) {
              return (
                <ul>{word}</ul>
                )
            })}
          </list>
        </div>
      );
  }
}