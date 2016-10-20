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

    _this.rowSize = 4;

    _this.state = {
      'curWord': '',
      'curIndexesUsed': []
    };

    _this.getLastClickIndex = function () {
      if (this.state.curIndexesUsed.length === 0) {
        return null;
      }
      return this.state.curIndexesUsed[this.state.curIndexesUsed.length - 1];
    };

    _this.getClickIndexNumber = function (ci) {
      return Number(ci.slice(1));
    };

    _this.isInUsedIndexes = function (clickIndex) {
      return _this.state.curIndexesUsed.indexOf(clickIndex) !== -1;
    };

    _this.boardClick = function (event) {
      var clickLetter = event.target.innerHTML;
      var clickIndex = event.target.className;

      //check adjacent
      var isAdjacent = function isAdjacent() {
        var lastClick = _this.getLastClickIndex();
        if (lastClick === null) {
          return true;
        }
        var lastClickIndex = _this.getClickIndexNumber(lastClick);
        var thisClickIndex = _this.getClickIndexNumber(clickIndex);

        var lastClickRow = Math.floor(lastClickIndex / _this.rowSize);
        var lastClickCol = lastClickIndex % _this.rowSize;
        var thisClickRow = Math.floor(thisClickIndex / _this.rowSize);
        var thisClickCol = thisClickIndex % _this.rowSize;

        if (Math.abs(lastClickRow - thisClickRow) > 1) {
          return false;
        }
        if (Math.abs(lastClickCol - thisClickCol) > 1) {
          return false;
        }
        return true;
      };

      if (clickIndex === _this.getLastClickIndex()) {
        console.log('word finalized as ', context.state.curWord);
        //evaluate word here
        context.setState({
          'curWord': '',
          'curIndexesUsed': []
        });
      } else {
        if (isAdjacent() && !_this.isInUsedIndexes(clickIndex)) {
          var newCurWord = context.state.curWord + clickLetter;
          var newCurIndexes = context.state.curIndexesUsed.concat(clickIndex);
          //re-evaluate using mutable objects as state params?
          context.setState({
            'curWord': newCurWord,
            'curIndexesUsed': newCurIndexes
          });
        }
      }
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
        'Current Word: ',
        this.state.curWord,
        React.createElement(PlayedWords, null)
      );
    }
  }]);

  return App;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJjb250ZXh0Iiwicm93U2l6ZSIsInN0YXRlIiwiZ2V0TGFzdENsaWNrSW5kZXgiLCJjdXJJbmRleGVzVXNlZCIsImxlbmd0aCIsImdldENsaWNrSW5kZXhOdW1iZXIiLCJjaSIsIk51bWJlciIsInNsaWNlIiwiaXNJblVzZWRJbmRleGVzIiwiY2xpY2tJbmRleCIsImluZGV4T2YiLCJib2FyZENsaWNrIiwiZXZlbnQiLCJjbGlja0xldHRlciIsInRhcmdldCIsImlubmVySFRNTCIsImNsYXNzTmFtZSIsImlzQWRqYWNlbnQiLCJsYXN0Q2xpY2siLCJsYXN0Q2xpY2tJbmRleCIsInRoaXNDbGlja0luZGV4IiwibGFzdENsaWNrUm93IiwiTWF0aCIsImZsb29yIiwibGFzdENsaWNrQ29sIiwidGhpc0NsaWNrUm93IiwidGhpc0NsaWNrQ29sIiwiYWJzIiwiY29uc29sZSIsImxvZyIsImN1cldvcmQiLCJzZXRTdGF0ZSIsIm5ld0N1cldvcmQiLCJuZXdDdXJJbmRleGVzIiwiY29uY2F0IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUVqQixRQUFJQyxlQUFKOztBQUVBLFVBQUtDLE9BQUwsR0FBZSxDQUFmOztBQUVBLFVBQUtDLEtBQUwsR0FBYTtBQUNYLGlCQUFXLEVBREE7QUFFWCx3QkFBa0I7QUFGUCxLQUFiOztBQUtBLFVBQUtDLGlCQUFMLEdBQXlCLFlBQVc7QUFDbEMsVUFBRyxLQUFLRCxLQUFMLENBQVdFLGNBQVgsQ0FBMEJDLE1BQTFCLEtBQXFDLENBQXhDLEVBQTJDO0FBQ3pDLGVBQU8sSUFBUDtBQUNEO0FBQ0QsYUFBTyxLQUFLSCxLQUFMLENBQVdFLGNBQVgsQ0FBMEIsS0FBS0YsS0FBTCxDQUFXRSxjQUFYLENBQTBCQyxNQUExQixHQUFtQyxDQUE3RCxDQUFQO0FBQ0QsS0FMRDs7QUFPQSxVQUFLQyxtQkFBTCxHQUEyQixVQUFTQyxFQUFULEVBQWE7QUFDdEMsYUFBT0MsT0FBT0QsR0FBR0UsS0FBSCxDQUFTLENBQVQsQ0FBUCxDQUFQO0FBQ0QsS0FGRDs7QUFJQSxVQUFLQyxlQUFMLEdBQXVCLFVBQUNDLFVBQUQsRUFBZ0I7QUFDckMsYUFBUSxNQUFLVCxLQUFMLENBQVdFLGNBQVgsQ0FBMEJRLE9BQTFCLENBQWtDRCxVQUFsQyxNQUFrRCxDQUFDLENBQTNEO0FBQ0QsS0FGRDs7QUFJQSxVQUFLRSxVQUFMLEdBQWtCLFVBQUNDLEtBQUQsRUFBVztBQUMzQixVQUFJQyxjQUFjRCxNQUFNRSxNQUFOLENBQWFDLFNBQS9CO0FBQ0EsVUFBSU4sYUFBYUcsTUFBTUUsTUFBTixDQUFhRSxTQUE5Qjs7QUFHQTtBQUNBLFVBQUlDLGFBQWEsU0FBYkEsVUFBYSxHQUFNO0FBQ3JCLFlBQUlDLFlBQVksTUFBS2pCLGlCQUFMLEVBQWhCO0FBQ0EsWUFBR2lCLGNBQWMsSUFBakIsRUFBdUI7QUFDckIsaUJBQU8sSUFBUDtBQUNEO0FBQ0QsWUFBSUMsaUJBQWlCLE1BQUtmLG1CQUFMLENBQXlCYyxTQUF6QixDQUFyQjtBQUNBLFlBQUlFLGlCQUFpQixNQUFLaEIsbUJBQUwsQ0FBeUJLLFVBQXpCLENBQXJCOztBQUVBLFlBQUlZLGVBQWVDLEtBQUtDLEtBQUwsQ0FBV0osaUJBQWlCLE1BQUtwQixPQUFqQyxDQUFuQjtBQUNBLFlBQUl5QixlQUFnQkwsaUJBQWlCLE1BQUtwQixPQUExQztBQUNBLFlBQUkwQixlQUFlSCxLQUFLQyxLQUFMLENBQVdILGlCQUFpQixNQUFLckIsT0FBakMsQ0FBbkI7QUFDQSxZQUFJMkIsZUFBZ0JOLGlCQUFpQixNQUFLckIsT0FBMUM7O0FBRUEsWUFBR3VCLEtBQUtLLEdBQUwsQ0FBU04sZUFBZUksWUFBeEIsSUFBd0MsQ0FBM0MsRUFBOEM7QUFDNUMsaUJBQU8sS0FBUDtBQUNEO0FBQ0QsWUFBR0gsS0FBS0ssR0FBTCxDQUFTSCxlQUFlRSxZQUF4QixJQUF3QyxDQUEzQyxFQUE4QztBQUM1QyxpQkFBTyxLQUFQO0FBQ0Q7QUFDRCxlQUFPLElBQVA7QUFDRCxPQXBCRDs7QUFzQkEsVUFBR2pCLGVBQWUsTUFBS1IsaUJBQUwsRUFBbEIsRUFBNEM7QUFDMUMyQixnQkFBUUMsR0FBUixDQUFZLG9CQUFaLEVBQWtDL0IsUUFBUUUsS0FBUixDQUFjOEIsT0FBaEQ7QUFDQTtBQUNBaEMsZ0JBQVFpQyxRQUFSLENBQWlCO0FBQ2YscUJBQVcsRUFESTtBQUVmLDRCQUFrQjtBQUZILFNBQWpCO0FBSUQsT0FQRCxNQU9PO0FBQ0wsWUFBR2QsZ0JBQWdCLENBQUMsTUFBS1QsZUFBTCxDQUFxQkMsVUFBckIsQ0FBcEIsRUFBc0Q7QUFDcEQsY0FBSXVCLGFBQWFsQyxRQUFRRSxLQUFSLENBQWM4QixPQUFkLEdBQXdCakIsV0FBekM7QUFDQSxjQUFJb0IsZ0JBQWdCbkMsUUFBUUUsS0FBUixDQUFjRSxjQUFkLENBQTZCZ0MsTUFBN0IsQ0FBb0N6QixVQUFwQyxDQUFwQjtBQUNBO0FBQ0FYLGtCQUFRaUMsUUFBUixDQUFpQjtBQUNmLHVCQUFXQyxVQURJO0FBRWYsOEJBQWtCQztBQUZILFdBQWpCO0FBSUQ7QUFDRjtBQUNGLEtBOUNEO0FBMUJpQjtBQXlFbEI7Ozs7NkJBRVE7QUFDUCxhQUNJO0FBQUE7QUFBQTtBQUFBO0FBRUUsNEJBQUMsS0FBRCxPQUZGO0FBR0UsNEJBQUMsS0FBRCxJQUFPLFVBQVUsa0JBQWpCLEVBQXFDLGNBQWMsS0FBS3RCLFVBQXhELEdBSEY7QUFJRSw0QkFBQyxLQUFELE9BSkY7QUFBQTtBQUtpQixhQUFLWCxLQUFMLENBQVc4QixPQUw1QjtBQU1FLDRCQUFDLFdBQUQ7QUFORixPQURKO0FBVUQ7Ozs7RUF2RmVLLE1BQU1DLFMiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuXG4gICAgdGhpcy5yb3dTaXplID0gNDtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAnY3VyV29yZCc6ICcnLFxuICAgICAgJ2N1ckluZGV4ZXNVc2VkJzogW11cbiAgICB9XG5cbiAgICB0aGlzLmdldExhc3RDbGlja0luZGV4ID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZih0aGlzLnN0YXRlLmN1ckluZGV4ZXNVc2VkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLmN1ckluZGV4ZXNVc2VkW3RoaXMuc3RhdGUuY3VySW5kZXhlc1VzZWQubGVuZ3RoIC0gMV07XG4gICAgfVxuXG4gICAgdGhpcy5nZXRDbGlja0luZGV4TnVtYmVyID0gZnVuY3Rpb24oY2kpIHtcbiAgICAgIHJldHVybiBOdW1iZXIoY2kuc2xpY2UoMSkpO1xuICAgIH1cblxuICAgIHRoaXMuaXNJblVzZWRJbmRleGVzID0gKGNsaWNrSW5kZXgpID0+IHtcbiAgICAgIHJldHVybiAodGhpcy5zdGF0ZS5jdXJJbmRleGVzVXNlZC5pbmRleE9mKGNsaWNrSW5kZXgpICE9PSAtMSk7XG4gICAgfVxuXG4gICAgdGhpcy5ib2FyZENsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICB2YXIgY2xpY2tMZXR0ZXIgPSBldmVudC50YXJnZXQuaW5uZXJIVE1MO1xuICAgICAgdmFyIGNsaWNrSW5kZXggPSBldmVudC50YXJnZXQuY2xhc3NOYW1lO1xuXG5cbiAgICAgIC8vY2hlY2sgYWRqYWNlbnRcbiAgICAgIHZhciBpc0FkamFjZW50ID0gKCkgPT4ge1xuICAgICAgICB2YXIgbGFzdENsaWNrID0gdGhpcy5nZXRMYXN0Q2xpY2tJbmRleCgpO1xuICAgICAgICBpZihsYXN0Q2xpY2sgPT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbGFzdENsaWNrSW5kZXggPSB0aGlzLmdldENsaWNrSW5kZXhOdW1iZXIobGFzdENsaWNrKTtcbiAgICAgICAgdmFyIHRoaXNDbGlja0luZGV4ID0gdGhpcy5nZXRDbGlja0luZGV4TnVtYmVyKGNsaWNrSW5kZXgpO1xuXG4gICAgICAgIHZhciBsYXN0Q2xpY2tSb3cgPSBNYXRoLmZsb29yKGxhc3RDbGlja0luZGV4IC8gdGhpcy5yb3dTaXplKTtcbiAgICAgICAgdmFyIGxhc3RDbGlja0NvbCA9IChsYXN0Q2xpY2tJbmRleCAlIHRoaXMucm93U2l6ZSk7XG4gICAgICAgIHZhciB0aGlzQ2xpY2tSb3cgPSBNYXRoLmZsb29yKHRoaXNDbGlja0luZGV4IC8gdGhpcy5yb3dTaXplKTtcbiAgICAgICAgdmFyIHRoaXNDbGlja0NvbCA9ICh0aGlzQ2xpY2tJbmRleCAlIHRoaXMucm93U2l6ZSk7XG4gICAgICAgIFxuICAgICAgICBpZihNYXRoLmFicyhsYXN0Q2xpY2tSb3cgLSB0aGlzQ2xpY2tSb3cpID4gMSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZihNYXRoLmFicyhsYXN0Q2xpY2tDb2wgLSB0aGlzQ2xpY2tDb2wpID4gMSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH07XG5cbiAgICAgIGlmKGNsaWNrSW5kZXggPT09IHRoaXMuZ2V0TGFzdENsaWNrSW5kZXgoKSkge1xuICAgICAgICBjb25zb2xlLmxvZygnd29yZCBmaW5hbGl6ZWQgYXMgJywgY29udGV4dC5zdGF0ZS5jdXJXb3JkKTtcbiAgICAgICAgLy9ldmFsdWF0ZSB3b3JkIGhlcmVcbiAgICAgICAgY29udGV4dC5zZXRTdGF0ZSh7XG4gICAgICAgICAgJ2N1cldvcmQnOiAnJyxcbiAgICAgICAgICAnY3VySW5kZXhlc1VzZWQnOiBbXVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmKGlzQWRqYWNlbnQoKSAmJiAhdGhpcy5pc0luVXNlZEluZGV4ZXMoY2xpY2tJbmRleCkpIHtcbiAgICAgICAgICB2YXIgbmV3Q3VyV29yZCA9IGNvbnRleHQuc3RhdGUuY3VyV29yZCArIGNsaWNrTGV0dGVyO1xuICAgICAgICAgIHZhciBuZXdDdXJJbmRleGVzID0gY29udGV4dC5zdGF0ZS5jdXJJbmRleGVzVXNlZC5jb25jYXQoY2xpY2tJbmRleCk7XG4gICAgICAgICAgLy9yZS1ldmFsdWF0ZSB1c2luZyBtdXRhYmxlIG9iamVjdHMgYXMgc3RhdGUgcGFyYW1zP1xuICAgICAgICAgIGNvbnRleHQuc2V0U3RhdGUoe1xuICAgICAgICAgICAgJ2N1cldvcmQnOiBuZXdDdXJXb3JkLFxuICAgICAgICAgICAgJ2N1ckluZGV4ZXNVc2VkJzogbmV3Q3VySW5kZXhlc1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIEhlbGxvIFdvcmxkISBeX15cbiAgICAgICAgICA8U2NvcmUgLz5cbiAgICAgICAgICA8Qm9hcmQgYm9hcmRTdHI9eydhYmNkZWZnaGlqa2xtbm9wJ30gY2xpY2tIYW5kbGVyPXt0aGlzLmJvYXJkQ2xpY2t9Lz5cbiAgICAgICAgICA8VGltZXIgLz5cbiAgICAgICAgICBDdXJyZW50IFdvcmQ6IHt0aGlzLnN0YXRlLmN1cldvcmR9XG4gICAgICAgICAgPFBsYXllZFdvcmRzIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgfVxufSJdfQ==