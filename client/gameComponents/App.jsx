/**
 * @file Manages the app component.
 */

import React from 'react';
import { withRouter } from 'react-router';
import $ from 'jquery';
import Board from './Board.jsx';
import PlayedWords from './PlayedWords.jsx';
import Score from './Score.jsx';
import Util from './../util.js';


/**
 * Creates a new App component.
 * @class
 */

class App extends React.Component {
  constructor(props) {
    super(props);


    this.setStateCallback = (stateObj) => {
      // console.log('setting state to', stateObj);
    };

    // Why do we need this code? Was 'this' not being set properly?
    this.getLastClickIndex = this.getLastClickIndex.bind(this);
    this.logOut = this.logOut.bind(this);
    this.backToLobby = this.backToLobby.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.isInUsedIndexes = this.isInUsedIndexes.bind(this);
    this.sendWord = this.sendWord.bind(this);
    this.boardClick = this.boardClick.bind(this);
    this.setState = this.setState.bind(this);
    this.setStateCallback = this.setStateCallback.bind(this);
    if (props.rowSize) {
      this.rowSize = props.rowSize;
    } else {
      this.rowSize = 4;
    }

    this.state = {
      gameID: null,
      boardStr: 'shouldnotseethis',
      curWord: '',
      curIndexesUsed: [],
      wordsPlayed: [],
      wordScores: [],
      timeLeft: 15,
      gameOver: false,
      score: 0,
    };

    this.startTimer();
  }

  /** componentWillMount() is invoked immediately before mounting occurs. This one checks for a valid session token and if the token is valid and the user plays a single player game, it makes a random game board for the user. If player is playing challenge mode, it will retrieve the appropriate board */

  componentWillMount() {
    const token = Util.getToken();
    if (token) {
      console.log('APPTOKEN', token);
    }


    if (!this.props.isTest) {
      if (!token) {
        this.props.router.push('/signin');
        return;
      }

      if (!this.props.params.id) {

        /** Make a board for current user */

        $.get({
          url: '/api/makeBoard',
          headers: { 'x-access-token': Util.getToken() },
          dataType: 'json',
          success: (data) => {
            console.log('Here!', data);
            console.log(data.boardString);
            this.setState({
              gameID: data.id,
              boardStr: data.boardString,
            });
          },
          error: (data) => {
            console.log('Error!');
            console.log(data);
          },
        });
      } else {

        /** Get an already-made board for current user */

        $.post({
          url: '/api/getBoard',
          headers: { 'x-access-token': Util.getToken() },
          dataType: 'json',
          data: { id: this.props.params.id },
          success: (data) => {
            console.log(data);
            this.setState({
              gameID: this.props.params.id,
              boardStr: data.boardString,
            });
          },
          error: (data) => {
            console.log('Error!');
            console.log(data);
          },
        });
      }
    }
  }

  /** componentWillUnmount() is invoked immediately before a component is unmounted and destroyed. This one stops the timer.
 */

  componentWillUnmount() {
    this.stopTimer();
  }

  /** This function is used to get the index of the last letter clicked.
 */

  getLastClickIndex() {
    if (this.state.curIndexesUsed.length === 0) {
      return null;
    }
    return this.state.curIndexesUsed[this.state.curIndexesUsed.length - 1];
  }


  /** This function is used to get the index of a particular index.
 * @param {object} ci an array with all letters (indexes) that have been clicked for current word
 * @returns {number} the index number
 */

  getClickIndexNumber(ci) {
    console.log('CI', ci);
    return Number(ci.slice(1));
  }

  /**This function is used to log the current user out.
 */

  logOut() {
    this.stopTimer();
    window.localStorage.removeItem('com.hackerwords');
    this.props.router.push('/signin');
  }

     /** This function is used to route the user back to lobby on button click.
  */

  backToLobby() {
    this.props.router.push('/');
  }

  /** This function is used to start the game timer.
  */

  startTimer() {
    this.timerInterval = setInterval(() => {
      this.setState({
        timeLeft: this.state.timeLeft - 1,
      });

      /** If timer runs out, set gameOver state to true */

      if (this.state.timeLeft <= 0) {
        $('.selected').removeClass('selected');
        $('.lastclicked').removeClass('lastclicked');
        this.setState({
          gameOver: true,
        });

        /** Send back game results to server */

        clearInterval(this.timerInterval);
        $.ajax({
          method: 'POST',
          url: '/api/finalizeGame',
          headers: { 'x-access-token': Util.getToken() },
          dataType: 'json',
          data: { score: this.state.score,
                  wordsPlayed: this.state.wordsPlayed,
                  gameID: this.state.gameID },
          success: (data) => {
            console.log('Game ended!', data);
            $('.gameEnded').css('display', 'block');
          },
          error: (data) => {
            console.log(data);
            console.log('Error: Game didn\'t appropriately');
          },
        });
      }
    }, 1000);
  }

