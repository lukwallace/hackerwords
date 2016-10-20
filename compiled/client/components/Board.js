"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Board = function (_React$Component) {
  _inherits(Board, _React$Component);

  function Board(props, boardStr) {
    _classCallCheck(this, Board);

    return _possibleConstructorReturn(this, (Board.__proto__ || Object.getPrototypeOf(Board)).call(this, props));
  }

  _createClass(Board, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "table",
          null,
          React.createElement(
            "tbody",
            null,
            React.createElement(
              "tr",
              null,
              React.createElement(
                "td",
                { className: "b0", onClick: this.props.clickHandler },
                this.props.boardStr[0]
              ),
              React.createElement(
                "td",
                { className: "b1", onClick: this.props.clickHandler },
                this.props.boardStr[1]
              ),
              React.createElement(
                "td",
                { className: "b2", onClick: this.props.clickHandler },
                this.props.boardStr[2]
              ),
              React.createElement(
                "td",
                { className: "b3", onClick: this.props.clickHandler },
                this.props.boardStr[3]
              )
            ),
            React.createElement(
              "tr",
              null,
              React.createElement(
                "td",
                { className: "b4", onClick: this.props.clickHandler },
                this.props.boardStr[4]
              ),
              React.createElement(
                "td",
                { className: "b5", onClick: this.props.clickHandler },
                this.props.boardStr[5]
              ),
              React.createElement(
                "td",
                { className: "b6", onClick: this.props.clickHandler },
                this.props.boardStr[6]
              ),
              React.createElement(
                "td",
                { className: "b7", onClick: this.props.clickHandler },
                this.props.boardStr[7]
              )
            ),
            React.createElement(
              "tr",
              null,
              React.createElement(
                "td",
                { className: "b8", onClick: this.props.clickHandler },
                this.props.boardStr[8]
              ),
              React.createElement(
                "td",
                { className: "b9", onClick: this.props.clickHandler },
                this.props.boardStr[9]
              ),
              React.createElement(
                "td",
                { className: "b10", onClick: this.props.clickHandler },
                this.props.boardStr[10]
              ),
              React.createElement(
                "td",
                { className: "b11", onClick: this.props.clickHandler },
                this.props.boardStr[11]
              )
            ),
            React.createElement(
              "tr",
              null,
              React.createElement(
                "td",
                { className: "b12", onClick: this.props.clickHandler },
                this.props.boardStr[12]
              ),
              React.createElement(
                "td",
                { className: "b13", onClick: this.props.clickHandler },
                this.props.boardStr[13]
              ),
              React.createElement(
                "td",
                { className: "b14", onClick: this.props.clickHandler },
                this.props.boardStr[14]
              ),
              React.createElement(
                "td",
                { className: "b15", onClick: this.props.clickHandler },
                this.props.boardStr[15]
              )
            )
          )
        )
      );
    }
  }]);

  return Board;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL0JvYXJkLmpzeCJdLCJuYW1lcyI6WyJCb2FyZCIsInByb3BzIiwiYm9hcmRTdHIiLCJjbGlja0hhbmRsZXIiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxLOzs7QUFDSixpQkFBWUMsS0FBWixFQUFtQkMsUUFBbkIsRUFBNkI7QUFBQTs7QUFBQSx5R0FDckJELEtBRHFCO0FBRzVCOzs7OzZCQUVRO0FBQ1AsYUFDSTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsa0JBQUksV0FBVSxJQUFkLEVBQW1CLFNBQVMsS0FBS0EsS0FBTCxDQUFXRSxZQUF2QztBQUFzRCxxQkFBS0YsS0FBTCxDQUFXQyxRQUFYLENBQW9CLENBQXBCO0FBQXRELGVBREY7QUFFRTtBQUFBO0FBQUEsa0JBQUksV0FBVSxJQUFkLEVBQW1CLFNBQVMsS0FBS0QsS0FBTCxDQUFXRSxZQUF2QztBQUFzRCxxQkFBS0YsS0FBTCxDQUFXQyxRQUFYLENBQW9CLENBQXBCO0FBQXRELGVBRkY7QUFHRTtBQUFBO0FBQUEsa0JBQUksV0FBVSxJQUFkLEVBQW1CLFNBQVMsS0FBS0QsS0FBTCxDQUFXRSxZQUF2QztBQUFzRCxxQkFBS0YsS0FBTCxDQUFXQyxRQUFYLENBQW9CLENBQXBCO0FBQXRELGVBSEY7QUFJRTtBQUFBO0FBQUEsa0JBQUksV0FBVSxJQUFkLEVBQW1CLFNBQVMsS0FBS0QsS0FBTCxDQUFXRSxZQUF2QztBQUFzRCxxQkFBS0YsS0FBTCxDQUFXQyxRQUFYLENBQW9CLENBQXBCO0FBQXREO0FBSkYsYUFERjtBQU9FO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxrQkFBSSxXQUFVLElBQWQsRUFBbUIsU0FBUyxLQUFLRCxLQUFMLENBQVdFLFlBQXZDO0FBQXNELHFCQUFLRixLQUFMLENBQVdDLFFBQVgsQ0FBb0IsQ0FBcEI7QUFBdEQsZUFERjtBQUVFO0FBQUE7QUFBQSxrQkFBSSxXQUFVLElBQWQsRUFBbUIsU0FBUyxLQUFLRCxLQUFMLENBQVdFLFlBQXZDO0FBQXNELHFCQUFLRixLQUFMLENBQVdDLFFBQVgsQ0FBb0IsQ0FBcEI7QUFBdEQsZUFGRjtBQUdFO0FBQUE7QUFBQSxrQkFBSSxXQUFVLElBQWQsRUFBbUIsU0FBUyxLQUFLRCxLQUFMLENBQVdFLFlBQXZDO0FBQXNELHFCQUFLRixLQUFMLENBQVdDLFFBQVgsQ0FBb0IsQ0FBcEI7QUFBdEQsZUFIRjtBQUlFO0FBQUE7QUFBQSxrQkFBSSxXQUFVLElBQWQsRUFBbUIsU0FBUyxLQUFLRCxLQUFMLENBQVdFLFlBQXZDO0FBQXNELHFCQUFLRixLQUFMLENBQVdDLFFBQVgsQ0FBb0IsQ0FBcEI7QUFBdEQ7QUFKRixhQVBGO0FBYUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGtCQUFJLFdBQVUsSUFBZCxFQUFtQixTQUFTLEtBQUtELEtBQUwsQ0FBV0UsWUFBdkM7QUFBc0QscUJBQUtGLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQixDQUFwQjtBQUF0RCxlQURGO0FBRUU7QUFBQTtBQUFBLGtCQUFJLFdBQVUsSUFBZCxFQUFtQixTQUFTLEtBQUtELEtBQUwsQ0FBV0UsWUFBdkM7QUFBc0QscUJBQUtGLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQixDQUFwQjtBQUF0RCxlQUZGO0FBR0U7QUFBQTtBQUFBLGtCQUFJLFdBQVUsS0FBZCxFQUFvQixTQUFTLEtBQUtELEtBQUwsQ0FBV0UsWUFBeEM7QUFBdUQscUJBQUtGLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQixFQUFwQjtBQUF2RCxlQUhGO0FBSUU7QUFBQTtBQUFBLGtCQUFJLFdBQVUsS0FBZCxFQUFvQixTQUFTLEtBQUtELEtBQUwsQ0FBV0UsWUFBeEM7QUFBdUQscUJBQUtGLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQixFQUFwQjtBQUF2RDtBQUpGLGFBYkY7QUFtQkU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGtCQUFJLFdBQVUsS0FBZCxFQUFvQixTQUFTLEtBQUtELEtBQUwsQ0FBV0UsWUFBeEM7QUFBdUQscUJBQUtGLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQixFQUFwQjtBQUF2RCxlQURGO0FBRUU7QUFBQTtBQUFBLGtCQUFJLFdBQVUsS0FBZCxFQUFvQixTQUFTLEtBQUtELEtBQUwsQ0FBV0UsWUFBeEM7QUFBdUQscUJBQUtGLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQixFQUFwQjtBQUF2RCxlQUZGO0FBR0U7QUFBQTtBQUFBLGtCQUFJLFdBQVUsS0FBZCxFQUFvQixTQUFTLEtBQUtELEtBQUwsQ0FBV0UsWUFBeEM7QUFBdUQscUJBQUtGLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQixFQUFwQjtBQUF2RCxlQUhGO0FBSUU7QUFBQTtBQUFBLGtCQUFJLFdBQVUsS0FBZCxFQUFvQixTQUFTLEtBQUtELEtBQUwsQ0FBV0UsWUFBeEM7QUFBdUQscUJBQUtGLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQixFQUFwQjtBQUF2RDtBQUpGO0FBbkJGO0FBREE7QUFERixPQURKO0FBZ0NEOzs7O0VBdkNpQkUsTUFBTUMsUyIsImZpbGUiOiJCb2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMsIGJvYXJkU3RyKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImIwXCIgb25DbGljaz17dGhpcy5wcm9wcy5jbGlja0hhbmRsZXJ9Pnt0aGlzLnByb3BzLmJvYXJkU3RyWzBdfTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJiMVwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuY2xpY2tIYW5kbGVyfT57dGhpcy5wcm9wcy5ib2FyZFN0clsxXX08L3RkPlxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYjJcIiBvbkNsaWNrPXt0aGlzLnByb3BzLmNsaWNrSGFuZGxlcn0+e3RoaXMucHJvcHMuYm9hcmRTdHJbMl19PC90ZD5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImIzXCIgb25DbGljaz17dGhpcy5wcm9wcy5jbGlja0hhbmRsZXJ9Pnt0aGlzLnByb3BzLmJvYXJkU3RyWzNdfTwvdGQ+XG4gICAgICAgICAgICA8L3RyPiBcbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImI0XCIgb25DbGljaz17dGhpcy5wcm9wcy5jbGlja0hhbmRsZXJ9Pnt0aGlzLnByb3BzLmJvYXJkU3RyWzRdfTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJiNVwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuY2xpY2tIYW5kbGVyfT57dGhpcy5wcm9wcy5ib2FyZFN0cls1XX08L3RkPlxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYjZcIiBvbkNsaWNrPXt0aGlzLnByb3BzLmNsaWNrSGFuZGxlcn0+e3RoaXMucHJvcHMuYm9hcmRTdHJbNl19PC90ZD5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImI3XCIgb25DbGljaz17dGhpcy5wcm9wcy5jbGlja0hhbmRsZXJ9Pnt0aGlzLnByb3BzLmJvYXJkU3RyWzddfTwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYjhcIiBvbkNsaWNrPXt0aGlzLnByb3BzLmNsaWNrSGFuZGxlcn0+e3RoaXMucHJvcHMuYm9hcmRTdHJbOF19PC90ZD5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImI5XCIgb25DbGljaz17dGhpcy5wcm9wcy5jbGlja0hhbmRsZXJ9Pnt0aGlzLnByb3BzLmJvYXJkU3RyWzldfTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJiMTBcIiBvbkNsaWNrPXt0aGlzLnByb3BzLmNsaWNrSGFuZGxlcn0+e3RoaXMucHJvcHMuYm9hcmRTdHJbMTBdfTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJiMTFcIiBvbkNsaWNrPXt0aGlzLnByb3BzLmNsaWNrSGFuZGxlcn0+e3RoaXMucHJvcHMuYm9hcmRTdHJbMTFdfTwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYjEyXCIgb25DbGljaz17dGhpcy5wcm9wcy5jbGlja0hhbmRsZXJ9Pnt0aGlzLnByb3BzLmJvYXJkU3RyWzEyXX08L3RkPlxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYjEzXCIgb25DbGljaz17dGhpcy5wcm9wcy5jbGlja0hhbmRsZXJ9Pnt0aGlzLnByb3BzLmJvYXJkU3RyWzEzXX08L3RkPlxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYjE0XCIgb25DbGljaz17dGhpcy5wcm9wcy5jbGlja0hhbmRsZXJ9Pnt0aGlzLnByb3BzLmJvYXJkU3RyWzE0XX08L3RkPlxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYjE1XCIgb25DbGljaz17dGhpcy5wcm9wcy5jbGlja0hhbmRsZXJ9Pnt0aGlzLnByb3BzLmJvYXJkU3RyWzE1XX08L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgfVxufSJdfQ==