'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        'Hello World! :-)',
        React.createElement(Score, null),
        React.createElement(Board, { boardStr: 'abcdefghijklmnop', props: { 'boardStr': 'abcdefghijklmnop' } }),
        React.createElement(Timer, null),
        React.createElement(CurrentWord, null)
      );
    }
  }]);

  return App;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEscUdBQ1hBLEtBRFc7QUFFbEI7Ozs7NkJBRVE7QUFDUCxhQUNJO0FBQUE7QUFBQTtBQUFBO0FBRUUsNEJBQUMsS0FBRCxPQUZGO0FBR0UsNEJBQUMsS0FBRCxJQUFPLFVBQVUsa0JBQWpCLEVBQXFDLE9BQU8sRUFBQyxZQUFZLGtCQUFiLEVBQTVDLEdBSEY7QUFJRSw0QkFBQyxLQUFELE9BSkY7QUFLRSw0QkFBQyxXQUFEO0FBTEYsT0FESjtBQVNEOzs7O0VBZmVDLE1BQU1DLFMiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICBIZWxsbyBXb3JsZCEgOi0pIFxuICAgICAgICAgIDxTY29yZSAvPlxuICAgICAgICAgIDxCb2FyZCBib2FyZFN0cj17J2FiY2RlZmdoaWprbG1ub3AnfSBwcm9wcz17eydib2FyZFN0cic6ICdhYmNkZWZnaGlqa2xtbm9wJ319IC8+XG4gICAgICAgICAgPFRpbWVyIC8+XG4gICAgICAgICAgPEN1cnJlbnRXb3JkIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgfVxufSJdfQ==