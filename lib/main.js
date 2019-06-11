#!/usr/bin/env node
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reccorerArr = void 0;

var _pathController = require("./path-controller.js");

var _directoryController = require("./directory-controller.js");

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _linksController = require("./links-controller.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// const mainFunction = (route) => {
//     if (isAbsolute(route)) {
//         return readDir(route)
//     } else {
//         isRelative(route)
//         mdLinks(route)
//     }
// }
// console.log(mainFunction(process.argv[2]))
var reccorerArr = function reccorerArr(arr) {
  var arrPromises = arr.map(function (link) {
    return (0, _nodeFetch["default"])(link.href).then(function (res) {
      link.status = res.status;
      link.ok = res.statusText;
      return link;
    });
  });
  return Promise.all(arrPromises);
};

exports.reccorerArr = reccorerArr;
reccorerArr((0, _linksController.mdLinkExtractor)(process.argv[2])).then(function (res) {
  console.log(res);
});