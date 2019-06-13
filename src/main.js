#!/usr/bin/env node
import { mdLinks } from "./cli.js";
const path =process.argv[2];
let option = process.argv[3];
let options = {};

    if(option === '--validate'){
        options.validate = true;
        mdLinks(path, options)
        .then((result)=>{
            console.log(result)
        })
    }else{
        mdLinks(path)
        .then((result)=>{
            console.log(result)
    })
}


