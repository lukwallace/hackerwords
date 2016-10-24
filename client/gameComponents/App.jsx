import React from 'react';
import Board from './Board.jsx';
import PlayedWords from './PlayedWords.jsx';
import Score from './Score.jsx';
import CurrentWord from './CurrentWord.jsx';
import Timer from './Timer.jsx';
import Login from './../userComponents/Signin.jsx';
import Signup from './../userComponents/Signup.jsx';
import Util from './../util.js';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, withRouter } from 'react-router';

class App extends React.Component {
  constructor(props) {
    super(props);
    const context = this;

    this.rowSize = 4;
    const token = Util.getToken();
    console.log('APPTOKEN', token);


    //in testing mode there is no props.router
    if (props.router) {
      if(token) {
        this.askServerForBoard();
      } else {
        props.router.push('/signin');
        return;
      }
    }


    this.state = {
      boardStr: 'abcdefghijklmnop',
      curWord: '',
      curIndexesUsed: [],
      wordsPlayed: [],
      timeLeft: 120,
      gameOver: false,
    };

    this.logOut = () => {
      this.stopTimer();
      window.localStorage.removeItem('com.hackerwords');
      props.router.push('/signin');
    };

    this.startTimer = () => {
      this.timerInterval = setInterval(() => {
        context.setState({
          timeLeft: context.state.timeLeft - 1,
        });

        if (context.state.timeLeft === 0) {
          context.setState({
            gameOver: true,
          });
          clearInterval(this.timerInterval);
        }
      }, 1000);
    };

    this.stopTimer = () => {
      clearInterval(this.timerInterval);
    };

    this.startTimer();

    this.getLastClickIndex = () => {
      if (this.state.curIndexesUsed.length === 0) {
        return null;
      }
      return this.state.curIndexesUsed[this.state.curIndexesUsed.length - 1];
    };

    this.getClickIndexNumber = (ci) => {
      return Number(ci.slice(1));
    };

    this.isInUsedIndexes = (clickIndex) => {
      return (this.state.curIndexesUsed.indexOf(clickIndex) !== -1);
    };

    this.sendWord = () => {
      const word = this.state.curWord;
      $.post('/api/checkWord', { word }, (data) => {
        if (data.isWord && context.state.wordsPlayed.indexOf(word) === -1) {
          context.setState({
            wordsPlayed: context.state.wordsPlayed.concat(word),
          });
        }
      });
    };

    this.boardClick = (event) => {
      if (this.state.gameOver) {
        return;
      }
      const clickLetter = event.target.innerHTML;
      const clickIndex = event.target.className;


      // check adjacent
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
        console.log('word finalized as ', context.state.curWord);
        // evaluate word here
        this.sendWord();

        context.setState({
          curWord: '',
          curIndexesUsed: [],
        });
      } else if (isAdjacent() && !this.isInUsedIndexes(clickIndex)) {
        const newCurWord = context.state.curWord + clickLetter;
        const newCurIndexes = context.state.curIndexesUsed.concat(clickIndex);
          // re-evaluate using mutable objects as state params?
        context.setState({
          curWord: newCurWord,
          curIndexesUsed: newCurIndexes,
        });
      }
    };
  }

  askServerForBoard () {
    $.ajax({
      method: 'GET',
      url: '/api/makeBoard',
      headers: { 'x-access-token' : Util.getToken()},
      dataType: 'json',
      success: function(data) {
        console.log(data);
        context.setState({
          boardStr: data.boardString,
        });
      }
    });
  }

//<div onClick={Util.signOut(this)}>Sign Out</div>

  render() {
    return (
        <div className="gameBoardApp">
          Hello World! ^_^
        <Score />
        <Board boardStr={this.state.boardStr} clickHandler={this.boardClick} />
        <div>Time Left: {this.state.timeLeft}</div>
        <div>Current Word: {this.state.curWord}</div>
        <PlayedWords wordsPlayed={this.state.wordsPlayed} />
        <div onClick={this.logOut}>Sign Out</div>
      </div>
      );
  }

}

export default withRouter(App);