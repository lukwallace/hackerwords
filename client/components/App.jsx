class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          Hello World! :-) 
          <Score />
          <Board boardStr={'abcdefghijklmnop'} props={{'boardStr': 'abcdefghijklmnop'}} />
          <Timer />
          <CurrentWord />
        </div>
      );
  }
}