"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _pathController = require("./path-controller.js");

var _directoryController = require("./directory-controller.js");

var _validate = require("./validate.js");

var mdLinks = function mdLinks(route, options) {
  return new Promise(function (resolve, reject) {
    if ((0, _pathController.isAbsolute)(route)) {
      if (options) {
        return resolve((0, _validate.validateArr)((0, _directoryController.readDir)(route)).then(function (res) {
          console.log(res);
        }));
      } else {
        console.log((0, _directoryController.readDir)(route));
      }
    } else {
      mdLinks((0, _pathController.isRelative)(route), options);
    }
  });
}; // mdLinks(process.argv[2], process.argv[3])
// .then((res)=>console.log(res))
// .catch(err => console.log(err))


exports.mdLinks = mdLinks;