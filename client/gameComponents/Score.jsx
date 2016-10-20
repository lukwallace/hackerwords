export default class Score extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'score': 0
    }
  }

  render() {
    return (
        <div>
          Score: {this.state.score}
        </div>
      );
  }
}