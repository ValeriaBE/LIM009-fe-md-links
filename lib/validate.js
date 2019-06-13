"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateArr = void 0;

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var validateArr = function validateArr(arr) {
  var arrPromises = arr.map(function (obj) {
    return (0, _nodeFetch["default"])(obj.href).then(function (res) {
      obj.status = res.status;
      obj.ok = res.statusText;
      return obj;
    });
  });
  return Promise.all(arrPromises);
};

exports.validateArr = validateArr;