/**
 * @file Manages the game history component.
 */

import React from 'react';
import { Link, withRouter } from 'react-router';

/**
 * Creates a new Game History component.
 * @class
 */

class GameHistory extends React.Component {
  constructor(props) {
    super(props);
	}

  render() {
    return (
      <div className="gameHistoryDiv">
        <h2>Game History</h2>
        <table>
          <tbody>
          <tr><th>Solo Games</th></tr>
          {this.props.entries.filter((entry) => entry.length === 1).map((entry) => {
            return (
                <tr className="soloRow" key={entry[0]._id}><td key={entry[0]._id}>{entry[0].points + ' points'}</td></tr>
              );
          })}
          </tbody>
        </table>
        <table>
          <tbody>
          <tr><th>You</th><th>Opponent</th><th>Result</th></tr>
          {this.props.entries.filter((entry) => entry.length === 2).map((entry) => {
            return (
                <tr className={entry[0].points > entry[1].points ? 'winRow' : 'lossRow'} key={entry[0]._id}>
                  <td key={entry[0]._id}>{entry[0].points + ' points'}</td>
                  <td key={entry[1]._id}>{entry[0].opponentName + ': ' + entry[1].points + ' points.'}</td>
                  <td>{entry[0].points > entry[1].points ? 'You Won! :-)' : 'You Lost! :-('}</td>
                </tr>
              );
          })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default withRouter(GameHistory, {withRef: true});