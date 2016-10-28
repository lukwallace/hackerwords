import React from 'react';
import { Link, withRouter } from 'react-router';

class Challenges extends React.Component {
  constructor(props) {
    super(props);
  }

  /** Render list of game challenges */
  render() {
    return (
      <div className="challenges">
        <h2> Your Challenges </h2>
        <list>
          {this.props.entries.map((entry) => {
            return (
              <li onClick={() => { this.props.router.push('/game/' + entry._id); }}key={entry._id}>
                {entry.opponentName}
              </li>
            );
          }, this)}
        </list>
      </div>
    );
  }
}

export default withRouter(Challenges, { withRef: true });
