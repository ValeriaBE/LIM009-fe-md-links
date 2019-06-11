#!/usr/bin/env node
"use strict";

var _pathController = require("./path-controller.js");

var _directoryController = require("./directory-controller.js");

var mdLinks = function mdLinks(route) {
  if ((0, _pathController.isAbsolute)(route)) {
    return (0, _directoryController.readDir)(route);
  } else {
    (0, _pathController.isRelative)(route);
    mdLinks(route);
  }
};

console.log(mdLinks(process.argv[2]));