class App extends React.Component {
  constructor(props) {
    super(props);
    var context = this;
    this.state = {
      'curWord': 'ggg',
      'curIndexesUsed': []
    }

    this.boardClick = (event) => {
      var clickLetter = event.target.innerHTML;
      var clickIndex = event.target.className;
      var newCurWord = context.state.curWord + clickLetter;
      var newCurIndexes = context.state.curIndexesUsed.concat(clickIndex);
      context.setState({
        'curWord': newCurWord,
        'curIndexesUsed': newCurIndexes
      });
      console.log('curWord: ', context.state.curWord);
      console.log('newCurWord: ', newCurWord);
    };
  }

  render() {
    return (
        <div>
          Hello World! ^_^
          <Score />
          <Board boardStr={'abcdefghijklmnop'} clickHandler={this.boardClick}/>
          <Timer />
          <CurrentWord curWord={this.state.curWord}/>
          <PlayedWords />
        </div>
      );
  }
}