import React from 'react';
import { Link, withRouter } from 'react-router';
import $ from 'jquery';
import jwt from 'jwt-simple';
import Challenges from './Challenges.jsx';
import Players from './Players.jsx';
import Util from './../util.js';
import GameHistory from './GameHistory.jsx';


class Lobby extends React.Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    this.state = {
      players: [],
      challenges: [],
      highScore: 0,
      gameHistory: [],
    };
  }

  componentWillMount() {
    const token = Util.getToken();
    if (token) {
      console.log('APPTOKEN', token);
    }

    if (!token) {
      this.props.router.push('/signin');
    } else {
      // try {
      //   const username = jwt.decode(token, 'secret').username;
      // } catch (e) {
      //   console.error('Invalid Token!');
      // }

      /** Get current signed in username */
      const username = jwt.decode(token, 'secret').username;

      /** Get all users */
      $.get({
        url: '/api/getAllUsers',
        headers: { 'x-access-token': Util.getToken() },
        dataType: 'json',
        success: (data) => {
          console.log('Player data:', data);
          this.setState({
            players: data.allUsers.filter((user) => {
              return user !== username;
            }),
          });
        },
        error: (data) => {
          console.log('Error!');
          console.log(data);
        },
      });

      /** Get highest score of currently signed in user */
      $.get({
        url: '/api/getHighScore',
        headers: { 'x-access-token': token },
        dataType: 'json',
        data: { username },
        success: (data) => {
          console.log('Player high score:', data);
          this.setState({
            highScore: data.highestScore,
          });
        },
        error: (data) => {
          console.log('Error!');
          console.log(data);
        },
      });

      /** Get all pending game challenges */
      $.post({
        url: '/api/getPendingGames',
        headers: { 'x-access-token': token },
        dataType: 'json',
        data: { username },
        success: (data) => {
          console.log('Pending game data:', data);
          this.setState({
            challenges: data.result,
          });
        },
        error: (data) => {
          console.log('Error!');
          console.log(data);
        },
      });
      $.post({
        url: '/api/getGameHistory',
        headers: { 'x-access-token': token },
        dataType: 'json',
        data: { username },
        success: (data) => {
          console.log('Completed Games Data', data);
          this.setState({
            gameHistory: data.games,
          });
        },
        error: (data) => {
          console.log('Error!');
          console.log(data);
        },
      });
    }
  }

  /** Logout current user and destroy session token */
  logOut() {
    window.localStorage.removeItem('com.hackerwords');
    this.props.router.push('/signin');
  }

  /** Render lobby page */
  render() {
    return (
      <div>
        <Link className="lobbyButton" to="/solo"> Single Player </Link>
        <Challenges entries={this.state.challenges} />
        <Players entries={this.state.players} />
        <div> <h1> Your High Score {this.state.highScore} </h1> </div>
        <button className="signoutButton" onClick={this.logOut}> Sign Out </button>
        <GameHistory entries={this.state.gameHistory} />
      </div>
    );
  }
}

export default withRouter(Lobby, { withRef: true });
