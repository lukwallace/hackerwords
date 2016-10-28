import React from 'react';
import { Link, withRouter } from 'react-router';
import $ from 'jquery';
import jwt from 'jwt-simple';
import Challenges from './Challenges.jsx';
import Players from './Players.jsx';
import Util from './../util.js';


class Lobby extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      challenges: [],
      highScore: 0
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
      const username = jwt.decode(token, 'secret').username;

      $.get({
        url: '/api/getAllUsers',
        headers: { 'x-access-token': Util.getToken() },
        dataType: 'json',
        success: (data) => {
          console.log('Player data:', data);
          this.setState({
            players: data.allUsers,
          });
        },
        error: (data) => {
          console.log('Error!');
          console.log(data);
        },
      });
      $.get({
        url: '/api/getHighScore',
        headers: { 'x-access-token': Util.getToken() },
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
      $.post({
        url: '/api/getPendingGames',
        headers: { 'x-access-token': Util.getToken() },
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
    }
  }


  render() {
    return (
      <div>
        <Challenges entries={this.state.challenges} />
        <Players entries={this.state.players} />
        <Link to="/solo"> Play Single Player Here </Link>
        <div> <h1> Your High Score {this.state.highScore} </h1> </div>
      </div>
    );
  }
}

export default withRouter(Lobby, { withRef: true });
