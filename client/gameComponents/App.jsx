import React from 'react';
import { withRouter } from 'react-router';
import $ from 'jquery';
import Board from './Board.jsx';
import PlayedWords from './PlayedWords.jsx';
import Score from './Score.jsx';
import Util from './../util.js';


class App extends React.Component {
  constructor(props) {
    super(props);


    this.setStateCallback = (stateObj) => {
      //console.log('setting state to', stateObj);
    }

    //Why do we need this code? Was 'this' not being set properly?
    this.getLastClickIndex = this.getLastClickIndex.bind(this);
    this.logOut = this.logOut.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.isInUsedIndexes = this.isInUsedIndexes.bind(this);
    this.sendWord = this.sendWord.bind(this);
    this.boardClick = this.boardClick.bind(this);
    this.setState = this.setState.bind(this);
    this.setStateCallback = this.setStateCallback.bind(this);
    this.rowSize = 4;

    const token = Util.getToken();
    if (token) {
      console.log('APPTOKEN', token);
    }


    //FIXME: Had to modify below code for tests
    //Not sure what the correct behavior should be

    if (this.props.router) {
      if (!token) {
        this.props.router.push('/signin');
        return;
      }

      $.ajax({
        method: 'GET',
        url: '/api/makeBoard',
        headers: { 'x-access-token': Util.getToken() },
        dataType: 'json',
        success: (data) => {
          console.log(data.boardString);
          this.setState({
            boardStr: data.boardString,
          });
        },
      });
    }

    this.state = {
      boardStr: 'abcdefghijklmnop',
      curWord: '',
      curIndexesUsed: [],
      wordsPlayed: [],
      timeLeft: 120,
      gameOver: false,
      score: 0,
    };


    this.startTimer();
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  getLastClickIndex() {
    if (this.state.curIndexesUsed.length === 0) {
      return null;
    }
    return this.state.curIndexesUsed[this.state.curIndexesUsed.length - 1];
  }

  getClickIndexNumber(ci) {
    return Number(ci.slice(1));
  }

  logOut() {
    this.stopTimer();
    window.localStorage.removeItem('com.hackerwords');
    this.props.router.push('/signin');
  }

  startTimer() {
    this.timerInterval = setInterval(() => {
      this.setState({
        timeLeft: this.state.timeLeft - 1,
      });

      if (this.state.timeLeft === 0) {
        this.setState({
          gameOver: true,
        });
        clearInterval(this.timerInterval);
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timerInterval);
  }

  isInUsedIndexes(clickIndex) {
    return (this.state.curIndexesUsed.indexOf(clickIndex) !== -1);
  }

  sendWord() {
    const word = this.state.curWord;
    $.post('/api/checkWord', { word }, (data) => {
      console.log('data', data);
      if (data.isWord && this.state.wordsPlayed.indexOf(word) === -1) {
        console.log(word + ' has a score of ' + data.score);
        this.setState({
          wordsPlayed: this.state.wordsPlayed.concat(word + ' [' + data.score + '], '),
          score: this.state.score + data.score,
        });
      }
    });
  }

  boardClick(event) {
    if (this.state.gameOver) {
      return;
    }
    const clickLetter = event.target.innerHTML;
    const clickIndex = event.target.className.split(' ')[0];

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
      $('.selected').removeClass('selected');
      console.log('word finalized as ', this.state.curWord);
      // evaluate word here
      this.sendWord();

      this.setState({
        curWord: '',
        curIndexesUsed: [],
      });
    } else if (isAdjacent() && !this.isInUsedIndexes(clickIndex)) {
      const newCurWord = this.state.curWord + clickLetter;
      const newCurIndexes = this.state.curIndexesUsed.concat(clickIndex);
      $(event.target).addClass('selected');
        // re-evaluate using mutable objects as state params?
      this.setState({
        curWord: newCurWord,
        curIndexesUsed: newCurIndexes,
      });
    }
  }


  // askServerForBoard () {
  //   $.ajax({
  //     method: 'GET',
  //     url: '/api/makeBoard',
  //     headers: { 'x-access-token' : Util.getToken()},
  //     dataType: 'json',
  //     success: function(data) {
  //       console.log(data);
  //       context.setState({
  //         boardStr: data.boardString,
  //       });
  //     }
  //   });
  // }

// <div onClick={Util.signOut(this)}>Sign Out</div>
  
  //could use this to add a callback for set state
  //However, its unclear how to set it with Enzyme
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
        <div className='timeLeft'>{this.state.timeLeft}</div>
        <div className='currentWord'>{this.state.curWord}</div>
        <Board boardStr={this.state.boardStr} clickHandler={this.boardClick} />
        <PlayedWords wordsPlayed={this.state.wordsPlayed} />
        <button onClick={this.logOut}> Sign Out </button>
        <div><Score score={this.state.score}/></div>
      </div>
    );
  }

}

export default withRouter(App, {withRef: true});
