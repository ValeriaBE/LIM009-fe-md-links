"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinkExtractor = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _marked = _interopRequireDefault(require("marked"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var mdLinkExtractor = function mdLinkExtractor(file) {
  var markdown = _fs["default"].readFileSync(file).toString();

  var renderer = new _marked["default"].Renderer();
  var links = [];

  renderer.link = function (href, title, text) {
    links.push({
      href: href,
      text: text.substring(0, 50),
      file: file
    });
  };

  (0, _marked["default"])(markdown, {
    renderer: renderer
  });
  return links;
};

exports.mdLinkExtractor = mdLinkExtractor;