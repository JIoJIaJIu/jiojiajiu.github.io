/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ];

const MAX_WIDTH = 500;

const utils = {
  min: function (val) {
    if (Array.isArray(val)) return Math.min.apply(null, val);
    return Math.min.apply(null, arguments);
  },

  max: function (val) {
    if (Array.isArray(val)) return Math.max.apply(null, val);
    return Math.max.apply(null, arguments);
  },

  getWidth: function (el) {
    return el.getBoundingClientRect().width;
  },

  getHeight: function (el) {
    return el.getBoundingClientRect().height;
  },

  width: function (el) {
    return el.getBoundingClientRect().width;
  },

  height: function (el) {
    return el.getBoundingClientRect().height;
  },

  extend: function () {
    return Object.assign.apply(null, arguments);
  },

  last: function (arr) {
    if (!Array.isArray(arr)) return null;
    return arr[arr.length - 1];
  },

  forIn: function (obj, cb) {
    if (!cb) return;

    for (let k in obj) {
      cb(obj[k], k);
    }
  },

  forEach: function (arr, cb) {
    if (!cb || !arr) return;

    for (let i = 0, length = arr.length; i < length; i++) {
      cb(arr[i], i);
    }
  },

  round: function (val, precision) {
    precision = precision || 0;
    let mult = Math.pow(10, precision);
    return Math.round(val * mult) / mult;
  },

  get SVG_NS() {
    return 'http://www.w3.org/2000/svg';
  },

  erase: function (node) {
    while (node.childNodes.length) {
      node.removeChild(node.firstChild);
    }
  },

  // requires classList support
  addClass: function (node, className) {
    node.classList.add(className);
  },

  // requires classList support
  removeClass: function (node, className) {
    node.classList.remove(className);
  },

  hasClass: function (node, className) {
    return node.classList.contains(className);
  },

  offsetTop: function (node) {
    let rect = node.getBoundingClientRect();
    let t = rect.top;
    let x = t + (pageYOffset || document.documentElement.scrollTop);
    return x;
  },

  offsetLeft: function (node) {
    let rect = node.getBoundingClientRect();
    let l = rect.left;
    let x = l + (pageXOffset || document.documentElement.scrollLeft);
    return x;
  },

  isChild: function (a, b) {
    while (a && a !== document.documentElement) {
      a = a.parentNode;

      if (a === b)
        return true;
    }

    return false;
  },

  requestWidth: function () {
    let _ = utils;

    let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (width > MAX_WIDTH * _.dpr) width = MAX_WIDTH * _.dpr;
    return width;
  },

  get dpr() {
    return 1;
  },

  get yRatio() {
    MAX_WIDTH / screen.width;
  },

  get hRatio() {
    MAX_HEIGHT / screen.height;
  },

  shake(node) {
    const _ = utils;
    const SHAKE_MS = 820;
    if (_.hasClass(node, 'shaked')) return;

    _.addClass(node, 'shaked');
    setTimeout(() => {
      _.removeClass(node, 'shaked')
    }, SHAKE_MS)
  }
}

module.exports = utils


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const html = __webpack_require__(17);
const _ = __webpack_require__(0);
__webpack_require__(18);

const yPadding = 30;
const SHIFT = 10;

function Popup () {
  this._container = document.body;
  this._el = this._init();

  this._el.addEventListener('click', (e) => {
    e.preventDefault();
    this._onClick && this._onClick();
  });
}

Popup.prototype = {
  show: function (atX, atY) {
    let el = this._el;

    let y = atY
    let x = this._findBestX(atX);

    this._el.style.left = `${x}px`;
    this._el.style.top = `${y}px`;
    this._el.style.display = 'block';
    //TODO;
    this._w = _.width(this._el);
  },

  hide: function () {
    this._el.style.display = 'none';
  },

  setTitle: function (title, onClick) {
    this._el.querySelector('.popup_title').innerHTML = title || '';
  },

  showTitle: function () {
    if (!this._titleIsHidden) return;
    this._el.querySelector('.popup_title').style.display = 'block';
    this._titleIsHidden = false;
  },

  hideTitle: function () {
    if (this._titleIsHidden) return;
    this._el.querySelector('.popup_title').style.display = 'none';
    this._titleIsHidden = true;
  },

  setOnClick: function (onClick) {
    this._onClick = onClick;
  },

  _findBestX: function (atX) {
    let el = this._el;
    let w = this.width;
    let maxW = el.parentNode.getBoundingClientRect().width;
    let x1 = atX - w - SHIFT;
    if (x1 < 0) {
      let diff1 = x1 * 1
      let x2 = atX + SHIFT * 2;
      if (x2 + w < maxW) return x2;
      let diff2 = x2 + w - maxW;

      console.log(diff2, diff1);
      return (diff2 > diff1) ? 0 : maxW - w;
    }

    return x1;
  },
  /**
   * @param {Array} desc
   *  @item {Object}
   *   @key {String} title
   *   @key {String} color
   *   @key {String} value
   */
  setDescription: function (desc) {
    let node = this._el.querySelector('.popup_description');
    _.erase(node);

    _.forEach(desc, d => {
      let row = document.createElement('div');
      let title = document.createElement('span');
      let v = document.createElement('span');

      row.appendChild(title);
      title.innerHTML = d.title;
      row.appendChild(v);
      v.innerHTML = this._formatValue(d.value);
      v.style.color = d.color;
      node.appendChild(row);
    })
  },

  _formatValue: function (value) {
    if (!value) return 0;
    let v = [];
    while (value) {
      let q = value % 1000;
      value = Math.floor(value / 1000)
      if (value) {
        q = `${q}`;
        if (q.length == 2) {
          q = `0${q}`;
        } else if (q.length == 1) {
          q = `00${q}`;
        }
      }
      v.unshift(q);
    }

    return v.join(' ');
  },

  get el() {
    return this._el;
  },

  get width() {
    return this._w || 100;
  },

  // TODO: rename
  _init: function () {
    let doc = document.createElement('div');
    doc.innerHTML = html;
    let el = doc.firstChild;
    this._container.appendChild(el);
    return el;
  },
}

