#!/usr/bin/env node
// import {isAbsolute,isRelative} from './path-controller.js'
// import { readDir} from './directory-controller.js';

// const  mdLinks = (route) => {
//     if(isAbsolute(route)){
//         return readDir(route)
//     }else{
//         isRelative(route)
//         mdLinks(route)
//     }
// }
// console.log(mdLinks(process.argv[2]))

import fs from 'fs'
import myMarked from 'marked';

const mdLinkExtractor = (file) =>{
    const markdown = fs.readFileSync(file).toString();
    var renderer = new myMarked.Renderer();
    let link = [];
    renderer.link = function (href, title,text) {
        link.push({href, text})
        
      };
      myMarked(markdown,{renderer:renderer})
        return link;
}


console.log(mdLinkExtractor('/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo/carpeta-2/README.md'))