#!/usr/bin/env node
import { isAbsolute, isRelative } from './path-controller.js'
import { readDir } from './directory-controller.js';
import { reccorerArr } from './validate.js';

const mainFunction = (route) => {
    if (isAbsolute(route)) {
        reccorerArr(readDir(route))
        .then((res)=>{console.log(res)})
    } else {
        mainFunction(isRelative(route))
    }
}
mainFunction(process.argv[2])
