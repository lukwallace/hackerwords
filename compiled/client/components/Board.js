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
                null,
                this.props.boardStr[0]
              ),
              React.createElement(
                "td",
                null,
                this.props.boardStr[1]
              ),
              React.createElement(
                "td",
                null,
                this.props.boardStr[2]
              ),
              React.createElement(
                "td",
                null,
                this.props.boardStr[3]
              )
            ),
            React.createElement(
              "tr",
              null,
              React.createElement(
                "td",
                null,
                this.props.boardStr[4]
              ),
              React.createElement(
                "td",
                null,
                this.props.boardStr[5]
              ),
              React.createElement(
                "td",
                null,
                this.props.boardStr[6]
              ),
              React.createElement(
                "td",
                null,
                this.props.boardStr[7]
              )
            ),
            React.createElement(
              "tr",
              null,
              React.createElement(
                "td",
                null,
                this.props.boardStr[8]
              ),
              React.createElement(
                "td",
                null,
                this.props.boardStr[9]
              ),
              React.createElement(
                "td",
                null,
                this.props.boardStr[10]
              ),
              React.createElement(
                "td",
                null,
                this.props.boardStr[11]
              )
            ),
            React.createElement(
              "tr",
              null,
              React.createElement(
                "td",
                null,
                this.props.boardStr[12]
              ),
              React.createElement(
                "td",
                null,
                this.props.boardStr[13]
              ),
              React.createElement(
                "td",
                null,
                this.props.boardStr[14]
              ),
              React.createElement(
                "td",
                null,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL0JvYXJkLmpzeCJdLCJuYW1lcyI6WyJCb2FyZCIsInByb3BzIiwiYm9hcmRTdHIiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxLOzs7QUFDSixpQkFBWUMsS0FBWixFQUFtQkMsUUFBbkIsRUFBNkI7QUFBQTs7QUFBQSx5R0FDckJELEtBRHFCO0FBRzVCOzs7OzZCQUVRO0FBQ1AsYUFDSTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBSyxxQkFBS0EsS0FBTCxDQUFXQyxRQUFYLENBQW9CLENBQXBCO0FBQUwsZUFERjtBQUVFO0FBQUE7QUFBQTtBQUFLLHFCQUFLRCxLQUFMLENBQVdDLFFBQVgsQ0FBb0IsQ0FBcEI7QUFBTCxlQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUsscUJBQUtELEtBQUwsQ0FBV0MsUUFBWCxDQUFvQixDQUFwQjtBQUFMLGVBSEY7QUFJRTtBQUFBO0FBQUE7QUFBSyxxQkFBS0QsS0FBTCxDQUFXQyxRQUFYLENBQW9CLENBQXBCO0FBQUw7QUFKRixhQURGO0FBT0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUsscUJBQUtELEtBQUwsQ0FBV0MsUUFBWCxDQUFvQixDQUFwQjtBQUFMLGVBREY7QUFFRTtBQUFBO0FBQUE7QUFBSyxxQkFBS0QsS0FBTCxDQUFXQyxRQUFYLENBQW9CLENBQXBCO0FBQUwsZUFGRjtBQUdFO0FBQUE7QUFBQTtBQUFLLHFCQUFLRCxLQUFMLENBQVdDLFFBQVgsQ0FBb0IsQ0FBcEI7QUFBTCxlQUhGO0FBSUU7QUFBQTtBQUFBO0FBQUsscUJBQUtELEtBQUwsQ0FBV0MsUUFBWCxDQUFvQixDQUFwQjtBQUFMO0FBSkYsYUFQRjtBQWFFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFLLHFCQUFLRCxLQUFMLENBQVdDLFFBQVgsQ0FBb0IsQ0FBcEI7QUFBTCxlQURGO0FBRUU7QUFBQTtBQUFBO0FBQUsscUJBQUtELEtBQUwsQ0FBV0MsUUFBWCxDQUFvQixDQUFwQjtBQUFMLGVBRkY7QUFHRTtBQUFBO0FBQUE7QUFBSyxxQkFBS0QsS0FBTCxDQUFXQyxRQUFYLENBQW9CLEVBQXBCO0FBQUwsZUFIRjtBQUlFO0FBQUE7QUFBQTtBQUFLLHFCQUFLRCxLQUFMLENBQVdDLFFBQVgsQ0FBb0IsRUFBcEI7QUFBTDtBQUpGLGFBYkY7QUFtQkU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUsscUJBQUtELEtBQUwsQ0FBV0MsUUFBWCxDQUFvQixFQUFwQjtBQUFMLGVBREY7QUFFRTtBQUFBO0FBQUE7QUFBSyxxQkFBS0QsS0FBTCxDQUFXQyxRQUFYLENBQW9CLEVBQXBCO0FBQUwsZUFGRjtBQUdFO0FBQUE7QUFBQTtBQUFLLHFCQUFLRCxLQUFMLENBQVdDLFFBQVgsQ0FBb0IsRUFBcEI7QUFBTCxlQUhGO0FBSUU7QUFBQTtBQUFBO0FBQUsscUJBQUtELEtBQUwsQ0FBV0MsUUFBWCxDQUFvQixFQUFwQjtBQUFMO0FBSkY7QUFuQkY7QUFEQTtBQURGLE9BREo7QUFnQ0Q7Ozs7RUF2Q2lCQyxNQUFNQyxTIiwiZmlsZSI6IkJvYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQm9hcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcywgYm9hcmRTdHIpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGQ+e3RoaXMucHJvcHMuYm9hcmRTdHJbMF19PC90ZD5cbiAgICAgICAgICAgICAgPHRkPnt0aGlzLnByb3BzLmJvYXJkU3RyWzFdfTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD57dGhpcy5wcm9wcy5ib2FyZFN0clsyXX08L3RkPlxuICAgICAgICAgICAgICA8dGQ+e3RoaXMucHJvcHMuYm9hcmRTdHJbM119PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZD57dGhpcy5wcm9wcy5ib2FyZFN0cls0XX08L3RkPlxuICAgICAgICAgICAgICA8dGQ+e3RoaXMucHJvcHMuYm9hcmRTdHJbNV19PC90ZD5cbiAgICAgICAgICAgICAgPHRkPnt0aGlzLnByb3BzLmJvYXJkU3RyWzZdfTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD57dGhpcy5wcm9wcy5ib2FyZFN0cls3XX08L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRkPnt0aGlzLnByb3BzLmJvYXJkU3RyWzhdfTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD57dGhpcy5wcm9wcy5ib2FyZFN0cls5XX08L3RkPlxuICAgICAgICAgICAgICA8dGQ+e3RoaXMucHJvcHMuYm9hcmRTdHJbMTBdfTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD57dGhpcy5wcm9wcy5ib2FyZFN0clsxMV19PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZD57dGhpcy5wcm9wcy5ib2FyZFN0clsxMl19PC90ZD5cbiAgICAgICAgICAgICAgPHRkPnt0aGlzLnByb3BzLmJvYXJkU3RyWzEzXX08L3RkPlxuICAgICAgICAgICAgICA8dGQ+e3RoaXMucHJvcHMuYm9hcmRTdHJbMTRdfTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD57dGhpcy5wcm9wcy5ib2FyZFN0clsxNV19PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gIH1cbn0iXX0=