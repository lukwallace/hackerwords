import React from 'react';

class Challenges extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <list>
          {this.props.entries.map((entry) => {
            return (
                <li key={entry._id}>{'Challenge From: ' + entry.opponentName}</li>
              );
          })}
        </list>
      </div>
    );
  }
}

export default Challenges;
