'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Timer = function (_React$Component) {
  _inherits(Timer, _React$Component);

  function Timer(props) {
    _classCallCheck(this, Timer);

    var _this = _possibleConstructorReturn(this, (Timer.__proto__ || Object.getPrototypeOf(Timer)).call(this, props));

    _this.state = {
      'timeLeft': 120
    };
    var context = _this;
    setInterval(function () {
      // context.state.timeLeft -= 1;
      // context.render();
      context.setState({
        'timeLeft': context.state.timeLeft - 1
      });
      console.log(context.state.timeLeft);
    }, 1000);
    return _this;
  }

  _createClass(Timer, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        'Time Left: ',
        this.state.timeLeft
      );
    }
  }]);

  return Timer;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL1RpbWVyLmpzeCJdLCJuYW1lcyI6WyJUaW1lciIsInByb3BzIiwic3RhdGUiLCJjb250ZXh0Iiwic2V0SW50ZXJ2YWwiLCJzZXRTdGF0ZSIsInRpbWVMZWZ0IiwiY29uc29sZSIsImxvZyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEs7OztBQUVKLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEdBQ1hBLEtBRFc7O0FBR2pCLFVBQUtDLEtBQUwsR0FBYTtBQUNYLGtCQUFZO0FBREQsS0FBYjtBQUdBLFFBQUlDLGVBQUo7QUFDQUMsZ0JBQVksWUFBVztBQUNyQjtBQUNBO0FBQ0FELGNBQVFFLFFBQVIsQ0FBaUI7QUFDZixvQkFBWUYsUUFBUUQsS0FBUixDQUFjSSxRQUFkLEdBQXlCO0FBRHRCLE9BQWpCO0FBR0FDLGNBQVFDLEdBQVIsQ0FBWUwsUUFBUUQsS0FBUixDQUFjSSxRQUExQjtBQUNELEtBUEQsRUFPRyxJQVBIO0FBUGlCO0FBZWxCOzs7OzZCQUVRO0FBQ1AsYUFDSTtBQUFBO0FBQUE7QUFBQTtBQUNjLGFBQUtKLEtBQUwsQ0FBV0k7QUFEekIsT0FESjtBQUtEOzs7O0VBekJpQkcsTUFBTUMsUyIsImZpbGUiOiJUaW1lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFRpbWVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAndGltZUxlZnQnOiAxMjBcbiAgICB9XG4gICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgLy8gY29udGV4dC5zdGF0ZS50aW1lTGVmdCAtPSAxO1xuICAgICAgLy8gY29udGV4dC5yZW5kZXIoKTtcbiAgICAgIGNvbnRleHQuc2V0U3RhdGUoe1xuICAgICAgICAndGltZUxlZnQnOiBjb250ZXh0LnN0YXRlLnRpbWVMZWZ0IC0gMVxuICAgICAgfSlcbiAgICAgIGNvbnNvbGUubG9nKGNvbnRleHQuc3RhdGUudGltZUxlZnQpO1xuICAgIH0sIDEwMDApXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICBUaW1lIExlZnQ6IHt0aGlzLnN0YXRlLnRpbWVMZWZ0fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gIH1cblxuICBcbn0iXX0=