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
      'curWord': ''
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL0N1cnJlbnRXb3JkLmpzeCJdLCJuYW1lcyI6WyJDdXJyZW50V29yZCIsInByb3BzIiwic3RhdGUiLCJjdXJXb3JkIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsVzs7O0FBQ0osdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwSEFDWEEsS0FEVzs7QUFHakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1gsaUJBQVc7QUFEQSxLQUFiO0FBSGlCO0FBTWxCOzs7OzZCQUVRO0FBQ1AsYUFDSTtBQUFBO0FBQUE7QUFBQTtBQUNpQixhQUFLQSxLQUFMLENBQVdDO0FBRDVCLE9BREo7QUFLRDs7OztFQWZ1QkMsTUFBTUMsUyIsImZpbGUiOiJDdXJyZW50V29yZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEN1cnJlbnRXb3JkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgJ2N1cldvcmQnOiAnJ1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIEN1cnJlbnQgV29yZDoge3RoaXMuc3RhdGUuY3VyV29yZH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICB9XG59Il19