   /**This function is used to stop the game timer.
  */

  stopTimer() {
    clearInterval(this.timerInterval);
  }


   /**This function is used to check to see if letter has been clicked previously in current word.
 * @param {number} clickIndex index to check
 * @returns {boolean}
 */

  isInUsedIndexes(clickIndex) {
    console.log(clickIndex, 'click index');
    return (this.state.curIndexesUsed.indexOf(clickIndex) !== -1);
  }

  /**This function is used to send the current finalized word to the server for verification.
 */

  sendWord() {
    const word = this.state.curWord;
    // dont send a request if we have that word
    if (this.state.wordsPlayed.indexOf(word) === -1) {
      $.post('/api/checkWord', { word }, (data) => {
        if (data.isWord) {
          this.setState({
            wordsPlayed: this.state.wordsPlayed.concat(word),
            wordScores: this.state.wordScores.concat(data.score),
            score: this.state.score + data.score,
          });
        }
      });
    }
  }

   /**This function is used to enforce the board rules and changes the class of currently selected letters for UI.
 * @param {object} event click event object
 * @returns {boolean} true or false if rules are followed
 */

  boardClick(event) {
    // console.log('event', event);
    if (this.state.gameOver) {
      return;
    }
    const clickLetter = event.target.innerHTML;
    const clickIndex = event.target.className.split(' ')[0];

     /**This function is used to check if currently clicked letter is adjacent to last clicked letter for current word.
    */

    const isAdjacent = () => {
      const lastClick = this.getLastClickIndex();

      if (lastClick === null) {
        return true;
      }
      const lastClickIndex = this.getClickIndexNumber(lastClick);
      const thisClickIndex = this.getClickIndexNumber(clickIndex);

      const lastClickRow = Math.floor(lastClickIndex / this.rowSize);
      const lastClickCol = (lastClickIndex % this.rowSize);
      const thisClickRow = Math.floor(thisClickIndex / this.rowSize);
      const thisClickCol = (thisClickIndex % this.rowSize);

      if (Math.abs(lastClickRow - thisClickRow) > 1) {
        return false;
      }
      if (Math.abs(lastClickCol - thisClickCol) > 1) {
        return false;
      }
      return true;
    };

    if (clickIndex === this.getLastClickIndex()) {
      $('.selected').removeClass('selected');
      $('.lastclicked').removeClass('lastclicked');

      this.sendWord();

      this.setState({
        curWord: '',
        curIndexesUsed: [],
      });
    } else if (isAdjacent() && !this.isInUsedIndexes(clickIndex)) {
      const newCurWord = this.state.curWord + clickLetter;
      const newCurIndexes = this.state.curIndexesUsed.concat(clickIndex);
      $('.' + lastClickIndex).removeClass('lastclicked');

      const lastClickIndex = newCurIndexes[newCurIndexes.length - 1];

      $('.' + lastClickIndex).addClass('lastclicked');
      for (var i = 0; i < newCurIndexes.length; i++) {
        if (i < newCurIndexes.length - 1) {
          $('.' + newCurIndexes[i]).removeClass('lastclicked');
        }
      }

      $(event.target).addClass('selected');
      console.log(event.target, 'EVENT TARGET FRANK');
      // re-evaluate using mutable objects as state params?
      this.setState({
        curWord: newCurWord,
        curIndexesUsed: newCurIndexes,
      });
    }
  }

  // could use this to add a callback for set state
  // However, its unclear how to set it with Enzyme
  setState(stateObj) {
    if (this.setStateCallback) {
      super.setState.call(this, stateObj, this.setStateCallback(stateObj));
    } else {
      super.setState.call(this, stateObj);
    }
  }

  render() {
    return (
      <div>
        <div className="gameBoardApp" />
        <h1> HackerWords </h1>
        <div className="timeLeft">{this.state.timeLeft}</div>
        <div className="currentWord">{this.state.curWord}</div>
        <div> <button className="gameEnded" onClick={this.backToLobby}> Back to Lobby </button> </div>
        <div><Score score={this.state.score} /></div>
        <Board boardStr={this.state.boardStr} clickHandler={this.boardClick} />
        <PlayedWords wordsPlayed={this.state.wordsPlayed} wordScores={this.state.wordScores} />
        <button className="signoutButton" onClick={this.logOut}> Sign Out </button>
      </div>
    );
  }

}

export default withRouter(App, { withRef: true });
