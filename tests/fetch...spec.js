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
    .mock('https://es.wtionary.org/wiki/hi', { throws: '/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/prueba-tests/README.md https://es.wtionary.org/wiki/hi fail (NO HAY STATUS PORQUE LINK FALLÓ) no' })

  it('should call the API', () => {
    validateArr(readDir(path.join(process.cwd(), '/prueba-tests/README.md')))
      .then(data => {
        expect(data).toEqual([{
          href: 'https://es.wiktionary.org/wiki/hi',
          text: 'lol',
          file: path.join(process.cwd(), '/prueba-tests/README.md'),
          status: 200,
          ok: 'OK'
        },
        {
          href: 'https://es.wtionary.org/wiki/hi',
          text: 'no',
          file: path.join(process.cwd(), '/prueba-tests/README.md'),
          status: '(NO HAY STATUS PORQUE LINK FALLÓ)',
          ok: 'fail'
        }]);
      })
  })

})
