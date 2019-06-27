import { mdLinks } from '../src/mdLinks.js';
import fetchMock from '../__mocks__/node-fetch.js';
import path from 'path'

fetchMock.config.sendAsJson = false;
describe('mdLinks', () => {
    fetchMock
    .mock('https://es.wiktionary.org/wiki/hi', 200)
    .mock('https://code-maven.com/reading-a-file-with-nodejs', 200)
    .mock('https://github.com/ValeriaBE/LIM009-fe-md-links/tree/master/src', 200)
    .mock('https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce', 200)
    .mock('https://drive.google.com/file/d/1TUHy3SxgalOWBqH-rtHKbejsKCXoLxWD/view?usp=sharing', 200)
    .mock('https://flippingbook.com/404', 404)
    .mock('https://es.wtionary.org/wiki/hi', { throws: '/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/prueba-tests/README.md https://es.wtionary.org/wiki/hi fail undefined no' })

    it('Deberia retornar un array con href, text, file, ok, status', () => {
      return mdLinks(path.join(process.cwd(), '/ejemplo'), {validate:true})
        .then(data => {
          expect(data).toEqual([
            {
              href: 'https://code-maven.com/reading-a-file-with-nodejs',
              text: 'hello estas',
              file: path.join(process.cwd(), '/ejemplo/README.md'),
              status: 200,
              ok: 'OK'
            },
            {
              href: 'https://github.com/ValeriaBE/LIM009-fe-md-links/tree/master/src',
              text: 'curriculum',
              file: path.join(process.cwd(), '/ejemplo/README.md'),
              status: 200,
              ok: 'OK'
            },
            {
              href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce',
              text: 'valeria',
              file: path.join(process.cwd(), '/ejemplo/carpeta-1/carpeta1-2/README.md'),
              status: 200,
              ok: 'OK'
            },
            {
              href: 'https://es.wiktionary.org/wiki/hi',
              text: 'apellido',
              file: path.join(process.cwd(), '/ejemplo/carpeta-1/carpeta1-2/README.md'),
              status: 200,
              ok: 'OK'
            },
            {
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
            },
            {
              href: 'https://flippingbook.com/404',
              text: 'error',
              file: path.join(process.cwd(), '/ejemplo/carpeta-2/README.md'),
              status: 404,
              ok: 'fail'
            }
          ]);
        });
    })
    it('Deberia retornar un array con href, text, file, ok, status', () => {
      return mdLinks(path.join(process.cwd(), '/ejemplo'), {validate:false})
        .then(data => {
          expect(data).toEqual([
            {
              href: 'https://code-maven.com/reading-a-file-with-nodejs',
              text: 'hello estas',
              file: path.join(process.cwd(), '/ejemplo/README.md'),
            },
            {
              href: 'https://github.com/ValeriaBE/LIM009-fe-md-links/tree/master/src',
              text: 'curriculum',
              file: path.join(process.cwd(), '/ejemplo/README.md'),
            },
            {
              href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce',
              text: 'valeria',
              file: path.join(process.cwd(), '/ejemplo/carpeta-1/carpeta1-2/README.md'),
            },
            {
              href: 'https://es.wiktionary.org/wiki/hi',
              text: 'apellido',
              file: path.join(process.cwd(), '/ejemplo/carpeta-1/carpeta1-2/README.md'),
            },
            {
              href: 'https://github.com/ValeriaBE/LIM009-fe-md-links/tree/master/src',
              text: 'hola como estas',
              file: path.join(process.cwd(), '/ejemplo/carpeta-2/README.md'),
            },
            {
              href: 'https://drive.google.com/file/d/1TUHy3SxgalOWBqH-rtHKbejsKCXoLxWD/view?usp=sharing',
              text: 'elementos a considerar al escribir tu CV',
              file: path.join(process.cwd(), '/ejemplo/carpeta-2/README.md'),
            },
            {
              href: 'https://flippingbook.com/404',
              text: 'error',
              file: path.join(process.cwd(), '/ejemplo/carpeta-2/README.md'),
            }
          ]);
        });
    })
    it('Deberia retornar un array con href, text, file, ok, status', () => {
      return mdLinks('ejemplo', {validate:false})
        .then(data => {
          expect(data).toEqual([
            {
              href: 'https://code-maven.com/reading-a-file-with-nodejs',
              text: 'hello estas',
              file: path.join(process.cwd(), '/ejemplo/README.md'),
            },
            {
              href: 'https://github.com/ValeriaBE/LIM009-fe-md-links/tree/master/src',
              text: 'curriculum',
              file: path.join(process.cwd(), '/ejemplo/README.md'),
            },
            {
              href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce',
              text: 'valeria',
              file: path.join(process.cwd(), '/ejemplo/carpeta-1/carpeta1-2/README.md'),
            },
            {
              href: 'https://es.wiktionary.org/wiki/hi',
              text: 'apellido',
              file: path.join(process.cwd(), '/ejemplo/carpeta-1/carpeta1-2/README.md'),
            },
            {
              href: 'https://github.com/ValeriaBE/LIM009-fe-md-links/tree/master/src',
              text: 'hola como estas',
              file: path.join(process.cwd(), '/ejemplo/carpeta-2/README.md'),
            },
            {
              href: 'https://drive.google.com/file/d/1TUHy3SxgalOWBqH-rtHKbejsKCXoLxWD/view?usp=sharing',
              text: 'elementos a considerar al escribir tu CV',
              file: path.join(process.cwd(), '/ejemplo/carpeta-2/README.md'),
            },
            {
              href: 'https://flippingbook.com/404',
              text: 'error',
              file: path.join(process.cwd(), '/ejemplo/carpeta-2/README.md'),
            }
          ]);
        });
    })
    it('Deberia retornar un array con href, text, file, ok, status', () => {
      return mdLinks('ejemplo', {validate:true})
        .then(data => {
          expect(data).toEqual([
            {
              file: path.join(process.cwd(), '/ejemplo/README.md'),
              href: 'https://code-maven.com/reading-a-file-with-nodejs',
              status: 200,
              ok: 'OK',
              text: 'hello estas',
            },
            {
              file: path.join(process.cwd(), '/ejemplo/README.md'),
              href: 'https://github.com/ValeriaBE/LIM009-fe-md-links/tree/master/src',
              status: 200,
              ok: 'OK',
              text: 'curriculum'
            },
            {
              file: path.join(process.cwd(), '/ejemplo/carpeta-1/carpeta1-2/README.md'),
              href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce',
              status: 200,
              ok: 'OK',
              text: 'valeria'
            },
            {
              file: path.join(process.cwd(), '/ejemplo/carpeta-1/carpeta1-2/README.md'),
              href: 'https://es.wiktionary.org/wiki/hi',
              status: 200,
              ok: 'OK',
              text: 'apellido'
            },
            {
              file: path.join(process.cwd(), '/ejemplo/carpeta-2/README.md'),
              href: 'https://github.com/ValeriaBE/LIM009-fe-md-links/tree/master/src',
              status: 200,
              ok: 'OK',
              text: 'hola como estas'
            },
            {
              file: path.join(process.cwd(), '/ejemplo/carpeta-2/README.md'),
              href: 'https://drive.google.com/file/d/1TUHy3SxgalOWBqH-rtHKbejsKCXoLxWD/view?usp=sharing',
              status: 200,
              ok: 'OK',
              text: 'elementos a considerar al escribir tu CV'
            },
            {
              file: path.join(process.cwd(), '/ejemplo/carpeta-2/README.md'),
              href: 'https://flippingbook.com/404',
              status: 404,
              ok: 'fail',
              text: 'error'
            }
          ]);
        });
    })
    it('Deberia retornar un array con href, text, file, ok, status', () => {
      return mdLinks(path.join(process.cwd(), '/ejemplo'), {validate:null})
        .then(data => {
          expect(data).toEqual([
            {
              href: 'https://code-maven.com/reading-a-file-with-nodejs',
              text: 'hello estas',
              file: path.join(process.cwd(), '/ejemplo/README.md'),
            },
            {
              href: 'https://github.com/ValeriaBE/LIM009-fe-md-links/tree/master/src',
              text: 'curriculum',
              file: path.join(process.cwd(), '/ejemplo/README.md'),
            },
            {
              href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce',
              text: 'valeria',
              file: path.join(process.cwd(), '/ejemplo/carpeta-1/carpeta1-2/README.md'),
            },
            {
              href: 'https://es.wiktionary.org/wiki/hi',
              text: 'apellido',
              file: path.join(process.cwd(), '/ejemplo/carpeta-1/carpeta1-2/README.md'),
            },
            {
              href: 'https://github.com/ValeriaBE/LIM009-fe-md-links/tree/master/src',
              text: 'hola como estas',
              file: path.join(process.cwd(), '/ejemplo/carpeta-2/README.md'),
            },
            {
              href: 'https://drive.google.com/file/d/1TUHy3SxgalOWBqH-rtHKbejsKCXoLxWD/view?usp=sharing',
              text: 'elementos a considerar al escribir tu CV',
              file: path.join(process.cwd(), '/ejemplo/carpeta-2/README.md'),
            },
            {
              href: 'https://flippingbook.com/404',
              text: 'error',
              file: path.join(process.cwd(), '/ejemplo/carpeta-2/README.md'),
            }
          ]);
        });
    })
  });