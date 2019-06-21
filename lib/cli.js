"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validatingOptions = void 0;

var _mdLinks = require("./mdLinks.js");

var _stats = require("./stats.js");

var validatingOptions = function validatingOptions(path, option, validateStats) {
  var options = {
    validate: false
  };
  var string = '';

  if (option) {
    if (option === '--validate') {
      options.validate = true;
      return (0, _mdLinks.mdLinks)(path, option).then(function (result) {
        var newArr = result.map(function (element) {
          string = "".concat(element.file, " ").concat(element.href, " ").concat(element.ok, " ").concat(element.status, " ").concat(element.text);
          console.log(string);
          return string;
        });
        return newArr.toString();
      });
    }

    if (option === '--stats' && validateStats === '--validate') {
      return (0, _mdLinks.mdLinks)(path, option).then(function (res) {
        string = "Total: ".concat((0, _stats.linkStats)(res, true).Total, " \n Broken: ").concat((0, _stats.linkStats)(res, true).Broken, " \n Unique: ").concat((0, _stats.linkStats)(res, true).Unique);
        console.log(string);
        return string;
      });
    } else if (option === '--stats') {
      return (0, _mdLinks.mdLinks)(path, option).then(function (res) {
        string = "Total: ".concat((0, _stats.linkStats)(res, false).Total, " \n Unique: ").concat((0, _stats.linkStats)(res, false).Unique);
        console.log(string);
        return string;
      });
    }
  } else {
    return (0, _mdLinks.mdLinks)(path, false).then(function (result) {
      var newArr = result.map(function (element) {
        string = "".concat(element.file, " ").concat(element.href, " ").concat(element.text);
        console.log(string);
        return string;
      });
      return newArr.toString();
    });
  }
};

exports.validatingOptions = validatingOptions;