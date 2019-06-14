#!/usr/bin/env node
import { mdLinks } from "./mdLinks.js";
import { linkStats } from "./stats.js";

const path =process.argv[2];
let option = process.argv[3];
let validate = process.argv[4];
let options = {validate:false};

const validatingOptions = () => {
    if(option){
    if(option === '--validate'){
        options.validate = true;
        mdLinks(path, option)
        .then((result)=>{
            result.forEach(element =>{
                console.log(`${element.file} ${element.href} ${element.ok} ${element.status} ${element.text}`)
            })
        })
    }if(option === '--stats' && validate === '--validate'){
            mdLinks(path, option)
            .then(res => {console.log(
                `Total: ${linkStats(res, true).Total} Broken: ${linkStats(res, true).Broken} Unique: ${linkStats(res, true).Unique}`)})
            }else if(option === '--stats' || validate === 'stats'){
                mdLinks(path, option)
            .then(res => {console.log(
            `Total: ${linkStats(res, false).Total} Unique: ${linkStats(res, false).Unique}`)})
            }
    }else{
        mdLinks(path, false)
        .then((result)=>{
            result.forEach(element =>{
                console.log(`${element.file} ${element.href} ${element.text}`)
            })
        })
    }
}

validatingOptions()