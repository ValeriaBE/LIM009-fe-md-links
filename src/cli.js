import { isAbsolute, isRelative } from './path-controller.js'
import { readDir } from './directory-controller.js';
import { validateArr } from './validate.js';
import { linkStats } from './stats.js';

export const mdLinks = (route, options) => {
  return new Promise((resolve, reject)=>{
    if (isAbsolute(route)) {
        if(options){
            resolve(validateArr(readDir(route)))
            .then((res)=>{console.log(res)})
        }else{
        resolve(readDir(route))
        }
    } else {
         resolve((mdLinks(isRelative(route), options)))
        .then(res=>{console.log(res)})
    }
  })
}
