#!/usr/bin/env node
"use strict";

var _cli = require("./cli.js");

var path = process.argv[2];
var option = process.argv[3];
var options = {};

var validatingOptions = function validatingOptions() {
  if (option === '--validate') {
    options.validate = true;
    (0, _cli.mdLinks)(path, option).then(function (result) {
      console.log(result);
    });
  } else {
    (0, _cli.mdLinks)(path).then(function (result) {
      console.log(result);
    });
  }
};

validatingOptions();