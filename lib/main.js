#!/usr/bin/env node
"use strict";

var _pathController = require("./path-controller.js");

var _directoryController = require("./directory-controller.js");

var _validate = require("./validate.js");

var mainFunction = function mainFunction(route) {
  if ((0, _pathController.isAbsolute)(route)) {
    (0, _validate.reccorerArr)((0, _directoryController.readDir)(route)).then(function (res) {
      console.log(res);
    });
  } else {
    mainFunction((0, _pathController.isRelative)(route));
  }
};

mainFunction(process.argv[2]);