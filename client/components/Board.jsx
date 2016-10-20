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
              <td className="b0" onClick={this.props.clickHandler}>{this.props.boardStr[0]}</td>
              <td className="b1" onClick={this.props.clickHandler}>{this.props.boardStr[1]}</td>
              <td className="b2" onClick={this.props.clickHandler}>{this.props.boardStr[2]}</td>
              <td className="b3" onClick={this.props.clickHandler}>{this.props.boardStr[3]}</td>
            </tr> 
            <tr>
              <td className="b4" onClick={this.props.clickHandler}>{this.props.boardStr[4]}</td>
              <td className="b5" onClick={this.props.clickHandler}>{this.props.boardStr[5]}</td>
              <td className="b6" onClick={this.props.clickHandler}>{this.props.boardStr[6]}</td>
              <td className="b7" onClick={this.props.clickHandler}>{this.props.boardStr[7]}</td>
            </tr>
            <tr>
              <td className="b8" onClick={this.props.clickHandler}>{this.props.boardStr[8]}</td>
              <td className="b9" onClick={this.props.clickHandler}>{this.props.boardStr[9]}</td>
              <td className="b10" onClick={this.props.clickHandler}>{this.props.boardStr[10]}</td>
              <td className="b11" onClick={this.props.clickHandler}>{this.props.boardStr[11]}</td>
            </tr>
            <tr>
              <td className="b12" onClick={this.props.clickHandler}>{this.props.boardStr[12]}</td>
              <td className="b13" onClick={this.props.clickHandler}>{this.props.boardStr[13]}</td>
              <td className="b14" onClick={this.props.clickHandler}>{this.props.boardStr[14]}</td>
              <td className="b15" onClick={this.props.clickHandler}>{this.props.boardStr[15]}</td>
            </tr>
          </tbody>
          </table>
        </div>
      );
  }
}