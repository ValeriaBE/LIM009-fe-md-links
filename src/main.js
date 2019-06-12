#!/usr/bin/env node
import { isAbsolute, isRelative } from './path-controller.js'
import { readDir } from './directory-controller.js';
import { reccorerArr } from './validate.js';

const mainFunction = (route, options) => {
    if (isAbsolute(route)) {
        if(options === 'true'){
            reccorerArr(readDir(route))
            .then((res)=>{console.log(res)})
        }else{
            console.log(readDir(route))
        }
    } else {
        mainFunction(isRelative(route), options)
    }
}
mainFunction(process.argv[2], process.argv[3])
