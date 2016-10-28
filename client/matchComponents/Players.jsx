import React from 'react';
import { Link, withRouter } from 'react-router';
import $ from 'jquery';
import Util from './../util.js';

class Players extends React.Component {
  constructor(props) {
    super(props);
    this.makeChallenge = this.makeChallenge.bind(this);
  }

  /** Challenge another player */
  makeChallenge() {
    const username = ($('#player').val());

    /** Check to make sure username has been selected */
    if (!username) {
      return;
    }

    /** Complete game challenge creation */
    $.post({
      url: '/api/makeChallengeGame',
      headers: { 'x-access-token': Util.getToken() },
      dataType: 'json',
      data: { username },
      success: (data) => {
        console.log('challenge made', data);
        this.props.router.push('/game/' + data.id);
      },
      error: (data) => {
        console.log('Error!');
        console.log(data);
      },
    });
  }

  /** Render list of players available for challenging */
  render() {
    return (
      <div className="players">
        <h2> Challenge PLayers </h2>
        <input list="players" /> &nbsp;
        <datalist id="players">
          {
            this.props.entries.map((user) => {
              return (
                <option key={user}> {user} </option>
              );
            })
          }
        </datalist>
        <input type="button" value="Challenge" onClick={this.makeChallenge} />
      </div>
    );
  }
}

export default withRouter(Players, { withRef: true });
