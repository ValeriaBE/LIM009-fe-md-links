import { validatingOptions } from '../src/cli.js';

import fetchMock from '../__mocks__/node-fetch.js';
fetchMock.config.sendAsJson = false;

describe('validatingOptions', () => {
    fetchMock
    .mock('https://es.wiktionary.org/wiki/hi', 200)
    .mock('https://code-maven.com/reading-a-file-with-nodejs', 200)
    .mock('https://github.com/ValeriaBE/LIM009-fe-md-links/tree/master/src', 200)
    .mock('https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce', 200)
    .mock('https://drive.google.com/file/d/1TUHy3SxgalOWBqH-rtHKbejsKCXoLxWD/view?usp=sharing', 200)
    .mock('https://flippingbook.com/404', 404)


    it('Deberia recibir un path absoluto y retornar un un listado con los datos definidos de mdlinks(path)', (done) => {
      validatingOptions('/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/prueba-tests')
        .then((data) => {
          expect(data).toBe('/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/prueba-tests/README.md https://es.wiktionary.org/wiki/hi lol')
          done()
        })
    })
  
    it('Deberia recibir un path absoluto y retornar un un listado con los datos definidos de mdlinks(path)', (done) => {
      validatingOptions('prueba-tests')
        .then((data) => {
          expect(data).toBe('/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/prueba-tests/README.md https://es.wiktionary.org/wiki/hi lol')
          done()
        })
    })
  
    it('Deberia recibir un path absoluto y retornar un un listado con los datos definidos de mdlinks(path)', (done) => {
      validatingOptions('/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/prueba-tests', '--validate')
        .then((data) => {
          expect(data).toBe('/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/prueba-tests/README.md https://es.wiktionary.org/wiki/hi OK 200 lol')
          done();
        })
    })
  
    it('Deberia recibir un path absoluto y retornar un un listado con los datos definidos de mdlinks(path)', (done) => {
      validatingOptions('prueba-tests', '--validate')
        .then((data) => {
          expect(data).toBe('/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/prueba-tests/README.md https://es.wiktionary.org/wiki/hi OK 200 lol')
          done()
        })
    })
  
    it('Deberia recibir un path absoluto y retornar un un listado con los datos definidos de mdlinks(path)', (done) => {
      validatingOptions('prueba-tests', '--stats')
        .then((data) => {
          expect(data).toBe(`Total: 1 \n Unique: 1`)
          done()
        })
    })
  
    it('Deberia recibir un path absoluto y retornar un un listado con los datos definidos de mdlinks(path)', (done) => {
      validatingOptions('/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/prueba-tests', '--stats')
        .then((data) => {
          expect(data).toBe(`Total: 1 \n Unique: 1`)
          done()
        })
    })
  
    it('Deberia recibir un path absoluto y retornar un un listado con los datos definidos de mdlinks(path)', (done) => {
      validatingOptions('prueba-tests', '--stats', '--validate')
        .then((data) => {
          expect(data).toBe(`Total: 1 \n Broken: 0 \n Unique: 1`)
          done();
        })
    })
    it('Deberia recibir un path absoluto y retornar un un listado con los datos definidos de mdlinks(path)', (done) => {
      validatingOptions('/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/prueba-tests', '--stats', '--validate')
        .then((data) => {
          expect(data).toBe(`Total: 1 \n Broken: 0 \n Unique: 1`)
          done();
        })
    })
  })
  