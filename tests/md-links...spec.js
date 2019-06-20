import { mdLinks } from '../src/mdLinks.js';
import fetchMock from '../__mocks__/node-fetch.js';
fetchMock.config.sendAsJson = false;
describe('mdLinks', () => {
    fetchMock
    .mock('https://es.wiktionary.org/wiki/hi', 200)
    .mock('https://code-maven.com/reading-a-file-with-nodejs', 200)
    .mock('https://github.com/ValeriaBE/LIM009-fe-md-links/tree/master/src', 200)
    .mock('https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce', 200)
    .mock('https://drive.google.com/file/d/1TUHy3SxgalOWBqH-rtHKbejsKCXoLxWD/view?usp=sharing', 200)
    .mock('https://flippingbook.com/404', 404)

    it('Deberia retornar un array con href, text, file, ok, status', () => {
      return mdLinks('/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo', true)
        .then(data => {
          expect(data).toEqual([
            {
              href: 'https://code-maven.com/reading-a-file-with-nodejs',
              text: 'hello estas',
              file: '/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo/README.md',
              status: 200,
              ok: 'OK'
            },
            {
              href: 'https://github.com/ValeriaBE/LIM009-fe-md-links/tree/master/src',
              text: 'curriculum',
              file: '/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo/README.md',
              status: 200,
              ok: 'OK'
            },
            {
              href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce',
              text: 'valeria',
              file: '/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo/carpeta-1/carpeta1-2/README.md',
              status: 200,
              ok: 'OK'
            },
            {
              href: 'https://es.wiktionary.org/wiki/hi',
              text: 'apellido',
              file: '/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo/carpeta-1/carpeta1-2/README.md',
              status: 200,
              ok: 'OK'
            },
            {
              href: 'https://github.com/ValeriaBE/LIM009-fe-md-links/tree/master/src',
              text: 'hola como estas',
              file: '/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo/carpeta-2/README.md',
              status: 200,
              ok: 'OK'
            },
            {
              href: 'https://drive.google.com/file/d/1TUHy3SxgalOWBqH-rtHKbejsKCXoLxWD/view?usp=sharing',
              text: 'elementos a considerar al escribir tu CV',
              file: '/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo/carpeta-2/README.md',
              status: 200,
              ok: 'OK'
            },
            {
              href: 'https://flippingbook.com/404',
              text: 'error',
              file: '/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo/carpeta-2/README.md',
              status: 404,
              ok: 'fail'
            }
          ]);
        });
    })
    it('Deberia retornar un array con href, text, file, ok, status', () => {
      return mdLinks('/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo', false)
        .then(data => {
          expect(data).toEqual([
            {
              href: 'https://code-maven.com/reading-a-file-with-nodejs',
              text: 'hello estas',
              file: '/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo/README.md',
            },
            {
              href: 'https://github.com/ValeriaBE/LIM009-fe-md-links/tree/master/src',
              text: 'curriculum',
              file: '/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo/README.md',
            },
            {
              href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce',
              text: 'valeria',
              file: '/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo/carpeta-1/carpeta1-2/README.md',
            },
            {
              href: 'https://es.wiktionary.org/wiki/hi',
              text: 'apellido',
              file: '/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo/carpeta-1/carpeta1-2/README.md',
            },
            {
              href: 'https://github.com/ValeriaBE/LIM009-fe-md-links/tree/master/src',
              text: 'hola como estas',
              file: '/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo/carpeta-2/README.md',
            },
            {
              href: 'https://drive.google.com/file/d/1TUHy3SxgalOWBqH-rtHKbejsKCXoLxWD/view?usp=sharing',
              text: 'elementos a considerar al escribir tu CV',
              file: '/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo/carpeta-2/README.md',
            },
            {
              href: 'https://flippingbook.com/404',
              text: 'error',
              file: '/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo/carpeta-2/README.md',
            }
          ]);
        });
    })
    it('Deberia retornar un array con href, text, file, ok, status', () => {
      return mdLinks('ejemplo', false)
        .then(data => {
          expect(data).toEqual([
            {
              href: 'https://code-maven.com/reading-a-file-with-nodejs',
              text: 'hello estas',
              file: '/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo/README.md',
            },
            {
              href: 'https://github.com/ValeriaBE/LIM009-fe-md-links/tree/master/src',
              text: 'curriculum',
              file: '/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo/README.md',
            },
            {
              href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce',
              text: 'valeria',
              file: '/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo/carpeta-1/carpeta1-2/README.md',
            },
            {
              href: 'https://es.wiktionary.org/wiki/hi',
              text: 'apellido',
              file: '/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo/carpeta-1/carpeta1-2/README.md',
            },
            {
              href: 'https://github.com/ValeriaBE/LIM009-fe-md-links/tree/master/src',
              text: 'hola como estas',
              file: '/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo/carpeta-2/README.md',
            },
            {
              href: 'https://drive.google.com/file/d/1TUHy3SxgalOWBqH-rtHKbejsKCXoLxWD/view?usp=sharing',
              text: 'elementos a considerar al escribir tu CV',
              file: '/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo/carpeta-2/README.md',
            },
            {
              href: 'https://flippingbook.com/404',
              text: 'error',
              file: '/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo/carpeta-2/README.md',
            }
          ]);
        });
    })
    it('Deberia retornar un array con href, text, file, ok, status', () => {
      return mdLinks('ejemplo', true)
        .then(data => {
          expect(data).toEqual([
            {
              href: 'https://code-maven.com/reading-a-file-with-nodejs',
              text: 'hello estas',
              file: '/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo/README.md',
              status: 200,
              ok: 'OK'
            },
            {
              href: 'https://github.com/ValeriaBE/LIM009-fe-md-links/tree/master/src',
              text: 'curriculum',
              file: '/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo/README.md',
              status: 200,
              ok: 'OK'
            },
            {
              href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce',
              text: 'valeria',
              file: '/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo/carpeta-1/carpeta1-2/README.md',
              status: 200,
              ok: 'OK'
            },
            {
              href: 'https://es.wiktionary.org/wiki/hi',
              text: 'apellido',
              file: '/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo/carpeta-1/carpeta1-2/README.md',
              status: 200,
              ok: 'OK'
            },
            {
              href: 'https://github.com/ValeriaBE/LIM009-fe-md-links/tree/master/src',
              text: 'hola como estas',
              file: '/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo/carpeta-2/README.md',
              status: 200,
              ok: 'OK'
            },
            {
              href: 'https://drive.google.com/file/d/1TUHy3SxgalOWBqH-rtHKbejsKCXoLxWD/view?usp=sharing',
              text: 'elementos a considerar al escribir tu CV',
              file: '/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo/carpeta-2/README.md',
              status: 200,
              ok: 'OK'
            },
            {
              href: 'https://flippingbook.com/404',
              text: 'error',
              file: '/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo/carpeta-2/README.md',
              status: 404,
              ok: 'fail'
            }
          ]);
        });
    })
  });