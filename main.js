#!/usr/bin/env node

var fs = require('fs')
var path = require('path')

// const content = fs.readFileSync(process.argv[2]);
// var str = content.toString().split('\n').length-1;
// console.log(str);
//let str = process.argv[2];
export const isAbsolute = (str) => {
    return path.isAbsolute(str);
} 

export const isRelative = (str) => {
    return path.resolve(str);
}

export const isFile = (str) => {
    const content = fs.statSync(str);
    return content.isFile();
}

export const isMd = (str) => {
    if(path.extname(str)==='.md'){
        return path.extname(str);
    } else{
        const error = 'no es md'
        return error;
    }
}

// const content = fs.readdir(process.argv[2],callback=(err,data)=>{
//         if (err) return console.error(err);
//         var str = data.toString().split('\n').length-1;
//         console.log(str);
//     })
    

// console.log(str)