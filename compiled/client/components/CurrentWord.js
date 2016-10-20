'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CurrentWord = function (_React$Component) {
  _inherits(CurrentWord, _React$Component);

  function CurrentWord(props) {
    _classCallCheck(this, CurrentWord);

    var _this = _possibleConstructorReturn(this, (CurrentWord.__proto__ || Object.getPrototypeOf(CurrentWord)).call(this, props));

    _this.state = {
      'curWord': props.curWord
    };
    return _this;
  }

  _createClass(CurrentWord, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        'Current Word: ',
        this.state.curWord
      );
    }
  }]);

  return CurrentWord;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL0N1cnJlbnRXb3JkLmpzeCJdLCJuYW1lcyI6WyJDdXJyZW50V29yZCIsInByb3BzIiwic3RhdGUiLCJjdXJXb3JkIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsVzs7O0FBQ0osdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwSEFDWEEsS0FEVzs7QUFHakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1gsaUJBQVdELE1BQU1FO0FBRE4sS0FBYjtBQUhpQjtBQU1sQjs7Ozs2QkFFUTtBQUNQLGFBQ0k7QUFBQTtBQUFBO0FBQUE7QUFDaUIsYUFBS0QsS0FBTCxDQUFXQztBQUQ1QixPQURKO0FBS0Q7Ozs7RUFmdUJDLE1BQU1DLFMiLCJmaWxlIjoiQ3VycmVudFdvcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBDdXJyZW50V29yZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICdjdXJXb3JkJzogcHJvcHMuY3VyV29yZFxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIEN1cnJlbnQgV29yZDoge3RoaXMuc3RhdGUuY3VyV29yZH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICB9XG59Il19