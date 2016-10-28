import React from 'react';
import { Link, withRouter } from 'react-router';

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
                <li key={entry._id}>{'Challenge From: ' + entry.opponentName} <br/>
                  <button onClick={() => {
                    this.props.router.push('/game/' + entry._id);
                  }} >Accept Challenge</button>
                </li>
              );
          }, this)}
        </list>
      </div>
    );
  }
}

export default withRouter(Challenges, {withRef: true});
