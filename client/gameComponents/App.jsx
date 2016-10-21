import React from 'react';
import Board from './Board.jsx';
import PlayedWords from './PlayedWords.jsx';
import Score from './Score.jsx';
import CurrentWord from './CurrentWord.jsx';
import Timer from './Timer.jsx';
import Login from './../login/login.jsx';
import Signup from './../signup/Signup.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    var context = this;

    this.rowSize = 4;

    $.get('/api/makeBoard', (data) => {
      console.log(data);
      context.setState({
        'boardStr': data.boardStr
      })
    });

    this.state = {
      'boardStr': 'abcdefghijklmnop',
      'curWord': '',
      'curIndexesUsed': [],
      'wordsPlayed': [],
      'timeLeft': 10,
      'gameOver': false
    }

    this.startTimer = () => {
      var timerInterval = setInterval(function() {
        context.setState({
          'timeLeft': context.state.timeLeft - 1
        })

        if(context.state.timeLeft === 0) {
          context.setState({
            'gameOver': true
          })
          clearInterval(timerInterval);
        }
      }, 1000)
    }

    this.startTimer();

    this.getLastClickIndex = () =>  {
      if(this.state.curIndexesUsed.length === 0) {
        return null;
      }
      return this.state.curIndexesUsed[this.state.curIndexesUsed.length - 1];
    }

    this.getClickIndexNumber = (ci) =>  {
      return Number(ci.slice(1));
    }

    this.isInUsedIndexes = (clickIndex) => {
      return (this.state.curIndexesUsed.indexOf(clickIndex) !== -1);
    }

    this.sendWord = () => {
      var word = this.state.curWord;
      $.post('/api/checkWord', {word: word}, (data) => {
        if(data.isWord && context.state.wordsPlayed.indexOf(word) === -1) {
          context.setState({
            wordsPlayed: context.state.wordsPlayed.concat(word)
          })
        }
      });
    } 

    this.boardClick = (event) => {
      if(this.state.gameOver) {
        return;
      }
      var clickLetter = event.target.innerHTML;
      var clickIndex = event.target.className;


      //check adjacent
      var isAdjacent = () => {
        var lastClick = this.getLastClickIndex();
        if(lastClick === null) {
          return true;
        }
        var lastClickIndex = this.getClickIndexNumber(lastClick);
        var thisClickIndex = this.getClickIndexNumber(clickIndex);

        var lastClickRow = Math.floor(lastClickIndex / this.rowSize);
        var lastClickCol = (lastClickIndex % this.rowSize);
        var thisClickRow = Math.floor(thisClickIndex / this.rowSize);
        var thisClickCol = (thisClickIndex % this.rowSize);
        
        if(Math.abs(lastClickRow - thisClickRow) > 1) {
          return false;
        }
        if(Math.abs(lastClickCol - thisClickCol) > 1) {
          return false;
        }
        return true;
      };

      if(clickIndex === this.getLastClickIndex()) {
        console.log('word finalized as ', context.state.curWord);
        //evaluate word here
        this.sendWord();

        context.setState({
          'curWord': '',
          'curIndexesUsed': []
        });
      } else {
        if(isAdjacent() && !this.isInUsedIndexes(clickIndex)) {
          var newCurWord = context.state.curWord + clickLetter;
          var newCurIndexes = context.state.curIndexesUsed.concat(clickIndex);
          //re-evaluate using mutable objects as state params?
          context.setState({
            'curWord': newCurWord,
            'curIndexesUsed': newCurIndexes
          });
        }
      }
    };
  }


  render() {
    return (
        <div>
          Hello World! ^_^
          <Score />
          <Board boardStr={this.state.boardStr} clickHandler={this.boardClick}/>
          <div>Time Left: {this.state.timeLeft}</div>
          <div>Current Word: {this.state.curWord}</div>
          <PlayedWords wordsPlayed={this.state.wordsPlayed}/>
        </div>
      );
  }
  
}