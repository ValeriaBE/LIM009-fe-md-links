import fetch from 'node-fetch';
import {mdLinkExtractor} from './links-controller.js';
export const reccorerArr = (arr) =>{
   const arrPromises = arr.map(obj => {
        return fetch(obj.href)
        .then(res => {
            obj.status = res.status
            obj.ok = res.statusText
            return obj
       });
    })
    return Promise.all(arrPromises)
   }
// reccorerArr(readDir(process.argv[2]))
// .then((res)=>{console.log(res)})