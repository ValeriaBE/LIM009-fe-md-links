import fs from "fs"
import path from 'path';
import { isMd } from './path-controller.js'
import { mdLinkExtractor } from "./links-controller.js";
import { reccorerArr } from "./validate.js";

export const isFile = (str) => {
    const content = fs.statSync(str);
    return content.isFile();
}
export const readDir = (root) => {
    let arr = [];
    if (isFile(root)) {
        if (isMd(root)) {
            arr = arr.concat(mdLinkExtractor(root))
        }
    } else {
        fs.readdirSync(root).forEach(file => {
            const fullPath = path.join(root, file)
            arr = arr.concat(readDir(fullPath))
        })
    }
    return arr;
}