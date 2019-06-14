"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _pathController = require("./path-controller.js");

var _directoryController = require("./directory-controller.js");

var _validate = require("./validate.js");

var _stats = require("./stats.js");

var mdLinks = function mdLinks(route, options) {
  return new Promise(function (resolve, reject) {
    if ((0, _pathController.isAbsolute)(route)) {
      if (options) {
        return resolve((0, _validate.validateArr)((0, _directoryController.readDir)(route))).then(function (res) {
          console.log(res);
        });
      } else {
        resolve((0, _directoryController.readDir)(route));
      }
    } else {
      return resolve(mdLinks((0, _pathController.isRelative)(route), options)).then(function (res) {
        console.log(res);
      });
    }
  });
};

exports.mdLinks = mdLinks;