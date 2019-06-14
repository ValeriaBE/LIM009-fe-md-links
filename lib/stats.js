"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unique = exports.broken = exports.total = exports.linkStats = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var linkStats = function linkStats(arr, stats) {
  if (stats) {
    return {
      Total: total(arr),
      Broken: broken(arr),
      Unique: unique(arr)
    };
  } else {
    return {
      Total: total(arr),
      Unique: unique(arr)
    };
  }
};

exports.linkStats = linkStats;

var total = function total(arr) {
  var total = arr.length;
  return total;
};

exports.total = total;

var broken = function broken(arr) {
  arr = arr.filter(function (x) {
    return x.ok == 'fail';
  });
  return arr.length;
};

exports.broken = broken;

var unique = function unique(arr) {
  var newLinkArr = arr.map(function (x) {
    return x.href;
  });

  var unique = _toConsumableArray(new Set(newLinkArr));

  return unique.length;
};

exports.unique = unique;