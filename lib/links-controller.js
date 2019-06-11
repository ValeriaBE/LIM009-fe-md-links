"use strict";

var _fs = _interopRequireDefault(require("fs"));

var _marked = _interopRequireDefault(require("marked"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var mdLinkExtractor = function mdLinkExtractor(file) {
  var markdown = _fs["default"].readFileSync(file).toString();

  var renderer = new _marked["default"].Renderer();
  var link = [];

  renderer.link = function (href, title, text) {
    link.push({
      href: href,
      text: text
    });
  };

  (0, _marked["default"])(markdown, {
    renderer: renderer
  });
  return link;
};

console.log(mdLinkExtractor('/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo/carpeta-2/README.md'));