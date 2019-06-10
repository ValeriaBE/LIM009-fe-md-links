"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isMd = exports.isRelative = exports.isAbsolute = void 0;

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var isAbsolute = function isAbsolute(str) {
  return _path["default"].isAbsolute(str);
};

exports.isAbsolute = isAbsolute;

var isRelative = function isRelative(str) {
  return _path["default"].resolve(str);
};

exports.isRelative = isRelative;

var isMd = function isMd(str) {
  return _path["default"].extname(str) === '.md';
};

exports.isMd = isMd;