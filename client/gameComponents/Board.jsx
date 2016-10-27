import React from 'react';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.size = Math.sqrt(props.boardStr.length);
    this.indices = [];
    for (let i = 0; i < props.boardStr.length; i += 1) {
      if (i % this.size === 0) {
        this.indices.push(i);
      }
    }
    console.log(this.indices, props.boardStr);
  }

  render() {
    return (
      <span>
        <table>
          <tbody className="boardBody">
            { this.indices.map((start) => {
              return (<tr key={start}>
                {[...Array(this.size).keys()].map((index) => {
                  const ind = start + index;
                  return (
                    <td key={ind} className={'b' + ind}
                    onClick={this.props.clickHandler}>{this.props.boardStr[ind]}</td>
                  );
                })}
              </tr>);
            })}
          </tbody>
        </table>
      </span>
    );
  }
}
