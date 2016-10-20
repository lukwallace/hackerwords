'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Score = function (_React$Component) {
  _inherits(Score, _React$Component);

  function Score(props) {
    _classCallCheck(this, Score);

    var _this = _possibleConstructorReturn(this, (Score.__proto__ || Object.getPrototypeOf(Score)).call(this, props));

    _this.state = {
      'score': 0
    };
    return _this;
  }

  _createClass(Score, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        'Score: ',
        this.state.score
      );
    }
  }]);

  return Score;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL1Njb3JlLmpzeCJdLCJuYW1lcyI6WyJTY29yZSIsInByb3BzIiwic3RhdGUiLCJzY29yZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEs7OztBQUNKLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYLGVBQVM7QUFERSxLQUFiO0FBRmlCO0FBS2xCOzs7OzZCQUVRO0FBQ1AsYUFDSTtBQUFBO0FBQUE7QUFBQTtBQUNVLGFBQUtBLEtBQUwsQ0FBV0M7QUFEckIsT0FESjtBQUtEOzs7O0VBZGlCQyxNQUFNQyxTIiwiZmlsZSI6IlNjb3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU2NvcmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgJ3Njb3JlJzogMFxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIFNjb3JlOiB7dGhpcy5zdGF0ZS5zY29yZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICB9XG59Il19