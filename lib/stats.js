"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.linkStats = void 0;

var linkStats = function linkStats(arr, stats) {
  var total = arr.length;
  var broken = arr.filter(function (x) {
    return x.ok == 'fail';
  });
  var newLinkArr = arr.map(function (x) {
    return x.href;
  });
  var unique = Array.from(new Set(newLinkArr));

  if (stats) {
    return {
      Total: total,
      Broken: broken.length,
      Unique: unique.length
    };
  } else {
    return {
      Total: total,
      Unique: unique.length
    };
  }
};

exports.linkStats = linkStats;