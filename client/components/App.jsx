class App extends React.Component {
  constructor(props) {
    super(props);
    var context = this;

    this.rowSize = 4;

    this.state = {
      'curWord': '',
      'curIndexesUsed': []
    }

    this.getLastClickIndex = function() {
      if(this.state.curIndexesUsed.length === 0) {
        return null;
      }
      return this.state.curIndexesUsed[this.state.curIndexesUsed.length - 1];
    }

    this.getClickIndexNumber = function(ci) {
      return Number(ci.slice(1));
    }

    this.isInUsedIndexes = (clickIndex) => {
      return (this.state.curIndexesUsed.indexOf(clickIndex) !== -1);
    }

    this.boardClick = (event) => {
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
          <Board boardStr={'abcdefghijklmnop'} clickHandler={this.boardClick}/>
          <Timer />
          Current Word: {this.state.curWord}
          <PlayedWords />
          <Login />
          <Signup />
        </div>
      );
  }
}