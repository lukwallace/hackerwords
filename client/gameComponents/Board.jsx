/**
 * @file Manages the board component.
 */

import React from 'react';

/**
 * @module Board
 */

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
    console.log(props.boardStr, this.indices);
  }

  render() {
    return (
      <span className="gameboard">
        <table>
          <tbody>
            { this.indices.map((start) => {
              return (<tr key={start}>
                {[...Array(this.size).keys()].map((index) => {
                  const ind = start + index;
                  return (
                    <td key={ind} className={'b' + ind} onClick={this.props.clickHandler}>
                      {this.props.boardStr[ind]}
                    </td>
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
