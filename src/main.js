#!/usr/bin/env node

// var fs = require('fs')
import {fs} from 'fs';
var path = require('path')


// export const isAbsolute = (str) => {
//     return path.isAbsolute(str);
// } 

// export const isRelative = (str) => {
//     return path.resolve(str);
// }

// export const isFile = (str) => {
// const content = fs.statSync(str);
//     return content.isFile();
// }

// export const isMd = (str) => {
//     if(path.extname(str)==='.md'){
//         return path.extname(str);
//     } else{
//         const error = 'no es md'
//         return error;
//     }
// }

const readDir = (files) => {
    let arrayFiles = [];
    fs.readdir(files, (err, data) => {
        if (err) 
        return console.error(err);
        data.forEach(file => {
            const fullPath = path.join(files, file)
            if(isDir(fullPath)){
                arrayFiles = arrayFiles.concat(readDir(fullPath))
            }else{
                arrayFiles.push(fullPath)
                console.log(arrayFiles)
            }
        })
    })
    
}
console.log(readDir(process.argv[2]))

const isDir = (str) => {
    const content = fs.statSync(str);
    return (content.isDirectory());
}
