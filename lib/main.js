#!/usr/bin/env node
// import {isAbsolute,isRelative} from './path-controller.js'
// import { readDir} from './directory-controller.js';
// const  mdLinks = (route) => {
//     if(isAbsolute(route)){
//         return readDir(route)
//     }else{
//         isRelative(route)
//         mdLinks(route)
//     }
// }
// console.log(mdLinks(process.argv[2]))
"use strict";

var _fs = _interopRequireWildcard(require("fs"));

var _markdownLinkExtractor = _interopRequireDefault(require("markdown-link-extractor"));

var _removeMarkdown = _interopRequireDefault(require("remove-markdown"));

var _markdownLinkCheck = _interopRequireDefault(require("markdown-link-check"));

var _marked = _interopRequireDefault(require("marked"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var mdLinkExtractor = function mdLinkExtractor(file) {
  var markdown = _fs["default"].readFileSync(file).toString();

  var renderer = new _marked["default"].Renderer();
  var link = [];

  renderer.link = function (href, title, text, file) {
    link.push({
      href: href,
      text: text,
      file: file
    });
  };

  (0, _marked["default"])(markdown, {
    renderer: renderer
  });
  return link;
};

console.log(mdLinkExtractor('/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo/carpeta-2/README.md'));