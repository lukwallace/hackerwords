class CurrentWord extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'curWord': props.curWord
    }
  }

  render() {
    return (
        <div>
          Current Word: {this.state.curWord}
        </div>
      );
  }
}