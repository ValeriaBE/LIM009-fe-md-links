#!/usr/bin/env node
"use strict";

var _mdLinks = require("./mdLinks.js");

var _stats = require("./stats.js");

var path = process.argv[2];
var option = process.argv[3];
var validate = process.argv[4];
var options = {
  validate: false
};

var validatingOptions = function validatingOptions() {
  if (option) {
    if (option === '--validate') {
      options.validate = true;
      (0, _mdLinks.mdLinks)(path, option).then(function (result) {
        result.forEach(function (element) {
          console.log("".concat(element.file, " ").concat(element.href, " ").concat(element.ok, " ").concat(element.status, " ").concat(element.text));
        });
      });
    }

    if (option === '--stats' && validate === '--validate') {
      (0, _mdLinks.mdLinks)(path, option).then(function (res) {
        console.log("Total: ".concat((0, _stats.linkStats)(res, true).Total, " Broken: ").concat((0, _stats.linkStats)(res, true).Broken, " Unique: ").concat((0, _stats.linkStats)(res, true).Unique));
      });
    } else if (option === '--stats' || validate === 'stats') {
      (0, _mdLinks.mdLinks)(path, option).then(function (res) {
        console.log("Total: ".concat((0, _stats.linkStats)(res, false).Total, " Unique: ").concat((0, _stats.linkStats)(res, false).Unique));
      });
    }
  } else {
    (0, _mdLinks.mdLinks)(path, false).then(function (result) {
      result.forEach(function (element) {
        console.log("".concat(element.file, " ").concat(element.href, " ").concat(element.text));
      });
    });
  }
};

validatingOptions();