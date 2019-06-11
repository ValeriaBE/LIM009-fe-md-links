#!/usr/bin/env node
import { isAbsolute, isRelative } from './path-controller.js'
import { readDir } from './directory-controller.js';

// const mainFunction = (route) => {
//     if (isAbsolute(route)) {
//         return readDir(route)
//     } else {
//         isRelative(route)
//         mdLinks(route)
//     }
// }
// console.log(mainFunction(process.argv[2]))
import fetch from 'node-fetch';
import {mdLinkExtractor} from './links-controller.js';
export const reccorerArr = (arr) =>{
   const arrPromises = arr.map(link => {
        return fetch(obj.href)
        .then(res => {
            obj.status = res.status
            obj.ok = res.statusText
            return link
       });
    })
    return Promise.all(arrPromises)
   }
reccorerArr(mdLinkExtractor(process.argv[2]))
.then((res)=>{console.log(res)})