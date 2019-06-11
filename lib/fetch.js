"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reccorerArr = void 0;

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _linksController = require("./links-controller.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var reccorerArr = function reccorerArr(arr) {
  var arrPromises = arr.map(function (obj) {
    return (0, _nodeFetch["default"])(obj.href).then(function (res) {
      obj.status = res.status;
      obj.ok = res.statusText;
      return obj;
    });
  });
  return Promise.all(arrPromises);
};

exports.reccorerArr = reccorerArr;
reccorerArr((0, _linksController.mdLinkExtractor)(process.argv[2])).then(function (res) {
  console.log(res);
});