module.exports = {
  Popup: Popup,
  singleton: new Popup()
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const _ = __webpack_require__(0)

function Graph() {
  this._data = null; // required
  this._container = null; // required
  this._el = null; // required;
  this._options = null;
  this._grid = null;

  this._interfaces = [];
}

Graph.prototype = {
  drawGrid: function () {
    if (!this._grid) return;

    let minXValue = Number.POSITIVE_INFINITY;
    let maxXValue = Number.NEGATIVE_INFINITY;
    let minYValue = Number.POSITIVE_INFINITY;
    let maxYValue = Number.NEGATIVE_INFINITY;

    _.forIn(this._data, record => {
      if (!record.enabled) return;
      minXValue = _.min(record.visibleMinXValue, minXValue);
      maxXValue = _.max(record.visibleMaxXValue, maxXValue);
      minYValue = _.min(record.visibleMinYValue, minYValue);
      maxYValue = _.max(record.visibleMaxYValue, maxYValue);
    });

    this._grid.draw(minXValue, maxXValue, minYValue, maxYValue);
  },

  // TODO: move out to data provider
  // TODO: rename
  computeData: function (data, disabled) {
    this._data = {};

    _.forIn(data.types, (v, id) => {
      if (v === 'x') return;

      let enabled = true;
      if (disabled) {
        enabled = disabled.indexOf(id) === -1;
      }
      this._data[id] = {
        id: id,
        enabled: enabled
      };
    })

    let x = data.columns[0].slice(1);

    _.forEach(data.columns, column => {
      if (column[0] === 'x') return;

      let id = column[0]
      let record = this._data[id];
      record.x = x;
      record.y = column.slice(1);
      record.color = data.colors[id];
      record.name = data.names[id];
    });
  },

  enable: function (id) {
    let data = this._data[id];
    if (!data || data.enabled)
      return;

    data.enabled = true;
    this.draw(this._xScale, this._xTranslate, true);
  },

  disable: function (name) {
    let data = this._data[name];
    if (!data || !data.enabled)
      return;

    data.enabled = false;
    this.draw(this._xScale, this._xTranslate, true);
  },

  getAnyEnabledRecord: function () {
    for (let k in this._data) {
      if (this._data[k].enabled) return this._data[k];
    }

    return null;
  },

  getVisibleMinXValue: function () {
    let visibleMinXValue;
    _.forIn(this._data, (record, id) => {
      if (!record.enabled) return;

      visibleMinXValue = record.visibleMinXValue;
    })
    return visibleMinXValue;
  },

  getVisibleMaxXValue: function () {
    let visibleMaxXValue;
    _.forIn(this._data, (record, id) => {
      if (!record.enabled) return;

      visibleMaxXValue = record.visibleMaxXValue;
    })

    return visibleMaxXValue;
  },

  getValues: function (xPoint) {
    let record;
    for (let k in this._data) {
      record = this._data[k];
      if (record.enabled) break;
    }
    let xValue = this.interpolateX(xPoint, record.minXValue, record.xRatio);
    let i = this.getClosestIndexByXValue(xValue, record.x);

    let values = [];
    _.forIn(this._data, (record, id) => {
      if (!record.enabled) return;

      let x = record.x;
      let y = record.y;
      values.push({
        id: record.id,
        name: record.name,
        xValue: x[i],
        yValue: y[i],
        color: record.color,
        i: i
      })
    })
    return values;
  },

  //TODO:
  getMinXValue: function () {
    for (let k in this._data) {
      let record = this._data[k];
      if (!record.enabled) continue;

      return record.minXValue;
    }
  },

  //TODO:
  getMaxXValue: function () {
    for (let k in this._data) {
      let record = this._data[k];
      if (!record.enabled) continue;

      return record.maxXValue;
    }
  },

  interpolateXValue: function (x, minXValue, xRatio) {
    let val = xRatio * (x - minXValue) * this._xScale;
    let p = (this._xTranslate * this.width);

    return _.round(val - p);
  },

  interpolateX: function (x, minXValue, xRatio) {
    let p = (this._xTranslate * this.width);
    x = p + x;

    return minXValue + x / (xRatio * this._xScale);
  },

  interpolateYValue: function (y, empty, yRatio) {
    let y1 = yRatio * y * this._yScale;
    return this.height - y1;
  },

  interpolateY: function (y, minYValue, yRatio) {
    return _.round((this.height - y) / (yRatio * this._yScale));
  },

  getClosestIndexByXValue: function (xValue, x) {
    let s, e;
    for (let i = 0, length = x.length; i < length; i++) {
      e = i;
      s = i == 0 ? 0 : i - 1;
      if (x[i] > xValue) {
        break;
      }
    }
    let i = (x[e] - xValue) > (xValue - x[s]) ? s : e;
    return i;
  },

  //TODO:
  get state() {
    return {
      xTranslate: this._xTranslate,
      xScale: this._xScale,
      isZoomed: this._options.isZoomed
    }
  },

  get container() {
    return this._container;
  },

  get marginTop() {
    let marginTop = parseFloat(getComputedStyle(this._el).marginTop);
    delete this.marginTop;
    Object.defineProperty(this, 'marginTop', { get() { return marginTop; } });
    return marginTop;
  },

  get marginLeft() {
    let marginLeft = parseFloat(getComputedStyle(this._el).marginLeft);
    delete this.marginLeft;
    Object.defineProperty(this, 'marginLeft', { get() { return marginLeft; } });
    return marginLeft;
  },

  get marginBottom() {
    let marginBottom = parseFloat(getComputedStyle(this._el).marginBottom);
    delete this.marginBottom;
    Object.defineProperty(this, 'marginBottom', { get() { return marginBottom; } });
    return marginBottom;
  },

  // static
  get height() {
    let height = _.getHeight(this._ctx.canvas)
    delete this.height;
    Object.defineProperty(this, 'height', { get() { return height; } });
    return height;
  },

  // static
  get width() {
    let width = _.getWidth(this._ctx.canvas)
    delete this.width;
    Object.defineProperty(this, 'width', { get() { return width; } });
    return width;
  },

  get disabled() {
    let d = [];
    _.forIn(this._data, (record, id) => {
      if (record.enabled) return;
      d.push(id);
    });

    return d;
  },

  // TODO: move out
  addInterface: function (i) {
    (!this.supportInterface(i))
      this._interfaces.push(i);
  },

  supportInterface: function (i)  {
    return this._interfaces.indexOf(i) !== -1;
  }
}

module.exports = Graph;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const html = __webpack_require__(16);
const _ = __webpack_require__(0);
const moment = __webpack_require__(5);
const Popup = __webpack_require__(1).singleton;

// https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
let supportsPassive = false;
try {
  let opts = Object.defineProperty({}, 'passive', {
    get: function() {
      supportsPassive = true;
    }
  });
  window.addEventListener("testPassive", null, opts);
  window.removeEventListener("testPassive", null, opts);
} catch (e) {}

function GraphInteractive (graph) {
  this._graph = graph;
  this._el = null;
  this._canvas = null;

  this.wrap(graph);
  this.render();
  this.bindHover(this._canvas);
}

GraphInteractive.prototype = {
  wrap: function () {
    throw new Error("Implement wrap function");
  },

  bindHover: function (node) {
    if (!this._graph.supportInterface('IInteractive')) {
      throw new Error("Graph should support IInteractive");
    }

    let selected = null;
    let touching = false;

    // TODO:
    node.addEventListener('mouseenter', (e) => {
      this.bindKeyboard && this.bindKeyboard();
    });

    node.addEventListener('mousemove', (e) => {
      if (touching) return;
      if (e.target !== node) return;
      let x = e.offsetX - this._graph.marginLeft;
      if (x < 0) return;
      if (x > this._graph.width) return;

      this._graph.IInteractive_select(x, e);
      selected = true;
    });

    node.addEventListener('touchstart', (e) => {
      if (e.target !== node) return;
      touching = true;
      console.log('touchstart');

      let touch = e.touches[0];
      let x = touch.clientX - this._graph.marginLeft;
      if (x < 0) return;
      x -= _.offsetLeft(node);
      if (x > this._graph.width) return;

      this._graph.IInteractive_select(x, e);
      selected = true;
    }, supportsPassive ? {passive: false} : false);

    node.addEventListener('mouseleave', (e) => {
      if (e.relatedTarget === Popup.el ||
        _.isChild(e.relatedTarget, Popup.el)) return;


      requestAnimationFrame(() => {
        this._graph.IInteractive_deselect();
        selected = false;
      });
    })

    node.addEventListener('click', (e) => {
      if (touching) return;
      if (selected) this._graph.IInteractive_click();
    })
  },

  render: function () {
    let container = this._graph.container;

    let doc = document.createElement('div');
    doc.innerHTML = html;
    let el = this._el = doc.firstChild;
    container.appendChild(el);
    let svg = el.querySelector('svg');
    this._canvas = svg;
  },

  showPopup: function (x, y, options) {
    // TODO
    if (options.xValue !== undefined) {
      Popup.setTitle(this._formatTimestamp(options.xValue, options.isZoomed, options.xValueStep));
      Popup.showTitle();
    } else {
      Popup.hideTitle();
    }
    Popup.setOnClick(options.onClick);
    Popup.setDescription(options.desc);
    Popup.show(x, y);
  },

  hidePopup: function () {
    Popup.hide();
  },

  // Sat, 20 Apr 2019
  // 01:00
  // 01:15
  _formatTimestamp: function (t, isZoomed, xValueStep) {
    let d = new Date(t);
    const HOUR = 1000 * 60 * 60;

    //TODO:
    if (!isZoomed) {
      return `${moment.getDay(d)}, ${d.getUTCDate()} ${moment.getMon(d)} ${d.getUTCFullYear()}`;
    } else {
      if (xValueStep < HOUR) {
        return moment.getRoundHoursWithMinutes(d);
      } else {
        return moment.getRoundHours(d);
      }
    }
  },

}

module.exports = GraphInteractive;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

const _ = __webpack_require__(0);
const html = __webpack_require__(20);
const moment = __webpack_require__(5);
__webpack_require__(21);


const defaultOptions = {
  xStep: 100 * _.dpr,
  yStep: 60 * _.dpr,
  minXStep: 50 * _.dpr,
  maxXStep: 130 * _.dpr
}

function Grid(graph, options) {
  this._graph = graph;
  this._container = graph.container;
  this._svg = null;
  this._options = _.extend({}, defaultOptions, options);
  this._drawn = false;
  this._xStep = this._options.xStep;

  this._xAxisNode = null;
  this._yAxisNode = null;

  this.render();
}

Grid.prototype = {
  draw: function (minXValue, maxXValue, minYValue, maxYValue) {
    if (!this._drawn) {
      this._drawXAxis(minXValue, maxXValue);
      this._drawYAxis(minYValue, maxYValue);
      this._drawn = true;
    } else {
      this._redrawXAxis(minXValue, maxXValue);
      this._drawYAxis(minYValue, maxYValue);
    }
  },

  drawDualY: function (minValues, maxValues, colors) {
    if (minValues.length > 2 || maxValues.length > 2)
      throw new Error("Not supported");

    if (!this._drawn) {
      this._drawXAxis(minValues[0][0], maxValues[0][0]);
      this._drawn = true;
    } else {
      this._redrawXAxis(minValues[0][0], maxValues[0][0]);
    }

    this._drawYAxis(minValues[0][1], maxValues[0][1], colors[0], false);
    minValues.length == 2 && this._drawYTitles(minValues[1][1], maxValues[1][1], colors[1], true);
  },

  render: function() {
    let doc = document.createElement('div');
    doc.innerHTML = html;
    let el = doc.firstChild;
    this._container.appendChild(el);
    this._svg = el.querySelector('svg');
  },

  _clearRect: function () {
    while (this._svg.childNodes.length) {
      this._svg.removeChild(this._svg.firstChild);
    }
  },

  _drawXAxis: function (minXValue, maxXValue) {
    let self = this;
    let g = document.createElementNS(_.SVG_NS, 'g')
    let l = document.createElementNS(_.SVG_NS, 'line');
    g.appendChild(l);
    this._svg.appendChild(g);

    let graph = this._graph;
    let x1 = graph.marginLeft;
    let x2 = x1 + graph.width;
    let y = graph.marginTop + graph.height;
    l.setAttribute('x1', x1);
    l.setAttribute('y1', y);
    l.setAttribute('x2', x2);
    l.setAttribute('y2', y);

    this._xAxisNode = document.createElementNS(_.SVG_NS, 'g');
    g.appendChild(this._xAxisNode);

    let steps = graph.width / this._xStep;
    this._xValueStep = (maxXValue - minXValue) / steps;
    this._drawXTitles(minXValue, maxXValue);
  },

  _redrawXAxis: function (minXValue, maxXValue) {
    let steps = (maxXValue - minXValue) / this._xValueStep;
    this._xStep = this._graph.width / steps;
    this._clearNode(this._xAxisNode);

    if ((this._xStep < this._options.minXStep) ||
        (this._xStep > this._options.maxXStep)) {

      this._xStep = this._options.xStep;
      steps = this._graph.width / this._xStep;
      this._xValueStep = (maxXValue - minXValue) / steps;
    }

    this._drawXTitles(minXValue, maxXValue);
  },

  _drawXTitles: function (minXValue, maxXValue) {
    let graph = this._graph;
    let x1 = graph.marginLeft;
    let y = graph.marginTop + graph.height;
    let self = this;
    let steps = graph.width / this._xStep;

    //TODO: hardcode for timestamp
    //min step
    {
      const H_HOUR = 1000 *  60 * 60;
      const M20 = 1000 * 60 * 20;
      const M5 = 1000 * 60 * 5;
      if (this._xValueStep < M5 * 4) {
        this._xValueStep = M5;
        steps = (maxXValue - minXValue) / this._xValueStep;
        this._xStep = this._graph.width / steps;
     } else if (this._xValueStep < M20 * 3) {
        this._xValueStep = M20;
        steps = (maxXValue - minXValue) / this._xValueStep;
        this._xStep = this._graph.width / steps;
      } else if (this._xValueStep < H_HOUR * 2) {
        this._xValueStep = H_HOUR;
        steps = (maxXValue - minXValue) / this._xValueStep;
        this._xStep = this._graph.width / steps;
      }
    }

    let xConvertor = this._getXConvertor('timestamp', minXValue, minXValue + this._xValueStep);
    for (let i = 0; i <= steps; i++) {
      let xValue = i === 0 ? minXValue : minXValue + this._xValueStep * i;
      drawTitle(x1 + i * this._xStep, y + graph.marginBottom / 2, xValue, i === steps);
    }

    function drawTitle(x, y, xValue, isLast) {
      let text = document.createElementNS(_.SVG_NS, 'text');
      self._xAxisNode.appendChild(text);
      text.setAttribute('x', x)
      text.setAttribute('y', y)
      text.innerHTML = xConvertor(xValue);
      isLast ? text.setAttribute('text-anchor', 'end') : null;
    }
  },

  _drawYAxis: function (minYValue, maxYValue, color, right) {
    if (!this._yAxisNode) {
      this._yAxisNode = document.createElementNS(_.SVG_NS, 'g')
      this._svg.appendChild(this._yAxisNode);
    } else {
      this._clearNode(this._yAxisNode);
    }

    let self = this;
    let graph = this._graph;
    let steps = graph.height / this._options.yStep;
    let yValueStep = (maxYValue - minYValue) / steps;

    for (i = 0; i <= steps; i++) {
      let yValue = i * yValueStep;
      drawLine(graph.height - i * this._options.yStep, yValue, i === 0);
    }

    this._drawYTitles(minYValue, maxYValue, color, right);

    function drawLine(height, yValue, isFirst) {
      let x1 = graph.marginLeft;
      let x2 = x1 + graph.width;
      let y = graph.marginTop + height;
      if (!isFirst) {
        let l = document.createElementNS(_.SVG_NS, 'line');
        self._yAxisNode.appendChild(l);
        l.setAttribute('x1', x1);
        l.setAttribute('y1', y);
        l.setAttribute('x2', x2);
        l.setAttribute('y2', y);
      }
    }
  },

  _drawYTitles(minYValue, maxYValue, color, right) {
    let self = this;
    let graph = this._graph;
    let steps = graph.height / this._options.yStep;
    let yValueStep = (maxYValue - minYValue) / steps;
    let yConvertor = this._getYConvertor('number');

    let x1 = right ? graph.width + graph.marginLeft : graph.marginLeft;
    for (i = 0; i <= steps; i++) {
      let yValue = i * yValueStep;
      let y = graph.height - i * this._options.yStep + graph.marginTop;
      drawTitle(this._yAxisNode, x1, y, yValue);
    }

    function drawTitle(node, x, y, yValue) {
      let text = document.createElementNS(_.SVG_NS, 'text');
      node.appendChild(text);
      text.setAttribute('x', x)
      text.setAttribute('y', y - 5) // TODO: 5?
      color && text.setAttribute('fill', color)
      right && text.setAttribute('text-anchor', 'end');
      text.innerHTML = yConvertor(yValue);
    }
  },

  _getYConvertor: function (type) {
    if (type !== 'number')
      throw new Error(`The type ${type} is not supported`);

    let M = Math.pow(10, 6);
    let K = Math.pow(10, 3);
    return function (yValue) {
      if (yValue > M) {
        return `${_.round(yValue / M)}M`
      } else if (yValue > K * 10) {
        return `${_.round(yValue / K)}K`
      } else {
        return _.round(yValue);
      }
    }
  },


  _getXConvertor: function (type, firstXValue, secondXValue) {
    if (type !== 'timestamp')
      throw new Error(`The type ${type} is not supported`);

    const DAY = 1000 * 60 * 60 * 24;
    const Q_DAY = 1000 * 60 * 60 * 24 / 4;
    //TODO
    const H_HOUR = 1000 *  60 * 60;
    let diff = secondXValue - firstXValue;

    if (diff > DAY) {
      return function (value) {
        let d = new Date(value);
        return `${d.getDate()} ${moment.getMon(d)}`;
      }
    } else if (diff > Q_DAY && diff < H_HOUR * 2) {
      return function (value) {
        let d = new Date(value);
        return `${moment.getRoundHours(d)} ${d.getDate()} ${moment.getMon(d)}`;
      }
    } else if (diff < H_HOUR * 2) {
      //TODO
      return function (value) {
        let d = new Date(value);
        return `${moment.getRoundHoursWithMinutes(d)}`;
      }
    } else {
      return function (value) {
        let d = new Date(value);
        return moment.getRoundHours(d);
      }
    }
  },

  _clearNode: function (node) {
    while (node.childNodes.length) {
      node.removeChild(node.firstChild);
    }
  }
}

module.exports = Grid


/***/ }),
/* 5 */
/***/ (function(module, exports) {

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ];

const moment = {
  getRoundHours: function (d) {
    let h = d.getUTCHours();
    let m = d.getUTCMinutes();
    if (m >= 30) h += 1;

    h = h === 24 ? 0 : h;
    h = `${h}`;
    h = (h.length === 2) ? h : `0${h}`;

    return `${h}:00`;
  },

  getRoundHoursWithMinutes: function (d) {
    let h = d.getUTCHours();
    let m = d.getUTCMinutes();

    h = h === 24 ? 0 : h;
    h = `${h}`;
    h = (h.length === 2) ? h : `0${h}`;

    m = `${m}`
    m = (m.length === 2) ? m : `0${m}`;

    return `${h}:${m}`;
  },

  getMonth: function (d) {
    let n = d.getUTCMonth();
    return months[n];
  },

  getMon: function (d) {
    let n = d.getUTCMonth();
    return months[n].substr(0, 3);
  },

  getDay: function (d) {
    let n = d.getUTCDay();
    return days[n].substr(0, 3);
  },
}

module.exports = moment;


/***/ }),
/* 6 */
/***/ (function(module, exports) {


const HOST = ''

function DataProvider() {
  this._data = {}
  this._dataByDays = {}
}

DataProvider.prototype = {
  load: function (id, cb) {
    if (this._data[id])
      return cb && cb(null, this._data[id]);

    let xhr = new XMLHttpRequest();
    let self = this;
    xhr.addEventListener('load', function (e) {
      if (xhr.status !== 200) {
        return cb && cb(xhr.status);
      }

      let data = xhr.response;
      data.id = id;
      self._data[id] = data;
      cb && cb(null, data);
    })

    xhr.open('GET', this._getPath(`${id}/overview.json`));
    xhr.responseType = 'json';
    xhr.send();
  },

  loadByTimestamp: function(id, timestamp, cb) {
    let data = this._dataByDays[id];
    if (!data) {
      data = this._dataByDays[id] = {}
    }

    let date = new Date(timestamp);
    let m = `${date.getMonth() + 1}`;
    m = (m.length === 2) ? m : `0${m}`;
    let prefix = `${date.getFullYear()}-${m}`
    let month = data[prefix];

    if (!month) {
      month = data[prefix] = {}
    }
    let d = `${date.getDate()}`;
    d = (d.length === 2) ? d : `0${d}`;

    data = month[d];
    if (data) {
      return cb(null, data);
    }

    let xhr = new XMLHttpRequest();
    let self = this;
    xhr.addEventListener('load', function (e) {
      if (xhr.status !== 200) {
        return cb && cb(xhr.status);
      }

      let data = xhr.response;
      data.id = id;
      month[d] = data;
      cb && cb(null, data);
    })

    xhr.open('GET', this._getPath(`${id}/${prefix}/${d}.json`));
    xhr.responseType = 'json';
    xhr.send();
  },

  getData: function (id) {
    let data = this._data[id]
    if (!data) {
      throw new Error('Load first data before usage');
    }

    return data
  },

  _getPath: function (path) {
    return `${HOST}${path}`;
  }
}

module.exports = new DataProvider();


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

const _ = __webpack_require__(0)
const html = __webpack_require__(34)
__webpack_require__(35);

const Graph = __webpack_require__(2);
const Grid = __webpack_require__(4)


const defaultOptions = {
  width: 500,
  height: 100
}

/**
 *
 * options {Object}
 *  @key {Boolean} withGrid
 *  @key {Boolean} scaleY
 *  @key {Boolean} disabled
 */
function HistogramGraph(container, data, options) {
  this._container = container;
  this._options = _.extend({}, defaultOptions, options);
  this._canvas = null;
  this._el = null;
  this._ctx = null;
  this._data = null;
  this._grid = options.withGrid ? new Grid(this) : null;
  //TODO:
  this._interfaces = [];

  this._xScale = 1;
  this._yScale = 1;
  this._xTranslate = 0;

  this._stack = [];

  this.computeData(data, this._options.disabled);
  this.render();
  this.draw();
}

HistogramGraphProto.prototype = Object.create(Graph.prototype);
HistogramGraph.prototype = new HistogramGraphProto();

function HistogramGraphProto () {
  Graph.call(this);

  this.draw = function (xScale, xTranslate, highlightX) {
    this._xScale = xScale || this._xScale;
    this._xTranslate = xTranslate === undefined ? this._xTranslate : xTranslate;

    this._ctx.clearRect(0, 0, this.width, this.height);
    this._stack = [];

    _.forIn(this._data, (bar, id) => {
      if (!bar.enabled) return;
      this._drawBar(bar.x, bar.y, bar, highlightX)
    })

    // TODO:
    if (this._grid) this.drawGrid();
  };

  this.render = function () {
    let doc = document.createElement('div');
    doc.innerHTML = html;
    let el = this._el = doc.firstChild;
    this._container.appendChild(el);

    this._canvas = el.querySelector('canvas');
    this._canvas.setAttribute('width', this._options.width);
    this._canvas.setAttribute('height', this._options.height);
    this._ctx = this._canvas.getContext('2d');
  };

  this.select = function (x) {
    this.draw(this._xScale, this._xTranslate, x);
  };

  this.deselect = function () {
    this.draw(this._xScale, this._xTranslate);
  };

  this._drawBar = function (x, y, bar, highlightX) {
    let minXValue = bar.minXValue = x[0];
    let maxXValue = bar.maxXValue = _.last(x);
    let xRatio = bar.xRatio = this.width / (maxXValue - minXValue);

    let minYValue = bar.minYValue = 0;
    let Y = y;
    if (this._options.scaleY) {
      let minXValue = this.interpolateX(0, bar.minXValue, bar.xRatio);
      let maxXValue = this.interpolateX(this.width, bar.minXValue, bar.xRatio);
      let minI = this.getClosestIndexByXValue(minXValue, bar.x)
      let maxI = this.getClosestIndexByXValue(maxXValue, bar.x)
      Y = Y.slice(minI, maxI);
    }
    let maxYValue = bar.maxYValue = _.max(Y);
    let yRatio = bar.yRatio = this.height / (maxYValue - minYValue);

    let xStep = (this.width / x.length) * this._xScale;
    this._ctx.fillStyle = bar.color;

    if (highlightX) {
      //this._ctx.globalAlpha = 0.5;
      let highlightXValue = this.interpolateX(highlightX, bar.minXValue, bar.xRatio);
      let j = this.getClosestIndexByXValue(highlightXValue, bar.x);
      let x1 = this.interpolateXValue(x[0], minXValue, xRatio);
      let y1;
      for (i = 0; i < x.length - 1; i++) {
        y1 = this.interpolateYValue(y[i], null, yRatio);
        let x2 = this.interpolateXValue(x[i + 1], minXValue, xRatio)
        this._ctx.globalAlpha = (i === j) ? 1 : 0.5;

        this._ctx.fillRect(x1, y1, x2 - x1, this.height - y1);
        x1 = x2;
      }
      this._ctx.globalAlpha = (i === j) ? 1 : 0.5;
      this._ctx.fillRect(x1, y1, x1, this.height - y1);
    } else {
      this._ctx.globalAlpha = 1;
      let x1 = this.interpolateXValue(x[0], minXValue, xRatio);
      let y1;
      for (i = 0; i < x.length - 1; i++) {
        y1 = this.interpolateYValue(y[i], null, yRatio);
        let x2 = this.interpolateXValue(x[i + 1], minXValue, xRatio)

        this._ctx.fillRect(x1, y1, x2 - x1, this.height - y1);
        x1 = x2;
      }
      this._ctx.fillRect(x1, y1, xStep, this.height - y1);
    }

    bar.visibleMinXValue = this.interpolateX(0, minXValue, xRatio);
    bar.visibleMaxXValue = this.interpolateX(this.width, minXValue, xRatio);
    bar.visibleMinYValue = this.interpolateY(this.height, minYValue, yRatio);
    bar.visibleMaxYValue = this.interpolateY(0, minYValue, yRatio);
  };

  this.getClosestIndexByXValue = function (xValue, x) {
    let i = 1;
    for (let length = x.length; i < length; i++) {
      if (x[i] > xValue) {
        return i - 1;
      }
    }
    return i - 1;
  }
}

module.exports = HistogramGraph;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

const _ = __webpack_require__(0)
const html = __webpack_require__(36);
__webpack_require__(37)

const InteractiveBase = __webpack_require__(3);
const Popup = __webpack_require__(1).singleton;

function HistogramInteractive(graph) {
  InteractiveBase.call(this, graph);

  this._xValue = null;
  this._onClick = this._onClick.bind(this);
}

HistogramInteractive.prototype = Object.assign({}, InteractiveBase.prototype, {
  wrap: function () {
    let graph = this._graph;
    let self = this;
    graph.addInterface('IInteractive');

    graph.IInteractive_select = function (x) {
      graph.select(x);
      let values = graph.getValues(x);
      let xValue;
      let desc = [];
      _.forEach(values, value => {
        desc.push({
          title: value.name,
          value: value.yValue,
          color: value.color
        })

        xValue = value.xValue;
      })

      self._xValue = xValue;
      let y = _.offsetTop(self._el);
      x += _.offsetLeft(self._el);
      self.showPopup(x, y, {
        xValue: xValue,
        onClick: self._onClick,
        desc: desc,
        // TODO
        isZoomed: graph.state.isZoomed
      })
    }

    graph.IInteractive_deselect = function () {
      graph.deselect();
      self.hidePopup();
    }

    graph.IInteractive_click = function () {
      self._onClick();
    }
  },

  render: function () {
    let container = this._graph.container;

    let doc = document.createElement('div');
    doc.innerHTML = html;
    let el = this._el = doc.firstChild;
    this._canvas = this._el // TODO:
    container.appendChild(el);
  },

  _onClick: function (e) {
    let event = document.createEvent('Event');
    event.initEvent('zoom', true, true);

    event.xValue = this._xValue;
    event.xTranslate = this._graph.state.xTranslate;
    event.xScale = this._graph.state.xScale;

    this._canvas.dispatchEvent(event);
  },
})

module.exports = HistogramInteractive;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

const _ = __webpack_require__(0);

module.exports = {
  SLIDER_HEIGHT: 47 * _.dpr,
  PREVIEW_HEIGHT: 47 * _.dpr,
  CANVAS_HEIGHT: 41 * _.dpr,

  SLIDER_LEFT_WIDTH: 14 * _.dpr,
  SLIDER_RIGHT_WIDTH: 14 * _.dpr,
  SLIDER_BORDER: 3 * _.dpr
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(12)

const _ = __webpack_require__(0)
const Chart = __webpack_require__(13);
const dataProvider = __webpack_require__(6);

let mode = 0
const modes = ['light', 'dark'];


window.addEventListener('load', () => {
  let chart1 = new Chart('.g1');
  dataProvider.load(1, function (err, data) {
    if (err) return;
    chart1.draw(data, { title: 'Followers' });
  })

  let chart2 = new Chart('.g2');
  dataProvider.load(2, function (err, data) {
    if (err) return;
    chart2.draw(data, { title: 'Interactions' });
  })


  let chart3 = new Chart('.g3');
  dataProvider.load(3, function (err, data) {
    if (err) return;

    chart3.determineDriver(data);
    chart3.draw(data, { title: 'Messages' });
  })

  let chart4 = new Chart('.g4');
  dataProvider.load(4, function (err, data) {
    if (err) return;

    chart4.determineDriver(data);
    chart4.draw(dataProvider.getData(4), { title: 'Views' });
  })

  let chart5 = new Chart('.g5');
  dataProvider.load(5, function (err, data) {
    if (err) return;

    chart5.determineDriver(data);
    chart5.draw(dataProvider.getData(5), { title: 'Apps' });
  })

  let modeSwitcher = document.querySelector('#mode-switcher');
  setModeSwitcherText();
  modeSwitcher.addEventListener('click', function (e) {
    e.preventDefault();
    if (mode  === 0) {
      _.addClass(document.body, 'dark');
      mode = 1;
    } else {
      _.removeClass(document.body, 'dark');
      mode = 0;
    }
    setModeSwitcherText();
  })
  function setModeSwitcherText() {
    let text = 'Switch to';
    text += mode === 0 ? ' Night Mode' : ' Day Mode';
    modeSwitcher.innerHTML = text;
  }
});


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

const _ = __webpack_require__(0)
const DataProvider = __webpack_require__(6)

const AreaDriver = __webpack_require__(14)
const PieDriver = __webpack_require__(23)
const LineDriver = __webpack_require__(27)
const HistogramDriver = __webpack_require__(33)
const StackedHistogramDriver = __webpack_require__(38)

const Plot = __webpack_require__(41)
const Preview = __webpack_require__(44)
const CheckboxGroup = __webpack_require__(47)
const Popup = __webpack_require__(1).singleton;

function Chart(s, options) {
  this._container = document.querySelector(s);
  this.setDriver(options && options.driver);

  this._plot = new Plot(this._container);
  this._preview = null;
  this._checkboxGroup = null;
  // TODO:
  this._dataId = null;
  this._title = null;
  this._isZoomed = false;
  this._xScale = null;
  this._xTranslate = null;

  this._container.style.width = `${_.requestWidth()}px`;

  this._container.addEventListener('zoom', (e) => {
    e.stopPropagation();
    this.zoomIn(e.xValue, e.xScale, e.xTranslate);
  })

  this._container.addEventListener('zoomToPie', (e) => {
    e.stopPropagation();
    this.zoomToPie(e.xValue, e.xScale, e.xTranslate, e.data);
  })

  this._container.addEventListener('zoomout', (e) => {
    e.stopPropagation();
    this.zoomOut();
  })
}

Chart.prototype = {
  draw: function (data, options) {
    // TODO:
    this._dataId = data.id;
    this._title = options && options.title;

    this._plot.draw(data, this._driver, options);
    this._preview = new Preview(this._container, {onChange: this._onChange.bind(this)});
    this._preview.draw(data, this._previewDriver);

    this.drawCheckboxes(data);
  },

  drawCheckboxes: function (data, disabled) {
    if (!this._checkboxGroup) {
     this._checkboxGroup = new CheckboxGroup(this._container);
    }
    let minChecked = 1;
    if (this._driver.name === 'pie' || this._driver.name === 'area') minChecked = 2;
    this._checkboxGroup.draw(data, {
      onChange: (k, enabled) => { this._toggleGraph(k, enabled) },
      disabled: disabled,
      minChecked: minChecked
    })
  },

  determineDriver: function (data) {
    let type = data.types.y0; // TODO:

    if (type === 'bar') {
      if (data.stacked) {
        return this.setDriver('stackedHistogram');
      }

      return this.setDriver('histogram');
    }

    if (type === 'area') {
      return this.setDriver('area');
    }

    if (type === 'pie') {
      return this.setDriver('pie');
    }

    return this.setDriver('line');
  },

  setDriver: function (str) {
    if (this._driver && this._driver.name === str) return;

    switch (str) {
      case 'pie':
        this._driver = new PieDriver();
        this._previewDriver = new AreaDriver();
        break;
      case 'histogram':
        this._driver = new HistogramDriver();
        this._previewDriver = this._driver;
        break;
      case 'stackedHistogram':
        this._driver = new StackedHistogramDriver();
        this._previewDriver = this._driver;
        break;
      case 'area':
        this._driver = new AreaDriver();
        this._previewDriver = this._driver;
        break;
      case 'line':
      default:
        this._driver = new LineDriver();
        this._previewDriver = this._driver;
        break;
    }
  },

  zoomIn: function (xValue, xScale, xTranslate)  {
    if (this._isZoomed) {
    // TODO: plot components
      let node = this._plot.container.querySelector('.zoom_out')
      _.shake(node);
      return;
    }

    DataProvider.loadByTimestamp(this._dataId, xValue, (err, data) => {
      if (err) return;
        this._zoomIn(xValue, data);

        this._xScale = xScale;
        this._xTranslate = xTranslate;
    });
  },

  zoomToPie: function (xValue, xScale, xTranslate, data) {
    if (this._isZoomed) return;
    DataProvider.loadByTimestamp(this._dataId, xValue, (err, data) => {
      //TODO: merge with zoomIn
      if (err) return;
        Popup.hide();
        this._plot.disappear();
        this._preview.disappear();
        let disabled = this._plot.graph.disabled;
        this.drawCheckboxes(data, disabled);

        setTimeout(() => {
          this._plot.appear();
          this._preview.appear();
          this.setDriver('pie');

          this._plot.draw(data, this._driver, {isZoomed: true, disabled: disabled});
          this._preview.draw(data, this._previewDriver, {disabled: disabled});
          this._isZoomed = true;

          { // TODO: improve
            let minXValue = this._plot.graph.getMinXValue();
            let maxXValue = this._plot.graph.getMaxXValue();
            let H_DAY = 1000 * 60 * 60 * 24;
            let nextValue = xValue + H_DAY;

            let xScale = (maxXValue - minXValue) / (H_DAY);
            let xTranslate = (xValue - minXValue) / (nextValue - xValue);

            this._preview.update(xScale,  xTranslate);
          }
          this._isZoomed = true;
        }, 200);

        this._xScale = xScale;
        this._xTranslate = xTranslate;
    });
  },

  zoomOut: function () {
    if (!this._isZoomed) return;
    DataProvider.load(this._dataId, (err, data) => {
      if (err) return;

      this._plot.disappear();
      this._preview.disappear();

      let disabled = this._plot.graph.disabled
      if (this._dataId === 4) disabled = []; // TODO: hack
      this.drawCheckboxes(data, disabled);

      setTimeout(() => {
        this._plot.appear();
        this._preview.appear();

        this.determineDriver(data);
        this._plot.draw(data, this._driver, {isZoomed: false, title: this._title, disabled: disabled});
        this._preview.draw(data, this._previewDriver, {disabled: disabled});
        this._preview.update(this._xScale, this._xTranslate);
        this._isZoomed = false;
      }, 200);
    })
    Popup.hide();
  },

  _zoomIn: function (xValue, data) {
    Popup.hide();
    this._plot.disappear();
    this._preview.disappear();
    this.drawCheckboxes(data, this._plot.graph.disabled);

    setTimeout(() => {
      let disabled = this._plot.graph.disabled;

      this._plot.appear();
      this._preview.appear();
      this.determineDriver(data);
      this._plot.draw(data, this._driver, {isZoomed: true, disabled: disabled});
      this._preview.draw(data, this._previewDriver, {disabled: disabled});
      this._isZoomed = true;

      { // TODO: improve
        this._preview.reset();
        // TODO: moveout
        let minXValue = this._plot.graph.getMinXValue();
        let maxXValue = this._plot.graph.getMaxXValue();
        let H_DAY = 1000 * 60 * 60 * 24;
        let nextValue = xValue + H_DAY;

        let xScale = (maxXValue - minXValue) / (nextValue - xValue);
        let xTranslate = (xValue - minXValue) / (nextValue - xValue);
        this._preview.update(xScale,  xTranslate);
      }
    }, 200);
  },

  _toggleGraph: function (id, enabled) {
    if (enabled) {
      this._plot.graph.enable(id);
      this._preview.graph.enable(id);
    } else {
      this._plot.graph.disable(id);
      this._preview.graph.disable(id);
    }
  },

  _onChange: function (xScale, xTranslate) {
    this._plot.update(xScale, xTranslate);
  }
}

module.exports = Chart


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

const _ = __webpack_require__(0)
let AreaInteractive = __webpack_require__(15)

let AreaGraph = __webpack_require__(19)

function AreaDriver() {
  this.name = 'area';
}

AreaDriver.prototype = {
  draw: function (container, data, options) {
    let graph = new AreaGraph(container, data, options);

    if (options && options.withInteractive) {
      let interactive = new AreaInteractive(graph);
    }
    return graph;
  },

  clean: function () {
  }
}
module.exports = AreaDriver


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

const _ = __webpack_require__(0);

const InteractiveBase = __webpack_require__(3);
const Popup = __webpack_require__(1).singleton;

function AreaInteractive(graph) {
  InteractiveBase.call(this, graph);
  this._svg = this._canvas;
  this._line = null;

  this._onClick = this._onClick.bind(this);
}

AreaInteractive.prototype = Object.assign({}, InteractiveBase.prototype, {

  wrap: function (graph) {
    graph.addInterface('IInteractive');
    let self = this;

    graph.IInteractive_select = function (x) {
      let values = graph.getValues(x);
      let xValue;
      let desc = [];
      _.forEach(values, value => {
        desc.push({
          title: value.name,
          value: value.yValue,
          color: value.color
        })

        x = value.x;
        xValue = value.xValue;
        let y = _.offsetTop(self._svg); // TODO
        let atX = x + _.offsetLeft(self._svg);
        self.showPopup(atX, y, {
          xValue: xValue,
          desc: desc,
          onClick: self._onClick.bind(self, i),
          //TODO
          isZoomed: graph.state.isZoomed
        })
      })
      self._xValue = xValue;
      self._showLine(x)
    }

    graph.IInteractive_deselect = function () {
      self._hideLine();
      Popup.hide();
    }

    graph.IInteractive_click = function () {
      self._onClick();
    }
  },

  _onClick: function (i) {
    let event = document.createEvent('Event');
    event.initEvent('zoomToPie', true, true);
    /*
    let data = this._graph.getRawData(i);

    // TODO:
    for (let k in data.types) {
      if (data.types[k] === 'x') continue;
      data.types[k] = 'pie';
    }
    */

    event.data = {};
    event.xValue = this._xValue;
    let state = this._graph.state;
    event.xScale = state.xScale;
    event.xTranslate = state.xTranslate;

    this._canvas.dispatchEvent(event);
  },

  _showLine: function(x) {
    let l = this._line;
    if (!l) {
      l = document.createElementNS(_.SVG_NS, 'line');
      this._svg.insertBefore(l, this._svg.firstChild);
      this._line = l;
    }

    l.setAttribute('x1', x + this._graph.marginLeft);
    l.setAttribute('y1', this._graph.marginTop);
    l.setAttribute('x2', x + this._graph.marginLeft);
    l.setAttribute('y2', this._graph.height + this._graph.marginTop);
    l.style.display = 'block';
  },

  _hideLine: function () {
    let l = this._line;
    if (!l) return;

    l.style.display = 'none';
  },
});

module.exports = AreaInteractive;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "<div class=graph_interactive> <svg></svg> </div> ";

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = "<div class=popup> <div class=popup_content> <span class=popup_title></span> <div class=popup_description></div> </div> </div> ";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

const _ = __webpack_require__(0)

const Graph = __webpack_require__(2)
const Grid = __webpack_require__(4)

const html = __webpack_require__(22)

const defaultOptions = {
  width: 500,
  height: 100
}

/**
 *
 * options {Object}
 *  @key {Boolean} withGrid
 *  @key {Boolean} scaleY
 */
function AreaGraph(container, data, options) {
  this._container = container;
  this._options = _.extend({}, defaultOptions, options);
  this._canvas = null;
  this._ctx = null;
  this._data = null;
  this._rawData = data;
  this._grid = options.withGrid ? new Grid(this) : null;
  //TODO:
  this._interfaces = [];

  this._xScale = 1;
  this._yScale = 1;
  this._xTranslate = 0;

  this._Y = null; // y accumulator
  this._stack = [];
  this._drawn = false;

  this.computeData(data, this._options.disabled);
  this.render();
  this.draw();
}

AreaGraphProto.prototype = Object.create(Graph.prototype);
AreaGraph.prototype = new AreaGraphProto();

function AreaGraphProto () {
  Graph.call(this);
  this.draw = function (xScale, xTranslate, force) {
    if (force || !this._drawn) {
      this._computeY()
      this._drawn = true;
    }

    if (this.supportInterface('IInteractive')) {
      this.IInteractive_deselect();
    }
    this._xScale = xScale || this._xScale;
    this._xTranslate = xTranslate === undefined ? this._xTranslate : xTranslate;

    this._ctx.clearRect(0, 0, this.width, this.height);
    this._stack = [];

    let areas = []
    _.forIn(this._data, (area, id) => {
      if (!area.enabled) return;
      areas.push(area);
    });

    if (areas.length < 2) // TODO: alert
      return;

    _.forEach(areas, (area, i) => {
      let isLast = areas.length - 1 === i;
      this._drawArea(area, isLast);
    })

    // TODO:
    if (this._grid) this.drawGrid();
  };

  this.render = function () {
    let doc = document.createElement('div');
    doc.innerHTML = html;
    let el = this._el = doc.firstChild;
    this._container.appendChild(el);

    this._canvas = el.querySelector('canvas');
    this._canvas.setAttribute('width', this._options.width);
    this._canvas.setAttribute('height', this._options.height);
    this._ctx = this._canvas.getContext('2d');
  };

  this.getRawData = function (i) {
    if (i == undefined) return this._rawData;

    // generate slice
    let s = i - 3;
    let e = i + 3
    let column = this._rawData.columns;
    let x = column[0];

    if (s < 0) {
      let diff = s * -1;
      s += diff;
      e += diff;
    }

    if (e >= x.length - 1) {
      let diff = e - x.length - 1
      s += diff;
      e += diff;
    }

    let data = {
      columns: [],
      colors: {},
      names: {},
      types: {}
    }

    x = x.slice(s, e)
    x.unshift('x');
    data.columns.push(x);
    data.types['x'] = 'x';

    _.forEach(this._rawData.columns, (c) => {
      let id = c[0];
      if (id === 'x') return;
      let y = c.slice(s, e);
      y.unshift(id);

      data.columns.push(y);
      data.types[id] = this._rawData.types[id];
      data.names[id] = this._rawData.names[id];
      data.colors[id] = this._rawData.colors[id];
    })

    return data;
  };

  this._drawArea = function (area, isLast) {
    let x = area.x;
    let y = area.y;
    let accY = this._Y;

    let minXValue = area.minXValue = _.min(x);
    let maxXValue = area.maxXValue = _.max(x);
    let minYValue = area.minYValue = 0;
    let maxYValue = area.maxYValue = 1;

    let xRatio = area.xRatio = this.width / (maxXValue - minXValue);
    let yRatio = area.yRatio = this.height / (maxYValue - minYValue);

    this._ctx.beginPath();
    this._ctx.fillStyle = area.color;
    this._ctx.strokeStyle = area.color;
    this._ctx.lineJoin = 'bevel';
    this._ctx.globalCompositeOperation = 'destination-over';

    for (i = 0; i < x.length; i++) {
        let stackHeight = getStackHeight.call(this, i);
        let yValue = isLast ? stackHeight : y[i] + stackHeight;
        let x1 = this.interpolateXValue(x[i], minXValue, xRatio);
        let y1 = this.interpolateYValue(yValue / accY[i], null, yRatio);
        if (i === 0) {
          this._ctx.moveTo(x1, isLast ? 0 : this.height);
        }
        this._ctx.lineTo(x1, y1);
        if (i === (x.length - 1)) {
          this._ctx.lineTo(x1,  isLast ? 0 : this.height);
        }
    }
    this._ctx.stroke();
    this._ctx.fill();
    this._stack.push(area.id);

    area.visibleMinXValue = this.interpolateX(0, minXValue, xRatio);
    area.visibleMaxXValue = this.interpolateX(this.width, minXValue, xRatio);
    area.visibleMinYValue = 0;
    area.visibleMaxYValue = 100;

    function getStackHeight(i) {
      let value = 0;
      _.forEach(this._stack, id => {
          value += this._data[id].y[i];
      });

      return value;
    }
  };

  //TODO: merge
  // requires x
  this.getValues = function (xPoint) {
    let record;
    for (let k in this._data) {
      record = this._data[k];
      if (record.enabled) break;
    }
    let xValue = this.interpolateX(xPoint, record.minXValue, record.xRatio);
    let i = this.getClosestIndexByXValue(xValue, record.x);

    let values = [];
    _.forIn(this._data, (record, id) => {
      if (!record.enabled) return;

      let x = record.x;
      let y = record.y;
      values.push({
        id: record.id,
        name: record.name,
        x: this.interpolateXValue(x[i], record.minXValue, record.xRatio),
        xValue: x[i],
        yValue: y[i],
        color: record.color,
        i: i
      })
    })
    return values;
  };


  // TODO: move to utils
  this._computeY = function () {
    let ids =[];
    _.forIn(this._data, (record, id) => {
      if (!record.enabled) return;
      ids.push(id);
    });

    if (ids.length === 0) {
      this._Y = [];
      return;
    }

    let Y = [];
    let x = this._data[ids[0]].x;
    for (let i = 0, l = x.length; i < l; i++) {
      let value = 0;
      _.forEach(ids, id => {
        let record = this._data[id];
        value += record.y[i];
      });
      Y.push(value);
    }

    this._Y = Y;
  };
}

module.exports = AreaGraph;


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = "<div class=graph_grid> <svg></svg> </div> ";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = "<div class=\"graph area_graph\"> <canvas></canvas> </div> ";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

const PieGraph = __webpack_require__(24)
let PieInteractive = __webpack_require__(26)

function PieDriver(container) {
  this.name = 'pie';
}

PieDriver.prototype = {
  draw: function (container, data, options) {
    let graph = new PieGraph(container, data, options);

    if (options && options.withInteractive) {
      let interactive = new PieInteractive(graph);
      graph.interactive = interactive; // TODO: hack
    }

    return graph;
  }
}

module.exports = PieDriver;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

const _ = __webpack_require__(0)
const Graph = __webpack_require__(2)

const html = __webpack_require__(25)

const defaultOptions = {
  width: 500,
  height: 100
}

/**
 *
 * options {Object}
 *  @key {Boolean} disabled
 */
function PieGraph (container, data, options) {
  this._container = container;
  this._options = _.extend({}, defaultOptions, options);
  this._svg = null;
  this._data = null;

  //TODO:
  this._interfaces = [];
  this._Y = null;

  this.render();
  this.computeData(data, this._options.disabled);
  this.draw();
}

PieGraphProto.prototype = Object.create(Graph.prototype);
PieGraph.prototype = new PieGraphProto();

function PieGraphProto () {
  Graph.call(this);

  // TODO: support render single circle
  this.draw = function (xScale, xTranslate) {
    this._xScale = xScale || this._xScale;
    this._xTranslate = xTranslate === undefined ? this._xTranslate : xTranslate;

    if (this.supportInterface('IInteractive')) {
      this.IInteractive_deselect();
    }
    this._clearRect();

    let record = this.getAnyEnabledRecord();
    if (!record) return;

    let x = record.x;
    let minXValue = x[0];
    let maxXValue = _.last(x);

    let xRatio = this.width / (maxXValue - minXValue);
    minXValue = this.interpolateX(0, minXValue, xRatio);
    // TODO:
    maxXValue = interpolateX.call(this, this.width, minXValue, xRatio);
    function interpolateX (x, minXValue, xRatio) {
      return minXValue + x / (xRatio * this._xScale);
    }

    let minI = 0;
    for (let i = 0; i < x.length; i++) {
      if (x[i] >= minXValue) {
        minI = i;
        break;
      }
    }

    let maxI = x.length - 1;
    for (let i = minI; i < x.length; i++) {
      if (x[i] >= maxXValue) {
        maxI = i - 1;
        break;
      }
    }
    if (maxI < 0) maxI = 0;

    this._computeY(minI, maxI);
    this._minI = minI;
    this._maxI = maxI;

    this._amount = {};
    let rotate = 0;
    _.forIn(this._data, pie => {
      if (!pie.enabled) return;

      let id = pie.id;
      let angle = this._drawPie(pie, minI, maxI, this._Y, { rotate: rotate });
      rotate += angle;
    })

    // TODO: hack
    if (this.interactive) this.interactive.bindHover();
  };

  this.getVisibleMinXValue = function () {
    let record = this.getAnyEnabledRecord();
    if (!record) return 0;

    return record.x[this._minI];
  };

  this.getMinXValue = function () {
    let record = this.getAnyEnabledRecord();
    if (!record) return 0;

    return record.x[this._minI];
  },

  this.getMaxXValue = function () {
    let record = this.getAnyEnabledRecord();
    if (!record) return 0;

    return record.x[this._maxI];
  },

  this.getVisibleMaxXValue = function () {
    let record = this.getAnyEnabledRecord();
    if (!record) return 0;

    return record.x[this._maxI];
  };

  this.render = function () {
    let doc = document.createElement('div');
    doc.innerHTML = html;
    let el = this._el = doc.firstChild;
    this._container.appendChild(el);

    this._svg = el.querySelector('svg');
    this._svg.setAttribute('width', this._options.width);
    this._svg.setAttribute('height', this._options.height);
  }

  Object.defineProperty(this, 'radius', {
    get() { return this.height / 2; }
  });
  Object.defineProperty(this, 'width', {
    get() {
      let width = _.width(this._svg)
      delete this.width;
      Object.defineProperty(this, 'width', { get() { return width; } });
      return width;
    }
  });

  Object.defineProperty(this, 'height', {
    get() {
      let height = _.height(this._svg)
      delete this.height;
      Object.defineProperty(this, 'height', { get() { return height; } });
      return height;
    }
  });

  Object.defineProperty(this, 'svg', {
    get() { return this._svg; }
  });

  // https://danielpataki.com/svg-pie-chart-javascript/
  this._drawPie = function (pie, minI, maxI, total, options) {
    let x = pie.x;
    let y = pie.y;

    let amount = 0;
    for (let i = minI; i <= maxI; i++) {
      amount += y[i];
    }
    this._amount[pie.id] = amount;

    let r = this.radius;
    let vC = r; // vertical center
    let hC = this.width / 2; // horizontal center
    let percent = amount / total;
    let angle = 360 * percent;

    let zAngle = (angle > 180) ? 360 - angle : angle;
    let zRad = degToRad(zAngle);
    let zSide = Math.sqrt(2 * r * r - ( 2 * r * r * Math.cos(zRad) ) );
    let xSide;
    if (zAngle <= 90) {
      xSide = r * Math.sin(zRad);
    } else {
      zRad = degToRad(180 - zAngle);
      xSide = r * Math.sin(zRad);
    }

    let ySide = Math.sqrt(zSide * zSide - xSide * xSide);
    let Y = ySide;
    let X;
    let largeArcFlag = 0;

    if (angle <= 180) {
      X = hC + xSide;
    } else {
      X = hC - xSide;
      largeArcFlag = 1;
    }

    let path = document.createElementNS(_.SVG_NS, 'path')
    this._svg.appendChild(path);

    let d = `M${hC} ${vC}`;
    d += ` L${hC} 0`;
    d += ` A${r} ${r} 1 ${largeArcFlag} 1 ${X} ${Y} z`;
    let rotate = `rotate(${options.rotate} ${hC} ${vC})`;
    path.setAttribute('d', d);
    path.setAttribute('transform', rotate);
    path.setAttribute('fill', pie.color);
    path.setAttribute('path-id', pie.id); //TODO sic

    function degToRad(angle) {
      return _.round(angle * (Math.PI / 180), 3);
    }

    return angle;
  };

  this._computeY = function (minI, maxI) {
    let ids = [];
    _.forIn(this._data, (record, id)  => {
      if (!record.enabled) return;
      ids.push(id);
    });

    if (ids.length === 0) {
      this._Y = 0;
      return;
    }

    let Y = 0;
    for (let i = minI; i <= maxI; i++) {
      let value = 0;
      _.forEach(ids, id =>  {
        let record = this._data[id];
        value += record.y[i];
      })
      Y += value;
    }

    this._Y = Y;
  };

  this._clearRect = function () {
    _.erase(this._svg);
  };

  this.getValues = function () {
    let values = [];
    _.forIn(this._data, (record, id) => {
      if (!record.enabled) return;

      let x = record.x;
      let y = record.y;
      values.push({
        id: record.id,
        name: record.name,
        yValue: this._amount[id],
        color: record.color,
      })
    })
    return values;
  };
}

module.exports = PieGraph;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = "<div class=\"graph circle_graph\"> <svg></svg> </div> ";

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

const _ = __webpack_require__(0);

const InteractiveBase = __webpack_require__(3);
const Popup = __webpack_require__(1).singleton;

function PieInteractive(graph) {
  InteractiveBase.call(this, graph);
  this._svg = this._canvas;
}

PieInteractive.prototype = Object.assign({}, InteractiveBase.prototype, {
  wrap: function (graph) {
    let self = this;
    graph.addInterface('IInteractive');

    graph.IInteractive_select = function (x, e) {
      let target = e.target;
      let y = _.offsetTop(target);

      let id = target.getAttribute('path-id'); // TODO: sic
      let values = graph.getValues()
      let desc = []
      _.forEach(values, value => {
        if (id !== value.id) return;
        desc.push({
          title: value.name,
          value: value.yValue,
          color: value.color
        })
      })

      let xValue = 0;
      self.showPopup(x, y, {
        desc: desc,
        // TODO
        isZoomed: graph.state.isZoomed
      })
    }

    graph.IInteractive_deselect = function () {
      self.hidePopup();
    }
  },

  bindHover: function () {
    if (!this._graph.supportInterface('IInteractive')) {
      throw new Error("Graph should support IInteractive");
    }

    let svg = this._graph.svg;
    let paths = svg.querySelectorAll('path');
    _.forEach(paths, path => {
      this._bindHover(path);
    })
  },

  _bindHover: function (node) {
    if (!this._graph.supportInterface('IInteractive')) {
      throw new Error("Graph should support IInteractive");
    }

    node.addEventListener('mousemove', (e) => {
      if (e.target !== node) return;
      let x = e.clientX - this._graph.marginLeft;
      if (x < 0) return;

			this._graph.IInteractive_select(x, e);
    });

    node.addEventListener('mouseleave', (e) => {
      if (e.relatedTarget === Popup.el ||
        _.isChild(e.relatedTarget, Popup.el)) return;

			this._graph.IInteractive_deselect();
    })
  },

  render: function () {
    this._canvas = this._graph.svg;
  }
})

module.exports = PieInteractive;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

let LineGraph = __webpack_require__(28)
let LineInteractive = __webpack_require__(30)

function LineDriver() {
  this.name = 'line';
}

LineDriver.prototype = {
  draw: function (container, data, options) {
    let graph = new LineGraph(container, data, options);

    if (options && options.withInteractive) {
      let interactive = new LineInteractive(graph);
    }

    return graph;
  }
}
module.exports = LineDriver


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

const _ = __webpack_require__(0)
const html = __webpack_require__(29)
const Grid = __webpack_require__(4)
const Graph = __webpack_require__(2);

const defaultOptions = {
  width: 500,
  height: 100
}

/**
 * draw()
 * getPoints()
 *
 * options {Object}
 *  @key {Boolean} withGrid
 *  @key {Boolean} scaleY
 *  @key {Boolean} dualY
 *  @key {Array} disabled
 *  @key {Options} isZoomed
 */
function LineGraph(container, data, options) {
  this._container = container;
  this._options = _.extend({}, defaultOptions, options);
  this._canvas = null;
  this._el = null;
  this._ctx = null;
  this._data = {};
  this._grid = options.withGrid ? new Grid(this) : null;
  //TODO:
  this._interfaces = [];

  this._xScale = 1;
  this._yScale = 1;
  this._xTranslate = 0;

  this._Y = null; // y accumulator
  this._drawn = false;
  this._xValueStep = null;

  this.computeData(data, this._options.disabled);
  this.render();
  this.draw();
}

LineGraphProto.prototype = Object.create(Graph.prototype);
LineGraph.prototype = new LineGraphProto();

function LineGraphProto () {
  Graph.call(this);

  this.draw = function (xScale, xTranslate, force) {
    if (force || !this._drawn) {
      this._computeY()
      this._drawn = true;
    }
    if (this.supportInterface('IInteractive')) {
      this.IInteractive_deselect();
    }
    this._xScale = xScale || this._xScale;
    this._xTranslate = xTranslate === undefined ? this._xTranslate : xTranslate;

    this._ctx.clearRect(0, 0, this.width, this.height);

    _.forIn(this._data, (record, id) => {
      if (!record.enabled) return;
      this._drawLine(record);
    })

    if (this._grid) this.drawGrid();
  };

  // move out
  this.drawGrid = function () {
    if (!this._grid) return;

    if (!this._options.dualY) {
      let minXValue = Number.POSITIVE_INFINITY;
      let maxXValue = Number.NEGATIVE_INFINITY;
      let minYValue = Number.POSITIVE_INFINITY;
      let maxYValue = Number.NEGATIVE_INFINITY;

      let c = 0;
      _.forIn(this._data, (line, k) => {
        if (!line.enabled) return;
        c++;
        minXValue = _.min(line.visibleMinXValue, minXValue);
        maxXValue = _.max(line.visibleMaxXValue, minXValue);
        minYValue = _.min(line.visibleMinYValue, minYValue);
        maxYValue = _.max(line.visibleMaxYValue, maxYValue);
      });
      if (!c) return;

      this._grid.draw(minXValue, maxXValue, minYValue, maxYValue);
    } else {
      let minValues = [];
      let maxValues = [];
      let colors = [];
      let c = 0;
      _.forIn(this._data, (line, k) => {
        if (!line.enabled) return;
        c++;
        let min = [];
        min.push(line.visibleMinXValue)
        min.push(line.visibleMinYValue)
        minValues.push(min);

        let max = [];
        max.push(line.visibleMaxXValue);
        max.push(line.visibleMaxYValue);
        maxValues.push(max);

        colors.push(line.color);
      });
      if (!c) return;
      this._grid.drawDualY(minValues, maxValues, colors);
    }
  };

  //TODO: merge with getValues();
  this.getPoints = function (x) {
    let points = [];
    _.forIn(this._data, ({enabled}, k) => {
      if (!enabled) return;

      points.push(this._getPoint(k, x));
    });

    return points;
  };

  this.render = function () {
    let doc = document.createElement('div');
    doc.innerHTML = html;
    let el = this._el = doc.firstChild;
    this._container.appendChild(el);

    this._canvas = el.querySelector('canvas');
    this._canvas.setAttribute('width', this._options.width);
    this._canvas.setAttribute('height', this._options.height);
    this._ctx = this._canvas.getContext('2d');
  };

  this._computeY = function () {
    let ids =[];
    _.forIn(this._data, (line, id) => {
      if (!line.enabled) return;
      ids.push(id);
    });

    if (ids.length === 0) {
      this._Y = [];
      return;
    }

    let Y = [];
    let x = this._data[ids[0]].x;
    for (let i = 0, l = x.length; i < l; i++) {
      let value = 0;
      _.forEach(ids, id => {
        let record = this._data[id];
        value = _.max(record.y[i], value);
      });
      Y.push(value);
    }
    //TODO:
    let xValueStep = x[1] - x[0];

    this._xValueStep = xValueStep;
    this._Y = Y;
  };

  this._getPoint = function (id, xPoint) {
    let line = this._data[id];
    let x = line.x;
    let y = line.y;

    let xValue = this.interpolateX(xPoint, line.minXValue, line.xRatio);
    let i = this.getClosestIndexByXValue(xValue, line.x);

    return {
      id: id,
      name: line.name,
      x: this.interpolateXValue(x[i], line.minXValue, line.xRatio),
      y: this.interpolateYValue(y[i], line.minYValue, line.yRatio),
      xValue: x[i],
      yValue: y[i],
      color: line.color,
      i: i
    }
  };

  this._drawLine = function (line) {
    let x = line.x;
    let y = line.y;
    let Y = this._Y;

    let minXValue = line.minXValue = x[0];
    let maxXValue = line.maxXValue = _.last(x);
    let xRatio = line.xRatio = this.width / (maxXValue - minXValue);

    if (this._options.dualY) {
      Y = line.y;
    } else if (this._options.scaleY) {
      Y = this._Y;
    }
    if (this._options.scaleY) {
      let minXValue = this.interpolateX(0, line.minXValue, line.xRatio);
      let maxXValue = this.interpolateX(this.width, line.minXValue, line.xRatio);
      let minI = this.getClosestIndexByXValue(minXValue, line.x)
      let maxI = this.getClosestIndexByXValue(maxXValue, line.x)  // TODO: performance
      Y = Y.slice(minI, maxI); // TODO: performance
    }
    let minYValue = line.minYValue = 0;
    let maxYValue = line.maxYValue = _.max(Y);
    let yRatio = line.yRatio = this.height / (maxYValue - minYValue);

    this._ctx.beginPath();
    this._ctx.strokeStyle = line.color;
    this._ctx.lineWidth = this._getLineWidth();
    this._ctx.lineJoin = 'bevel';
    for (i = 0; i < x.length; i++) {
      let x1 = this.interpolateXValue(x[i], minXValue, xRatio);
      let y1 = this.interpolateYValue(y[i], minYValue, yRatio);
      (i == 0) ? this._ctx.moveTo(x1, y1) : this._ctx.lineTo(x1, y1);
    }

    this._ctx.stroke();

    line.visibleMinXValue = this.interpolateX(0, minXValue, xRatio);
    line.visibleMaxXValue = this.interpolateX(this.width, minXValue, xRatio);
    line.visibleMinYValue = this.interpolateY(this.height, minYValue, yRatio);
    line.visibleMaxYValue = this.interpolateY(0, minYValue, yRatio);
  };

  // TODO: find better function
  this._getLineWidth = function () {
    return 1 * _.dpr;
  };

  Object.defineProperty(this, 'xValueStep', { get() { return this._xValueStep; } });
}

module.exports = LineGraph


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = "<div class=\"graph line_graph\"> <canvas></canvas> </div> ";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

const _ = __webpack_require__(0);
__webpack_require__(31);

const InteractiveBase = __webpack_require__(3);
const InteractiveMixin = __webpack_require__(32);
let Popup = __webpack_require__(1).singleton;

function LineInteractive(graph) {
  InteractiveBase.call(this, graph);
  this._points = {};
  this._svg = this._canvas;

  this._line = null;
  this._xValue = null;

  this._onClick = this._onClick.bind(this);
}

LineInteractive.prototype = Object.assign({}, InteractiveBase.prototype, InteractiveMixin, {
  wrap: function (graph) {
    graph.addInterface('IInteractive');
    let self = this;

    graph.IInteractive_select = function (x) {
      let points = this.getPoints(x);
      if (!points.length) return;

      let xValue;
      let desc = [];
      points.forEach(point => {
        self._showPoint(point);

        xValue = point.xValue;
        x = point.x;

        desc.push({
          title: point.name,
          value: point.yValue,
          color: point.color
        })
      });

      self._xValue = xValue;
      self._showLine(x);

      let y = _.offsetTop(self._svg) // TODO:
      x += _.offsetLeft(self._svg)
      self.showPopup(x, y, {
        xValue: xValue,
        desc: desc,
        onClick: self._onClick,
        //TODO
        isZoomed: graph.state.isZoomed,
        // TODO
        xValueStep: graph.xValueStep
      })
    }

    graph.IInteractive_deselect = function () {
      self._hideLine();
      self._hidePoints();
      self.hidePopup();

      self.unbindKeyboard();
      self._xValue = null;
    }

    graph.IInteractive_click = function () {
      self._onClick();
    }
  },

  _onClick: function (e) {
    let event = document.createEvent('Event');
    event.initEvent('zoom', true, true);
    event.xValue = this._xValue;
    event.xTranslate = this._graph.state.xTranslate;
    event.xScale = this._graph.state.xScale;

    this._svg.dispatchEvent(event);
  },

  _showLine: function(x) {
    let l = this._line;
    if (!l) {
      l = document.createElementNS(_.SVG_NS, 'line');
      this._svg.insertBefore(l, this._svg.firstChild);
      this._line = l;
    }

    l.setAttribute('x1', x + this._graph.marginLeft);
    l.setAttribute('y1', this._graph.marginTop);
    l.setAttribute('x2', x + this._graph.marginLeft);
    l.setAttribute('y2', this._graph.height + this._graph.marginTop);
    l.style.display = 'block';
  },

  _showPoint: function (point) {
    let p = this._points[point.name];
    if (!p) {
      p = document.createElementNS(_.SVG_NS, 'circle');
      this._svg.appendChild(p);
      this._points[point.name] = p;
    }

    // TODO:
    p.setAttribute('cx', this._graph.marginLeft + point.x);
    p.setAttribute('cy', this._graph.marginTop + point.y);
    p.setAttribute('stroke', point.color);
    p.setAttribute('stroke-width', 1  * _.dpr);
    p.setAttribute('r', 4 * _.dpr);
    p.style.display = 'block';
  },

  _hideLine: function () {
    let l = this._line;
    if (!l) return;

    l.style.display = 'none';
  },

  _hidePoints: function () {
    _.forIn(this._points, point => {
      point.style.display = 'none';
    })
  }
})

module.exports = LineInteractive;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = {
  bindKeyboard: function () {
    if (this.__keyboardIsBinded) return;
    this.__keyboardIsBinded = true;
    window.addEventListener('keydown', this.__keyDown);
  },

  unbindKeyboard: function () {
    this.__keyboardIsBinded = false;
    window.removeEventListener('keydown', this.__keyDown);
  },

  __keyDown: function (e) {
    switch (e.keyCode) {
      case 37: // left
        this._graph.selectPrev(this._x);
        break;
      case 39: //right
        this._graph.selectNext(this._x);
        break;
      default:
        break;
    }
  }
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

const HistogramGraph = __webpack_require__(7)
let HistogramInteractive = __webpack_require__(8)

function HistogramDriver(container) {
  this.name = 'histogram';
}

HistogramDriver.prototype = {
  draw: function (container, data, options) {
    let graph = new HistogramGraph(container, data, options);

    if (options && options.withInteractive) {
      let interactive = new HistogramInteractive(graph);
    }

    return graph;
  }
}

module.exports = HistogramDriver;


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = "<div class=\"graph histogram_graph\"> <canvas></canvas> </div> ";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = "<div class=\"histogram_graph_interactive graph_interactive\"></div> ";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

const StackedHistogramGraph = __webpack_require__(39)
let HistogramInteractive = __webpack_require__(8)

function StackedHistogramDriver(container) {
  this.name = 'stackedHistogram';
}

StackedHistogramDriver.prototype = {
  draw: function (container, data, options) {
    let graph = new StackedHistogramGraph(container, data, options);

    if (options && options.withInteractive) {
      let interactive = new HistogramInteractive(graph);
    }
    return graph;
  }
}

module.exports = StackedHistogramDriver;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

const _ = __webpack_require__(0)
const html = __webpack_require__(40)

const Graph = __webpack_require__(2)
const HistogramGraph = __webpack_require__(7)
const Grid = __webpack_require__(4)

const defaultOptions = {
  width: 500,
  height: 100
}

/**
 *
 * options {Object}
 *  @key {Boolean} withGrid
 *  @key {Boolean} scaleY
 *  @key {Boolean} disabled
 */
function StackedHistogramGraph(container, data, options) {
  this._container = container;
  this._options = _.extend({}, defaultOptions, options);
  this._canvas = null;
  this._el = null;
  this._ctx = null;
  this._data = null;
  this._grid = options.withGrid ? new Grid(this) : null;
  //TODO:
  this._interfaces = [];

  this._xScale = 1;
  this._yScale = 1;
  this._xTranslate = 0;

  this._Y = null; // y accumulator
  this._stack = [];
  this._drawn = false;

  this.computeData(data, this._options.disabled);
  this.render();
  this.draw();
}

StackedHistogramProto.prototype = Object.create(HistogramGraph.prototype);
StackedHistogramGraph.prototype = new StackedHistogramProto();

function StackedHistogramProto() {
  Graph.call(this);

  this.draw = function (xScale, xTranslate, force, highlightX) {
    if (force || !this._drawn) {
      this._computeY()
      this._drawn = true;
    }
    this._xScale = xScale || this._xScale;
    this._xTranslate = xTranslate === undefined ? this._xTranslate : xTranslate;

    this._ctx.clearRect(0, 0, this.width, this.height);
    this._stack = [];

    _.forIn(this._data, (bar, id) => {
      if (!bar.enabled) return;
      this._drawBar(bar, highlightX);
    })

    // TODO:
    if (this._grid) this.drawGrid();
  };

  this.select = function (x) {
    this.draw(this._xScale, this._xTranslate, false, x);
  };

  this.deselect = function () {
    this.draw(this._xScale, this._xTranslate);
  };

  this.render = function () {
    let doc = document.createElement('div');
    doc.innerHTML = html;
    let el = this._el = doc.firstChild;
    this._container.appendChild(el);

    this._canvas = el.querySelector('canvas');
    this._canvas.setAttribute('width', this._options.width);
    this._canvas.setAttribute('height', this._options.height);
    this._ctx = this._canvas.getContext('2d');
  };

  this._drawBar = function (bar, highlightX) {
    let x = bar.x;
    let y = bar.y;
    let Y = this._Y;

    let minXValue = bar.minXValue = x[0];
    let maxXValue = bar.maxXValue = _.last(x);
    let xRatio = bar.xRatio = this.width / (maxXValue - minXValue);

    if (this._options.scaleY) {
      let minXValue = this.interpolateX(0, bar.minXValue, bar.xRatio);
      let maxXValue = this.interpolateX(this.width, bar.minXValue, bar.xRatio);
      let minI = this.getClosestIndexByXValue(minXValue, bar.x)
      let maxI = this.getClosestIndexByXValue(maxXValue, bar.x)
      Y = Y.slice(minI, maxI);
    }
    let minYValue = bar.minYValue = 0;
    let maxYValue = bar.maxYValue = _.max(Y);

    let yRatio = bar.yRatio = this.height / (maxYValue - minYValue);

    let xStep = (this.width / x.length) * this._xScale;
    this._ctx.fillStyle = bar.color;
    if (highlightX) {
      this._ctx.globalAlpha = 0.5;
      let highlightXValue = this.interpolateX(highlightX, bar.minXValue, bar.xRatio);
      let j = this.getClosestIndexByXValue(highlightXValue, bar.x);
      for (let i = 0, length = x.length; i < length; i++) {
        let stackHeight = getStackHeight.call(this, i);
        let height = this.interpolateYValue(stackHeight, null, yRatio);
        let x1 = this.interpolateXValue(x[i], minXValue, xRatio);
        let y1 = this.interpolateYValue(stackHeight + y[i], null, yRatio);
        let x2 = i < length - 1 ? this.interpolateXValue(x[i + 1], minXValue, xRatio) : xStep + x1;
        this._ctx.globalAlpha = (i === j) ? 1 : 0.5;

        this._ctx.fillRect(x1, y1, x2 - x1, height - y1);
      }
    } else {
      this._ctx.globalAlpha = 1;
      for (let i = 0, length = x.length; i < length; i++) {
        let stackHeight = getStackHeight.call(this, i);
        let height = this.interpolateYValue(stackHeight, null, yRatio);
        let x1 = this.interpolateXValue(x[i], minXValue, xRatio);
        let y1 = this.interpolateYValue(stackHeight + y[i], null, yRatio);
        let x2 = i < length - 1 ? this.interpolateXValue(x[i + 1], minXValue, xRatio) : xStep + x1;

        this._ctx.fillRect(x1, y1, x2 - x1, height - y1);
      }
    }

    this._stack.push(bar.id);
    bar.visibleMinXValue = this.interpolateX(0, minXValue, xRatio);
    bar.visibleMaxXValue = this.interpolateX(this.width, minXValue, xRatio);
    bar.visibleMinYValue = this.interpolateY(this.height, minYValue, yRatio);
    bar.visibleMaxYValue = this.interpolateY(0, minYValue, yRatio);

    function getStackHeight(i) {
      let value = 0;
      _.forEach(this._stack, id => {
          value += this._data[id].y[i];
      });

      return value;
    }
  };

  this._computeY = function () {
    let ids =[];
    _.forIn(this._data, (record, id) => {
      if (!record.enabled) return;
      ids.push(id);
    });

    if (ids.length === 0) {
      this._Y = [];
      return;
    }

    let Y = [];
    let x = this._data[ids[0]].x;
    for (let i = 0, l = x.length; i < l; i++) {
      let value = 0;
      _.forEach(ids, id => {
        let record = this._data[id];
        value += record.y[i];
      });
      Y.push(value);
    }

    this._Y = Y;
  };
}


module.exports = StackedHistogramGraph;


/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = "<div class=\"graph stacked_histogram_graph\"> <canvas></canvas> </div> ";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

const html = __webpack_require__(42);
const _ = __webpack_require__(0);
const moment = __webpack_require__(5);

__webpack_require__(43)

let width = _.requestWidth();
let horMargin = 5;
const CANVAS_WIDTH = width - horMargin * 2; //TODO?
const CANVAS_HEIGHT = width * 0.7;

function Plot(parentNode, options) {
  let doc = document.createElement('div');
  doc.innerHTML = html;
  let el = this._el = doc.firstChild;
  parentNode.appendChild(el);
  this._container = el;

  el.querySelector('.zoom_out').addEventListener('click', (e) => {
    e.stopPropagation();
    e.preventDefault();

    let event = document.createEvent('Event');
    event.initEvent('zoomout', true, true);
    el.dispatchEvent(event);
  })
}

Plot.prototype = {
  /**
   * options {Object}
   *  title {String}
   *  isZoomed {Boolean}
   *  disabled {Array}
   */
  draw: function (data, driver, options) {
    let dualY = !!data.y_scaled;

    this.clean();
    if (options && options.isZoomed) {
      _.addClass(this._el, 'is_zoomed');
    } else {
      _.removeClass(this._el, 'is_zoomed');
      this.setTitle(options && options.title);
    }
    this._graph = driver.draw(this._container.querySelector('.plot_internal'), data, {
      width: CANVAS_WIDTH,
      height: CANVAS_HEIGHT,
      withGrid: true,
      withInteractive: true,
      scaleY: true,
      dualY: dualY,
      disabled: options && options.disabled,
      //TODO:
      isZoomed: !!(options && options.isZoomed)
    });
  },

  appear: function () {
    _.removeClass(this._container, 'disappear');
  },

  disappear: function () {
    _.addClass(this._container, 'disappear');
  },

  clean: function () {
    let plot = this._container.querySelector('.plot_internal');
    _.erase(plot);
  },

  reset: function () {
    this._slider.reset()
  },

  update: function (xScale, xTranslate) {
    this._graph.draw(xScale, xTranslate);
    let minXValue = this._graph.getVisibleMinXValue();
    let maxXValue = this._graph.getVisibleMaxXValue();

    let s = new Date(minXValue);
    let e = new Date(maxXValue);
    const DAY = 1000 * 60 * 60 * 24;

    if (e - s <= DAY * 1.3) {
      s = new Date((maxXValue + minXValue) / 2)
      let ss = `${s.getUTCDate()} ${moment.getMonth(s)} ${s.getUTCFullYear()}`;
      this.setDescription(`${ss}`);
    } else {
      let ss = `${s.getUTCDate()} ${moment.getMonth(s)} ${s.getUTCFullYear()}`;
      let es = `${e.getUTCDate()} ${moment.getMonth(e)} ${e.getUTCFullYear()}`;
      this.setDescription(`${ss} - ${es}`);
    }
  },

  setTitle: function (title) {
    this._container
      .querySelector('.plot_title')
      .innerHTML = title || '';
  },

  setDescription: function (text) {
    this._container
      .querySelector('.plot_range')
      .innerHTML = text || '';
  },

  get container() {
    return this._container;
  },

  get graph() {
    return this._graph;
  }
}

module.exports = Plot;


/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = "<div class=plot> <p class=plot_heading> <a href=# class=zoom_out> <span class=icon> <svg xmlns=http://www.w3.org/2000/svg viewBox=\"0 0 512 512\"><path d=\"M304 192v32c0 6.6-5.4 12-12 12H124c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm201 284.7L476.7 505c-9.4 9.4-24.6 9.4-33.9 0L343 405.3c-4.5-4.5-7-10.6-7-17V372c-35.3 27.6-79.7 44-128 44C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208c0 48.3-16.4 92.7-44 128h16.3c6.4 0 12.5 2.5 17 7l99.7 99.7c9.3 9.4 9.3 24.6 0 34zM344 208c0-75.2-60.8-136-136-136S72 132.8 72 208s60.8 136 136 136 136-60.8 136-136z\"/></svg> </span> <span>Zoom Out<span> </span></span></a> <span class=plot_title></span> <span class=plot_range></span> </p> <div class=plot_internal></div> </div> ";

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

const _ = __webpack_require__(0)
const v = __webpack_require__(9)
const Slider = __webpack_require__(45)

const html = __webpack_require__(46)
__webpack_require__(10)


function Preview(container, options) {
  this._container = container;
  this.render();

  this._slider = new Slider(this._el, options);
  this._graph = null;
}

Preview.prototype = {
  draw: function (data, driver, options) {
    let canvas = this._el.querySelector('.canvas');
    let cs = getComputedStyle(this._el.parentNode);

    this.clean();
    let dualY = !!data.y_scaled;
    this._graph = driver.draw(canvas, data, {
      width: parseFloat(cs.width) - v.SLIDER_LEFT_WIDTH - v.SLIDER_RIGHT_WIDTH,
      height: v.CANVAS_HEIGHT,
      dualY: dualY,
      disabled: options && options.disabled
    });
  },

  appear: function () {
    _.removeClass(this._el, 'disappear');
  },

  disappear: function () {
    _.addClass(this._el, 'disappear');
  },

  update(xScale, xTranslate) {
    this._slider.posByScale(xScale, xTranslate);
  },

  reset: function () {
    this._slider.reset();
  },

  clean: function () {
    let canvas = this._el.querySelector('.canvas');
    _.erase(canvas);
  },

  get width() {
    return this._el.getBoundingClientRect().width;
  },

  get height() {
    return this._el.getBoundingClientRect().height;
  },

  get graph() {
    return this._graph;
  },

  render: function () {
      let doc = document.createElement('div');
      doc.innerHTML = html;
      this._el = doc.firstChild;
      this._container.appendChild(this._el);

      let w = _.requestWidth();
      this._el.style.width = `${w}px`;
      this._el.style.height = `${v.PREVIEW_HEIGHT - v.SLIDER_BORDER * 2 }px`

      let canvas = this._el.querySelector('.canvas');
      canvas.style.marginLeft = `${v.SLIDER_LEFT_WIDTH}px`;
      canvas.style.marginRight = `${v.SLIDER_RIGHT_WIDTH}px`;
      canvas.style.width = `${w - v.SLIDER_LEFT_WIDTH - v.SLIDER_RIGHT_WIDTH}px`
      canvas.style.height = `${v.CANVAS_HEIGHT}px`
  }
}

module.exports = Preview


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

let _ = __webpack_require__(0);
let v = __webpack_require__(9)
__webpack_require__(10)

// classNames
const cn = {
  SLIDER: '.slider',
  LEFT: '.slider_left',
  RIGHT: '.slider_right',
  VIEW: '.slider_view',
  OVERLAY_LEFT: '.overlay_left',
  OVERLAY_RIGHT: '.overlay_right'
}


const defaultConfig = {
  sliderWidth: 100 * _.dpr,
  sliderMinWidth: 20 * _.dpr,
  onChange: null
}

function Slider(el, config) {
  let slider = el.querySelector(cn.SLIDER)
  this._el = slider;
  this._el.style.width = el.getBoundingClientRect().width;

  this.sliderUI = {
    left: slider.querySelector(cn.LEFT),
    right: slider.querySelector(cn.RIGHT),
    view: slider.querySelector(cn.VIEW),
  }

  this.overlayUI = {
    left: slider.querySelector(cn.OVERLAY_LEFT),
    right: slider.querySelector(cn.OVERLAY_RIGHT),
  }

  this.onChange = config.onChange;
  this.config = _.extend({}, defaultConfig, config);
  this.render();
  this._initUI();
}

Slider.prototype = {
  pos: function (x, width) {
    if (x < 0) x = 0;
    if (width < this.config.sliderMinWidth) width = this.config.sliderMinWidth;

    const { left, right, view } = this.sliderUI;

    view.style.width = `${width}px`;
    if (x < v.SLIDER_LEFT_WIDTH) {
      x = v.SLIDER_LEFT_WIDTH;
    }
    this.overlayUI.left.style.width = `${x}px`

    let leftWidth = left.getBoundingClientRect().width;
    let rightWidth = this.width - width - x
    this.overlayUI.right.style.width = `${rightWidth}px`

    this._onChange();
  },

  posByScale: function (xScale, xTranslate) {
    let { left, right, view } = this.sliderUI;

    let leftWidth = _.width(left);
    let rightWidth = _.width(right);
    let width = this.width - leftWidth - rightWidth;

    let viewWidth = width / xScale;
    //TODO: bug
    if (viewWidth >= width) {
      viewWidth = width;
    }

    let x = _.round(xTranslate * viewWidth + leftWidth);
    this.pos(x, _.round(viewWidth));
  },

  reset: function () {
    this.pos(0, this.config.sliderWidth);
  },

  _initUI: function (config) {
    this._el.style.display = "block";
    this.pos(0, this.config.sliderWidth);

    this._bindUI();
  },

  getXScale() {
    let { left, right, view } = this.sliderUI;

    let viewWidth = _.width(view);
    let leftWidth = _.width(left);
    let rightWidth = _.width(right);
    let width = this.width - leftWidth - rightWidth;

    //console.log('getXScale', width/viewWidth);
    return width / viewWidth;
  },

  getXTranslate() {
    let { left, view } = this.sliderUI;
    let viewWidth = _.width(view);
    let leftWidth = _.width(left);
    //console.log('getXTranslate', (view.offsetLeft - leftWidth) / viewWidth);
    return (view.offsetLeft - leftWidth) / viewWidth;
  },

  // TODO
  // - refactor
  getVisibleCoords() {
    let { left, view } = this.sliderUI;
    let width = view.getBoundingClientRect().width;
    let leftWidth = left.getBoundingClientRect().width;
    let offsetX = view.offsetLeft;

    return [ offsetX - leftWidth, offsetX + width ];
  },

  // TODO: event?
  _onChange() {
    if (this.onChange) {
      this.onChange(this.getXScale(), this.getXTranslate());
    }
  },

  // TODO:
  // - refactor
  // - speed improvement
  _bindUI: function () {
    const config = this.config;
    const { left, right, view } = this.sliderUI;
    const width = this.width;
    const leftWidth = v.SLIDER_LEFT_WIDTH;
    const rightWidth = v.SLIDER_RIGHT_WIDTH;

    let pOffsetLeft = this._el.getBoundingClientRect().left;

    this._bindSlider(left, (e) => {
      let x = e.clientX - leftWidth - pOffsetLeft;
      if (e.changedTouches) { // TouchedEvent
        let touch = e.changedTouches[0];
        x = touch.clientX - leftWidth - pOffsetLeft;
      }
      if (x < 0) x = 0;

      let overlayLeftWidth = x + leftWidth;
      let diff = this.overlayUI.left.getBoundingClientRect().width - overlayLeftWidth;
      let viewWidth = view.getBoundingClientRect().width + diff;

      if (viewWidth <= config.sliderMinWidth) {
        overlayLeftWidth += (viewWidth - config.sliderMinWidth);
        viewWidth = config.sliderMinWidth;
      }

      this.overlayUI.left.style.width = `${overlayLeftWidth}px`;
      view.style.width = `${viewWidth}px`;

      this._onChange();
    });

    this._bindSlider(right, (e) => {
      let diff = e.movementX;
      let prevMidWidth = view.getBoundingClientRect().width;
      if (e.changedTouches) { // TouchedEvent
        let touch = e.changedTouches[0];
        let overlayLeftWidth = this.overlayUI.left.getBoundingClientRect().width;
        let x = touch.clientX - leftWidth;
        diff = x - prevMidWidth - overlayLeftWidth - pOffsetLeft;
      }
      let midWidth =  prevMidWidth + diff;
      if (midWidth < config.sliderMinWidth) {
        diff = config.sliderMinWidth - prevMidWidth;
        midWidth = prevMidWidth + diff;
      }

      let overlayRightWidth = this.overlayUI.right.getBoundingClientRect().width - diff;
      if (overlayRightWidth < rightWidth) {
        midWidth += overlayRightWidth - rightWidth;
        overlayRightWidth = rightWidth;
      }

      this.overlayUI.right.style.width = `${overlayRightWidth}px`;
      view.style.width = `${midWidth}px`;

      this._onChange();
    });

    this._bindSlider(view, (e) => {
      let diff = e.movementX;
      if (e.changedTouches) { // TouchedEvent
        let touch = e.changedTouches[0];
        if (!this._sliderClientX) {
          this._sliderClientX = touch.clientX;
          return;
        }
        diff = touch.clientX - this._sliderClientX;
        this._sliderClientX = touch.clientX;
      }

      let overflowLeftWidth = this.overlayUI.left.getBoundingClientRect().width + diff;
      if (overflowLeftWidth < leftWidth) {
        diff += leftWidth - overflowLeftWidth;
        overflowLeftWidth = leftWidth;
      }

      let overflowRightWidth = this.overlayUI.right.getBoundingClientRect().width - diff;
      if (overflowRightWidth < rightWidth) {
        diff -= rightWidth - overflowRightWidth;
        overflowRightWidth = rightWidth;
        overflowLeftWidth = this.overlayUI.left.getBoundingClientRect().width + diff;
      }

      this.overlayUI.left.style.width = `${overflowLeftWidth}px`;
      this.overlayUI.right.style.width = `${overflowRightWidth}px`;

      this._onChange();
    });
  },

  _bindSlider(UI, cb) {
    let self = this;
    const doc = UI.ownerDocument;

		// https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
		let supportsPassive = false;
		try {
			let opts = Object.defineProperty({}, 'passive', {
				get: function() {
					supportsPassive = true;
				}
			});
			window.addEventListener("testPassive", null, opts);
			window.removeEventListener("testPassive", null, opts);
		} catch (e) {}

    UI.addEventListener('mousedown', initDrag);
    UI.addEventListener('touchstart', initDrag, supportsPassive ? {passive: true} : false);
    function initDrag() {
      _.addClass(self._el, 'grabbing');
      doc.addEventListener('mouseup', stopDrag)
      doc.addEventListener('touchend', stopDrag)
      subscribeOnMove();
    }

    function stopDrag() {
      _.removeClass(self._el, 'grabbing');
      unsubscribeOnMove();
      self._sliderClientX = null;
      doc.removeEventListener('mouseup', stopDrag);
      doc.removeEventListener('touchend', stopDrag);
    }

    function subscribeOnMove() {
      self._el.addEventListener('mousemove', moveListener);
      self._el.addEventListener('touchmove', moveListener, supportsPassive ? {passive: true} : false);
    }

    function unsubscribeOnMove() {
      self._el.removeEventListener('mousemove', moveListener);
      self._el.removeEventListener('touchmove', moveListener, supportsPassive ? {passive: true} : false);
    }

    function moveListener(e) { cb(e); }
  },

  get width() {
    return _.width(this._el);
  },

  get height() {
    return _.height(this._el);
  },

  render: function () {
    this._el.style.height = `${v.CANVAS_HEIGHT}px`

    let { left, right, view } = this.sliderUI;
    left.style.width = `${v.SLIDER_LEFT_WIDTH}px`
    left.style.height = `${v.SLIDER_HEIGHT - v.SLIDER_BORDER}px`
    left.style.marginTop = `-${v.SLIDER_BORDER}px`
    right.style.width = `${v.SLIDER_RIGHT_WIDTH}px`
    right.style.height = `${v.SLIDER_HEIGHT - v.SLIDER_BORDER}px`
    right.style.marginTop = `-${v.SLIDER_BORDER}px`

    view.style.height = `${v.SLIDER_HEIGHT - v.SLIDER_BORDER}px`
    view.style.marginTop = `-${v.SLIDER_BORDER}px`
    view.style.borderTopWidth = `${v.SLIDER_BORDER}px`
    view.style.borderBottomWidth = `${v.SLIDER_BORDER}px`

    this.overlayUI.left.style.height = `${v.CANVAS_HEIGHT}px`;
    this.overlayUI.right.style.height = `${v.CANVAS_HEIGHT}px`;
  },
}

module.exports = Slider


/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = "<div class=preview> <div class=canvas></div> <div class=slider> <div class=\"overlay overlay_left\"> <div class=slider_left><span></span></div> </div> <div class=slider_view> </div> <div class=\"overlay overlay_right\"> <div class=slider_right><span></span></div> </div> </div> </div> ";

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

const _ = __webpack_require__(0)

const Checkbox = __webpack_require__(48)

function CheckboxGroup(container) {
  this._container = container;
  this._checked = 0;
  this._options = { minChecked: 1 };
  this._el = null;
  this.render();
}

CheckboxGroup.prototype = {
  draw: function (data, options) {
    _.erase(this._el)
    this._checked = 0;
    _.extend(this._options, options)

    let disabled = options && options.disabled;
    _.forIn(data.types, (type, k) => {
      if (k == 'x') return;
      let checked = true;
      if (disabled && disabled.indexOf(k) !== -1) checked = false;
      if (checked) {
        this._checked++;
      }

      let c = new Checkbox(this._el, {
        checked: checked,
        id: k,
        label: data.names[k],
        color: data.colors[k],
        onChange: this._onChange.bind(this, k)
      });
    })
  },

  _onChange: function (k, enabled) {
    enabled ? this._checked++ : this._checked--;
    this._options.onChange(k, enabled);
  },

  render: function () {
    let controls = document.createElement('div');
    this._container.appendChild(controls);
    this._el = controls;

    this._el.addEventListener('click', (e) => {
      let t = e.target;
      let c = this._getCheckboxNode(t);
      if (!c) return;

      if (c.getAttribute('checked') === 'true') {
        if (this._checked === this._options.minChecked) {
          _.shake(c);
          e.stopPropagation();
          return;
        }
      }

    }, true)
  },

  _getCheckboxNode: function (node) {
    while (node && node != this._el) {
      if (_.hasClass(node, 'custom_checkbox')) return node;
      node = node.parentNode;
    }

    return null;
  }
}

module.exports = CheckboxGroup;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

const html = __webpack_require__(49);
const _ = __webpack_require__(0);

__webpack_require__(50);

const defaultOptions = {
  label: null,
  onChange: function () {},
  checked: false
}

function Checkbox(container, options) {
  this._container = container;
  this._el = this._init(); // TODO;
  this._options = _.extend({}, defaultOptions, options);

  this._input = this._el.querySelector('input[type="checkbox"]');
  this._label = this._el.querySelector('label');

  let rnd = Math.ceil(Math.random() * 100);
  let id = this._options.id

  this._input.setAttribute('id', `${id}-checkbox-${rnd}`);
  this._label.innerHTML = this._options.label;
  this._label.setAttribute('for', `${id}-checkbox-${rnd}`);

  this._input.checked = !!options.checked;
  this._el.setAttribute('checked', !!options.checked)
  _.addClass(this._el, 'active')

  this._el.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    this.toggle();
  })

  if (this._input.checked) {
    _.addClass(this._el, 'checked')
    //TODO: with classes
    this._el.style.background = this._options.color;
    this._el.style.color = 'white';
  } else {
    _.removeClass(this._el, 'checked')
    //TODO: with classes
    this._el.style.color = this._options.color;
    this._el.style.background = 'none';
  }
  this._el.style.borderColor = this._options.color;
}

Checkbox.prototype = {
  toggle: function () {
    this._input.checked = !this._input.checked;
    this._el.setAttribute('checked', this._input.checked)
    if (this._input.checked) {
      _.addClass(this._el, 'checked')
      //TODO: with classes
      this._el.style.color = 'white';
      this._el.style.background = this._options.color;
    } else {
      _.removeClass(this._el, 'checked')
      //TODO: with classes
      this._el.style.color = this._options.color;
      this._el.style.background = 'none';
    }
    this._options.onChange(this._input.checked);
  },

  _init: function () {
    let doc = document.createElement('div');
    doc.innerHTML = html;
    let el = doc.firstChild;
    this._container.appendChild(el);
    return el;
  }
}

module.exports = Checkbox;


/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = "<span class=custom_checkbox> <input type=checkbox /> <svg xmlns=http://www.w3.org/2000/svg viewBox=\"0 0 512 512\"><path d=\"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z\"/></svg> <label></label> </span> ";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
/******/ ]);