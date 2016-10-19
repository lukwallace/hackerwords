class Board extends React.Component {
  constructor(props, boardStr) {
    super(props);
    
  }

  render() {
    return (
        <div>
          <table>
          <tbody>
            <tr>
              <td>{this.props.boardStr[0]}</td>
              <td>{this.props.boardStr[1]}</td>
              <td>{this.props.boardStr[2]}</td>
              <td>{this.props.boardStr[3]}</td>
            </tr>
            <tr>
              <td>{this.props.boardStr[4]}</td>
              <td>{this.props.boardStr[5]}</td>
              <td>{this.props.boardStr[6]}</td>
              <td>{this.props.boardStr[7]}</td>
            </tr>
            <tr>
              <td>{this.props.boardStr[8]}</td>
              <td>{this.props.boardStr[9]}</td>
              <td>{this.props.boardStr[10]}</td>
              <td>{this.props.boardStr[11]}</td>
            </tr>
            <tr>
              <td>{this.props.boardStr[12]}</td>
              <td>{this.props.boardStr[13]}</td>
              <td>{this.props.boardStr[14]}</td>
              <td>{this.props.boardStr[15]}</td>
            </tr>
          </tbody>
          </table>
        </div>
      );
  }
}