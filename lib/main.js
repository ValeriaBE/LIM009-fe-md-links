#!/usr/bin/env node
"use strict";

var _cli = require("./cli.js");

var path = process.argv[2];
var option = process.argv[3];
var options = {};

if (option === '--validate') {
  options.validate = true;
  (0, _cli.mdLinks)(path, options).then(function (result) {
    console.log(result);
  });
} else {
  (0, _cli.mdLinks)(path).then(function (result) {
    console.log(result);
  });
}