"use strict";

var _fs = _interopRequireDefault(require("fs"));

var _markdownLinkExtractor = _interopRequireDefault(require("markdown-link-extractor"));

var _removeMarkdown = _interopRequireDefault(require("remove-markdown"));

var _markdownLinkCheck = _interopRequireDefault(require("markdown-link-check"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var mdLinkExtractor = function mdLinkExtractor(file) {
  var markdown = _fs["default"].readFileSync(file).toString();

  var links = (0, _markdownLinkExtractor["default"])(markdown);
  var plainText = (0, _removeMarkdown["default"])(markdown); //     markdownLinkCheck(markdown, (results) =>{
  //     results.forEach( (result) =>{
  //         console.log('%s is %s', result.link, result.status);
  //     });
  // });

  var arrOfLinks = [];
  links.forEach(function (link) {
    arrOfLinks.push({
      href: link,
      text: plainText
    });
  });
  console.log(arrOfLinks);
};

mdLinkExtractor('/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo/carpeta-2/README.md');