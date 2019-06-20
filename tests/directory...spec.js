import {
    isFile,
    readDir
} from '../src/directory-controller.js'
import path from 'path'
import { mdLinkExtractor } from '../src/links-controller.js';

describe('isFile', () => {
    it('Debería ser una funcion', () => {
      expect(typeof (isFile)).toEqual('function')
    });
    it('Debería recibir un path absoluto y retornar un booleano', () => {
      expect(isFile(path.join(process.cwd(), '/README.md'))).toBe(true)
    });
    it('Debería recibir un string y retornar un booleano', () => {
      expect(isFile(process.cwd())).toBe(false)
    });
  })
  
describe('readDir', () => {
    it('Debería ser una funcion', () => {
      expect(typeof (readDir)).toEqual('function')
    });
    it('Debería recibir un path y retornar una array', () => {
      expect(readDir(path.join(process.cwd(), '/ejemplo/README.md'))).toEqual([{
        href: 'https://code-maven.com/reading-a-file-with-nodejs',
        text: 'hello estas',
        file: path.join(process.cwd(), '/ejemplo/README.md')
      },
      {
        href: 'https://github.com/ValeriaBE/LIM009-fe-md-links/tree/master/src',
        text: 'curriculum',
        file: path.join(process.cwd(), '/ejemplo/README.md')
      }
      ])
    });
    it('Debería recibir un path y retornar una array', () => {
      expect(readDir(path.join(process.cwd(), '/ejemplo'))).toEqual([
        {
          href: 'https://code-maven.com/reading-a-file-with-nodejs',
          text: 'hello estas',
          file: path.join(process.cwd(), '/ejemplo/README.md')
        },
        {
          href: 'https://github.com/ValeriaBE/LIM009-fe-md-links/tree/master/src',
          text: 'curriculum',
          file: path.join(process.cwd(), '/ejemplo/README.md')
        },
        {
          href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce',
          text: 'valeria',
          file: path.join(process.cwd(), '/ejemplo/carpeta-1/carpeta1-2/README.md')
        },
        {
          href: 'https://es.wiktionary.org/wiki/hi',
          text: 'apellido',
          file: path.join(process.cwd(), '/ejemplo/carpeta-1/carpeta1-2/README.md')
        },
        {
          href: 'https://github.com/ValeriaBE/LIM009-fe-md-links/tree/master/src',
          text: 'hola como estas',
          file: path.join(process.cwd(), '/ejemplo/carpeta-2/README.md')
        },
        {
          href: 'https://drive.google.com/file/d/1TUHy3SxgalOWBqH-rtHKbejsKCXoLxWD/view?usp=sharing',
          text: 'elementos a considerar al escribir tu CV',
          file: path.join(process.cwd(), '/ejemplo/carpeta-2/README.md')
        },
        {
          href: 'https://flippingbook.com/404',
          text: 'error',
          file: path.join(process.cwd(), '/ejemplo/carpeta-2/README.md')
        }
      ])
    });
  })
  
  describe('mdLinkExtractor', () => {
    it('Debería ser una funcion', () => {
      expect(typeof (mdLinkExtractor)).toEqual('function')
    });
    it('Debería recibir un path y retornar una array de objetos', () => {
      expect(mdLinkExtractor(path.join(process.cwd(), '/ejemplo/carpeta-2/README.md'))).toEqual([{
        href: 'https://github.com/ValeriaBE/LIM009-fe-md-links/tree/master/src',
        text: 'hola como estas',
        file: path.join(process.cwd(), '/ejemplo/carpeta-2/README.md')
      },
      {
        href: 'https://drive.google.com/file/d/1TUHy3SxgalOWBqH-rtHKbejsKCXoLxWD/view?usp=sharing',
        text: 'elementos a considerar al escribir tu CV',
        file: path.join(process.cwd(), '/ejemplo/carpeta-2/README.md')
      },
      {
        href: 'https://flippingbook.com/404',
        text: 'error',
        file: path.join(process.cwd(), '/ejemplo/carpeta-2/README.md')
      }
      ])
    });
  })
  