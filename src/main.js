#!/usr/bin/env node
import { mdLinks } from "./cli.js";
const path =process.argv[2];
let option = process.argv[3];
let options = {};

const validatingOptions = () => {
    if(option === '--validate'){
        options.validate = true;
        mdLinks(path, option)
        .then((result)=>{
            console.log(result)
        })
    }else{
        mdLinks(path)
        .then((result)=>{
            console.log(result)
    })
}
}

validatingOptions()


