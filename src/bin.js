#!/usr/bin/env node
import {validatingOptions} from './cli.js'
const path =process.argv[2];
let option = process.argv[3];
let validateStats = process.argv[4];

validatingOptions(path, option, validateStats)
