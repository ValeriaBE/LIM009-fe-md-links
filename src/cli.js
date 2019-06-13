import { isAbsolute, isRelative } from './path-controller.js'
import { readDir } from './directory-controller.js';
import { validateArr } from './validate.js';

export const mdLinks = (route, options) => {
  return new Promise((resolve, reject)=>{
    if (isAbsolute(route)) {
        if(options){
           return resolve( validateArr(readDir(route))
            .then((res)=>{console.log(res)}))
        }else{
            console.log(readDir(route))
        }
    } else {
        mdLinks(isRelative(route), options)
    }
  })
}
