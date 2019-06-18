
import { mdLinks } from "./mdLinks.js";
import { linkStats } from "./stats.js";


export const validatingOptions = (path, option, validateStats) => {
    let options = { validate: false };
    let string = '';
    if (option) {
        if (option === '--validate') {
            options.validate = true;
            return mdLinks(path, option)
                .then((result) => {
                    let newArr = result.map(element => {
                        string = (`${element.file} ${element.href} ${element.ok} ${element.status} ${element.text}`)
                        console.log(string);
                        return string;
                    })
                    return newArr.toString();
                })
        } if (option === '--stats' && validateStats === '--validate') {
            return mdLinks(path, option)
                .then(res => {
                    string = (
                        `Total: ${linkStats(res, true).Total} 
Broken: ${linkStats(res, true).Broken} 
Unique: ${linkStats(res, true).Unique}`)
                    console.log(string);
                    return string;
                })
        } if (option === '--stats') {
            return mdLinks(path, option)
                .then(res => {
                    string = (
                        `Total: ${linkStats(res, false).Total} 
Unique: ${linkStats(res, false).Unique}`)
                    console.log(string);
                    return string;
                })
        }
    } else {
        return mdLinks(path, false)
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