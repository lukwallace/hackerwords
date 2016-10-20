'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    var context = _this;
    _this.state = {
      'curWord': 'ggg',
      'curIndexesUsed': []
    };

    _this.boardClick = function (event) {
      var clickLetter = event.target.innerHTML;
      var clickIndex = event.target.className;
      var newCurWord = context.state.curWord + clickLetter;
      var newCurIndexes = context.state.curIndexesUsed.concat(clickIndex);
      context.setState({
        'curWord': newCurWord,
        'curIndexesUsed': newCurIndexes
      });
      console.log('curWord: ', context.state.curWord);
      console.log('newCurWord: ', newCurWord);
    };
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        'Hello World! ^_^',
        React.createElement(Score, null),
        React.createElement(Board, { boardStr: 'abcdefghijklmnop', clickHandler: this.boardClick }),
        React.createElement(Timer, null),
        React.createElement(CurrentWord, { curWord: this.state.curWord }),
        React.createElement(PlayedWords, null)
      );
    }
  }]);

  return App;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJjb250ZXh0Iiwic3RhdGUiLCJib2FyZENsaWNrIiwiZXZlbnQiLCJjbGlja0xldHRlciIsInRhcmdldCIsImlubmVySFRNTCIsImNsaWNrSW5kZXgiLCJjbGFzc05hbWUiLCJuZXdDdXJXb3JkIiwiY3VyV29yZCIsIm5ld0N1ckluZGV4ZXMiLCJjdXJJbmRleGVzVXNlZCIsImNvbmNhdCIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsUUFBSUMsZUFBSjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYLGlCQUFXLEtBREE7QUFFWCx3QkFBa0I7QUFGUCxLQUFiOztBQUtBLFVBQUtDLFVBQUwsR0FBa0IsVUFBQ0MsS0FBRCxFQUFXO0FBQzNCLFVBQUlDLGNBQWNELE1BQU1FLE1BQU4sQ0FBYUMsU0FBL0I7QUFDQSxVQUFJQyxhQUFhSixNQUFNRSxNQUFOLENBQWFHLFNBQTlCO0FBQ0EsVUFBSUMsYUFBYVQsUUFBUUMsS0FBUixDQUFjUyxPQUFkLEdBQXdCTixXQUF6QztBQUNBLFVBQUlPLGdCQUFnQlgsUUFBUUMsS0FBUixDQUFjVyxjQUFkLENBQTZCQyxNQUE3QixDQUFvQ04sVUFBcEMsQ0FBcEI7QUFDQVAsY0FBUWMsUUFBUixDQUFpQjtBQUNmLG1CQUFXTCxVQURJO0FBRWYsMEJBQWtCRTtBQUZILE9BQWpCO0FBSUFJLGNBQVFDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCaEIsUUFBUUMsS0FBUixDQUFjUyxPQUF2QztBQUNBSyxjQUFRQyxHQUFSLENBQVksY0FBWixFQUE0QlAsVUFBNUI7QUFDRCxLQVhEO0FBUmlCO0FBb0JsQjs7Ozs2QkFFUTtBQUNQLGFBQ0k7QUFBQTtBQUFBO0FBQUE7QUFFRSw0QkFBQyxLQUFELE9BRkY7QUFHRSw0QkFBQyxLQUFELElBQU8sVUFBVSxrQkFBakIsRUFBcUMsY0FBYyxLQUFLUCxVQUF4RCxHQUhGO0FBSUUsNEJBQUMsS0FBRCxPQUpGO0FBS0UsNEJBQUMsV0FBRCxJQUFhLFNBQVMsS0FBS0QsS0FBTCxDQUFXUyxPQUFqQyxHQUxGO0FBTUUsNEJBQUMsV0FBRDtBQU5GLE9BREo7QUFVRDs7OztFQWxDZU8sTUFBTUMsUyIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICdjdXJXb3JkJzogJ2dnZycsXG4gICAgICAnY3VySW5kZXhlc1VzZWQnOiBbXVxuICAgIH1cblxuICAgIHRoaXMuYm9hcmRDbGljayA9IChldmVudCkgPT4ge1xuICAgICAgdmFyIGNsaWNrTGV0dGVyID0gZXZlbnQudGFyZ2V0LmlubmVySFRNTDtcbiAgICAgIHZhciBjbGlja0luZGV4ID0gZXZlbnQudGFyZ2V0LmNsYXNzTmFtZTtcbiAgICAgIHZhciBuZXdDdXJXb3JkID0gY29udGV4dC5zdGF0ZS5jdXJXb3JkICsgY2xpY2tMZXR0ZXI7XG4gICAgICB2YXIgbmV3Q3VySW5kZXhlcyA9IGNvbnRleHQuc3RhdGUuY3VySW5kZXhlc1VzZWQuY29uY2F0KGNsaWNrSW5kZXgpO1xuICAgICAgY29udGV4dC5zZXRTdGF0ZSh7XG4gICAgICAgICdjdXJXb3JkJzogbmV3Q3VyV29yZCxcbiAgICAgICAgJ2N1ckluZGV4ZXNVc2VkJzogbmV3Q3VySW5kZXhlc1xuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZygnY3VyV29yZDogJywgY29udGV4dC5zdGF0ZS5jdXJXb3JkKTtcbiAgICAgIGNvbnNvbGUubG9nKCduZXdDdXJXb3JkOiAnLCBuZXdDdXJXb3JkKTtcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgSGVsbG8gV29ybGQhIF5fXlxuICAgICAgICAgIDxTY29yZSAvPlxuICAgICAgICAgIDxCb2FyZCBib2FyZFN0cj17J2FiY2RlZmdoaWprbG1ub3AnfSBjbGlja0hhbmRsZXI9e3RoaXMuYm9hcmRDbGlja30vPlxuICAgICAgICAgIDxUaW1lciAvPlxuICAgICAgICAgIDxDdXJyZW50V29yZCBjdXJXb3JkPXt0aGlzLnN0YXRlLmN1cldvcmR9Lz5cbiAgICAgICAgICA8UGxheWVkV29yZHMgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICB9XG59Il19