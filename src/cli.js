
import { mdLinks } from "./mdLinks.js";
import { linkStats } from "./stats.js";


export const validatingOptions = (path, option, validateStats) => {
    let options = { validate: false };
    let string = '';
    if (option) {
        if (option === '--validate') {
            options.validate = true;
            return mdLinks(path, options)
                .then((result) => {
                    let newArr = result.map(element => {
                        string = (`${element.file} ${element.href} ${element.ok} ${element.status} ${element.text}`)
                        console.log(string);
                        return string;
                    })
                    return newArr.toString();
                })
        } if (option === '--stats' && validateStats === '--validate') {
            return mdLinks(path, options)
                .then(res => {
                    string = (
                        `Total: ${linkStats(res, true).Total} \nBroken: ${linkStats(res, true).Broken} \nUnique: ${linkStats(res, true).Unique}`)
                    console.log(string);
                    return string;
                })
        } else if (option === '--stats') {
            return mdLinks(path, options)
                .then(res => {
                    string = (
                        `Total: ${linkStats(res, false).Total} \nUnique: ${linkStats(res, false).Unique}`)
                    console.log(string);
                    return string;
                })
        }else {
            return mdLinks(path, options)
                .then(res => {
                    string = (
                        `Total: ${linkStats(res, true).Total} \nBroken: ${linkStats(res, true).Broken} \nUnique: ${linkStats(res, true).Unique}`)
                    console.log(string);
                    return string;
                })
            }
} else {
    return mdLinks(path, options)
        .then((result) => {
            let newArr = result.map(element => {
                string = (`${element.file} ${element.href} ${element.text}`)
                console.log(string);
                return string;
            })
            return newArr.toString();
        })
    }
}