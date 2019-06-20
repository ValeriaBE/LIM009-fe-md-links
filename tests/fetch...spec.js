import { validateArr } from '../src/validate.js';
import {
    readDir
} from '../src/directory-controller.js'
import path from 'path'
import fetchMock from '../__mocks__/node-fetch.js';
fetchMock.config.sendAsJson = false;

describe('validateArr', () => {
    fetchMock
    .mock('https://es.wiktionary.org/wiki/hi', 200)
    .mock('https://code-maven.com/reading-a-file-with-nodejs', 200)
    .mock('https://github.com/ValeriaBE/LIM009-fe-md-links/tree/master/src', 200)
    .mock('https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce', 200)
    .mock('https://drive.google.com/file/d/1TUHy3SxgalOWBqH-rtHKbejsKCXoLxWD/view?usp=sharing', 200)
    .mock('https://flippingbook.com/404', 404)

    it('should call the API', () => {
       validateArr(readDir(path.join(process.cwd(), '/ejemplo/carpeta-2/README.md')))
        .then(data => {
          expect(data).toEqual([{
            href: 'https://github.com/ValeriaBE/LIM009-fe-md-links/tree/master/src',
            text: 'hola como estas',
            file: path.join(process.cwd(), '/ejemplo/carpeta-2/README.md'),
            status: 200,
            ok: 'OK'
          },
          {
            href: 'https://drive.google.com/file/d/1TUHy3SxgalOWBqH-rtHKbejsKCXoLxWD/view?usp=sharing',
            text: 'elementos a considerar al escribir tu CV',
            file: path.join(process.cwd(), '/ejemplo/carpeta-2/README.md'),
            status: 200,
            ok: 'OK'
          }, {
            href: 'https://flippingbook.com/404',
            text: 'error',
            file: path.join(process.cwd(), '/ejemplo/carpeta-2/README.md'),
            status: 404,
            ok: 'fail'
          }]);
        });
    })
  })
  