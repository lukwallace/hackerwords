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
      'timeLeft': 10
    };
    var context = _this;
    var timerInterval = setInterval(function () {
      context.setState({
        'timeLeft': context.state.timeLeft - 1
      });

      if (context.state.timeLeft === 0) {
        clearInterval(timerInterval);
      }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL1RpbWVyLmpzeCJdLCJuYW1lcyI6WyJUaW1lciIsInByb3BzIiwic3RhdGUiLCJjb250ZXh0IiwidGltZXJJbnRlcnZhbCIsInNldEludGVydmFsIiwic2V0U3RhdGUiLCJ0aW1lTGVmdCIsImNsZWFySW50ZXJ2YWwiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxLOzs7QUFFSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhHQUNYQSxLQURXOztBQUdqQixVQUFLQyxLQUFMLEdBQWE7QUFDWCxrQkFBWTtBQURELEtBQWI7QUFHQSxRQUFJQyxlQUFKO0FBQ0EsUUFBSUMsZ0JBQWdCQyxZQUFZLFlBQVc7QUFDekNGLGNBQVFHLFFBQVIsQ0FBaUI7QUFDZixvQkFBWUgsUUFBUUQsS0FBUixDQUFjSyxRQUFkLEdBQXlCO0FBRHRCLE9BQWpCOztBQUlBLFVBQUdKLFFBQVFELEtBQVIsQ0FBY0ssUUFBZCxLQUEyQixDQUE5QixFQUFpQztBQUMvQkMsc0JBQWNKLGFBQWQ7QUFDRDtBQUNGLEtBUm1CLEVBUWpCLElBUmlCLENBQXBCO0FBUGlCO0FBZ0JsQjs7Ozs2QkFFUTtBQUNQLGFBQ0k7QUFBQTtBQUFBO0FBQUE7QUFDYyxhQUFLRixLQUFMLENBQVdLO0FBRHpCLE9BREo7QUFLRDs7OztFQTFCaUJFLE1BQU1DLFMiLCJmaWxlIjoiVGltZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBUaW1lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgJ3RpbWVMZWZ0JzogMTBcbiAgICB9XG4gICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgIHZhciB0aW1lckludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICBjb250ZXh0LnNldFN0YXRlKHtcbiAgICAgICAgJ3RpbWVMZWZ0JzogY29udGV4dC5zdGF0ZS50aW1lTGVmdCAtIDFcbiAgICAgIH0pXG5cbiAgICAgIGlmKGNvbnRleHQuc3RhdGUudGltZUxlZnQgPT09IDApIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lckludGVydmFsKTtcbiAgICAgIH1cbiAgICB9LCAxMDAwKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgVGltZSBMZWZ0OiB7dGhpcy5zdGF0ZS50aW1lTGVmdH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICB9XG5cbiAgXG59Il19