import fs from 'fs'
import myMarked from 'marked';

export const mdLinkExtractor = (file) => {
    const markdown = fs.readFileSync(file).toString();
    var renderer = new myMarked.Renderer();
    let links = [];
    renderer.link = (href, title, text) => {
        links.push({ href, text, file: file })
    };
    myMarked(markdown, { renderer: renderer })
    return links;
}


