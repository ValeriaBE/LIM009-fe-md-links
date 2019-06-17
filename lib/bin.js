#!/usr/bin/env node
"use strict";

var _cli = require("./cli.js");

var path = process.argv[2];
var option = process.argv[3];
var validateStats = process.argv[4];
(0, _cli.validatingOptions)(path, option, validateStats);