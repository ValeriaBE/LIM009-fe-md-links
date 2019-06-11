#!/usr/bin/env node
import { isAbsolute, isRelative } from './path-controller.js'
import { readDir } from './directory-controller.js';

const mainFunction = (route) => {
    if (isAbsolute(route)) {
        return readDir(route)
    } else {
        isRelative(route)
        mdLinks(route)
    }
}
console.log(mainFunction(process.argv[2]))
