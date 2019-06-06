#!/usr/bin/env node
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isMd = exports.isFile = exports.isRelative = exports.isAbsolute = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var fsPromises = _fs["default"].promises;

var isAbsolute = function isAbsolute(str) {
  return _path["default"].isAbsolute(str);
};

exports.isAbsolute = isAbsolute;

var isRelative = function isRelative(str) {
  return _path["default"].resolve(str);
};

exports.isRelative = isRelative;

var isFile = function isFile(str) {
  var content = _fs["default"].statSync(str);

  return content.isFile();
};

exports.isFile = isFile;

var isMd = function isMd(str) {
  return _path["default"].extname(str) === '.md';
};

exports.isMd = isMd;

var isDir = function isDir(str) {
  return fsPromises.stat(str) //retorna promise
  .then(function (result) {
    return result.isDirectory(); //retorna un booleano
  });
};

var readDir = function readDir(root) {
  //retorna una promesa y ques es promesa retorna un array Result
  return fsPromises.readdir(root) //retorna un array
  .then(function (files) {
    var arrPromises = files.map(function (file) {
      var fullPath = _path["default"].join(root, file);

      return isDir(fullPath) //retorna una promesa que resuelve un booleano
      .then(function (_boolean) {
        var arrDeMarkdowns = [];

        if (_boolean) {
          return readDir(fullPath).then(function (arrMds) {
            arrDeMarkdowns = arrDeMarkdowns.concat(arrMds);
            return arrDeMarkdowns;
          });
        } else {
          if (isMd(fullPath)) {
            arrDeMarkdowns.push(fullPath);
          }
        }

        return arrDeMarkdowns;
      });
    });
    return Promise.all(arrPromises).then(function (respuestas) {
      var result = [];
      respuestas.forEach(function (arr) {
        result = result.concat(arr);
      });
      return result;
    });
  });
};

readDir('/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo').then(function (resultado) {
  console.log(resultado);
});