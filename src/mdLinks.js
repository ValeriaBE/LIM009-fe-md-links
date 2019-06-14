import { isAbsolute, isRelative } from './path-controller.js'
import { readDir } from './directory-controller.js';
import { validateArr } from './validate.js';

export const mdLinks = (route, options) => {
  return new Promise((resolve)=>{
    if (isAbsolute(route)) {
        if(options){
            resolve(validateArr(readDir(route)))
        }else{
        resolve(readDir(route))
        }
    } else {
         resolve((mdLinks(isRelative(route), options)))
    }
  })
}
