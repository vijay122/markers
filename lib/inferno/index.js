'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _infact = require('./infact');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bigRedPin = require('./img/big-red-pin.png');

var _bigRedPin2 = _interopRequireDefault(_bigRedPin);

var _greenFlag = require('./img/green-flag.png');

var _greenFlag2 = _interopRequireDefault(_greenFlag);

var _pin = require('./img/pin.png');

var _pin2 = _interopRequireDefault(_pin);

var _pin2x = require('./img/pin@2x.png');

var _pin2x2 = _interopRequireDefault(_pin2x);

var _pinHover = require('./img/pin-hover.png');

var _pinHover2 = _interopRequireDefault(_pinHover);

var _pinHover2x = require('./img/pin-hover@2x.png');

var _pinHover2x2 = _interopRequireDefault(_pinHover2x);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var imageOffset = {
  left: 15,
  top: 31
};

var numberCircle = {
  borderRadius: '50%',
  //behavior: url(PIE.htc);
  /* remove if you don't care about IE8  */
  width: '18px',
  height: '18px',
  padding: '8px',
  background: '#fff',
  border: '2px solid #666',
  color: '#666',
  textAlign: 'center',
  font: '22px Arial, sans-serif'
};

var stepLabel = {
  //behavior: url(PIE.htc);
  /* remove if you don't care about IE8  */
  width: '28px',
  height: '28px',
  background: '#fff',
  color: 'cornflowerblue',
  textAlign: 'center',
  font: '22px Arial, sans-serif',
  left: '20px',
  position: 'absolute'
};

var pinMarker = {
  //behavior: url(PIE.htc);
  /* remove if you don't care about IE8  */
  paddingBottom: '10px',
  width: '28px',
  height: '28px',
  textAlign: 'center',
  font: '22px Arial, sans-serif',
  position: 'absolute',
  top: '-10px'
};

var createVNode = _infact.Inferno.createVNode;

var Marker = function (_Component) {
  _inherits(Marker, _Component);

  function Marker(props) {
    _classCallCheck(this, Marker);

    var _this = _possibleConstructorReturn(this, (Marker.__proto__ || Object.getPrototypeOf(Marker)).call(this, props));

    _this.eventParameters = function (event) {
      return {
        event: event,
        anchor: _this.props.anchor,
        payload: _this.props.payload
      };
    };

    _this.handleClick = function (event) {
      _this.props.onClick && _this.props.onClick(_this.eventParameters(event));
    };

    _this.handleContextMenu = function (event) {
      _this.props.onContextMenu && _this.props.onContextMenu(_this.eventParameters(event));
    };

    _this.handleMouseOver = function (event) {
      _this.props.onMouseOver && _this.props.onMouseOver(_this.eventParameters(event));
      _this.setState({ hover: true });
    };

    _this.handleMouseOut = function (event) {
      _this.props.onMouseOut && _this.props.onMouseOut(_this.eventParameters(event));
      _this.setState({ hover: false });
    };

    _this.state = {
      hover: false
    };
    return _this;
  }

  // what do you expect to get back with the event


  _createClass(Marker, [{
    key: 'isRetina',

    // controls
    value: function () {
      return typeof window !== 'undefined' && window.devicePixelRatio >= 2;
    }

    // modifiers

  }, {
    key: 'isHover',
    value: function () {
      return typeof this.props.hover === 'boolean' ? this.props.hover : this.state.hover;
    }
  }, {
    key: 'image',
    value: function () {
      if (this.props.markerType == 'plot') {
        return _bigRedPin2.default;
      }
      if (this.props.markerType == 'finish') {
        return _greenFlag2.default;
      }
      return this.isRetina() ? this.isHover() ? _pinHover2x2.default : _pin2x2.default : this.isHover() ? _pinHover2.default : _pin2.default;
    }

    // lifecycle

  }, {
    key: 'componentDidMount',
    value: function () {
      var images = this.isRetina() ? [_pin2x2.default, _pinHover2x2.default] : [_pin2.default, _pinHover2.default];

      images.forEach(function (image) {
        var img = new window.Image();
        img.src = image;
      });
    }

    // delegators

  }, {
    key: 'render',

    // render

    value: function () {
      var _props = this.props,
          left = _props.left,
          top = _props.top,
          onClick = _props.onClick;

      var style = {
        position: 'absolute',
        transform: 'translate(' + (left - imageOffset.left) + 'px, ' + (top - imageOffset.top) + 'px)',
        cursor: onClick ? 'pointer' : 'default'
      };

      return createVNode(2, 'div', 'pigeon-click-block', createVNode(2, 'div', null, [createVNode(2, 'div', null, this.props.label, {
        'style': stepLabel
      }), createVNode(2, 'img', null, null, {
        'src': this.image(),
        'style': pinMarker,
        'alt': ''
      })]), {
        'style': style,
        'onClick': this.handleClick,
        'onContextMenu': this.handleContextMenu,
        'onMouseOver': this.handleMouseOver,
        'onMouseOut': this.handleMouseOut
      });
    }
  }]);

  return Marker;
}(_infact.Component);

Marker.propTypes = {};
exports.default = Marker;