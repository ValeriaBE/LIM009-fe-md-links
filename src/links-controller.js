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