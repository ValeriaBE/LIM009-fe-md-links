"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readDir = exports.isDir = exports.isFile = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _pathController = require("./path-controller.js");

var _linksController = require("./links-controller.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var isFile = function isFile(str) {
  var content = _fs["default"].statSync(str);

  return content.isFile();
};

exports.isFile = isFile;

var isDir = function isDir(str) {
  var content = _fs["default"].statSync(str);

  return content.isDirectory();
};

exports.isDir = isDir;

var readDir = function readDir(root) {
  var arr = [];

  if (isFile(root)) {
    if ((0, _pathController.isMd)(root)) {
      arr = arr.concat((0, _linksController.mdLinkExtractor)(root));
    }
  } else {
    _fs["default"].readdirSync(root).forEach(function (file) {
      var fullPath = _path["default"].join(root, file);

      arr = arr.concat(readDir(fullPath));
    });
  }

  return arr;
};

exports.readDir = readDir;