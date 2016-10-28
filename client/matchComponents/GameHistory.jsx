import React from 'react';
import { Link, withRouter } from 'react-router';

class GameHistory extends React.Component {
  constructor(props) {
    super(props);
	}

  render() {
    return (
        <div>
          {this.props.entries.map((entry) => {
            return (
                <div key={entry[0]._id}>
                  {entry.length === 1 ? 
                    'Solo Game: ' + entry[0].points + ' points.' : 
                    'Challenge Game: ' + entry[1].opponentName + ' - ' + entry[0].points + ' points, ' + entry[0].opponentName + ' - ' + (entry[1].pending ? 'pending' : entry[1].points + ' points.' )
                  }
                </div>
              );
          })}
        </div>
      );
  }
}

export default withRouter(GameHistory, {withRef: true});