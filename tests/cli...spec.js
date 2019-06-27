import { validatingOptions } from '../src/cli.js';
import path from 'path'
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
    .mock('https://es.wtionary.org/wiki/hi', { throws: '/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/prueba-tests/README.md https://es.wtionary.org/wiki/hi fail undefined no' })


    it('Deberia recibir un path absoluto y retornar un un listado con los datos definidos de mdlinks(path)', (done) => {
      validatingOptions(path.join(process.cwd(), '/prueba-tests'), false)
        .then((data) => {
          expect(data).toBe(`${path.join(process.cwd(),'/prueba-tests/README.md')} https://es.wiktionary.org/wiki/hi lol,${path.join(process.cwd(),'/prueba-tests/README.md')} https://es.wtionary.org/wiki/hi no`)
          done()
        })
    })
  
    it('Deberia recibir un path absoluto y retornar un un listado con los datos definidos de mdlinks(path)', (done) => {
      validatingOptions(path.join(process.cwd(), '/prueba-tests'), false)
        .then((data) => {
          expect(data).toBe(`${path.join(process.cwd(),'/prueba-tests/README.md')} https://es.wiktionary.org/wiki/hi lol,${path.join(process.cwd(),'/prueba-tests/README.md')} https://es.wtionary.org/wiki/hi no`)
          done()
        })
    })
  
    it('Deberia recibir un path absoluto y retornar un un listado con los datos definidos de mdlinks(path)', (done) => {
      validatingOptions(path.join(process.cwd(), '/prueba-tests'), '--validate')
        .then((data) => {
          expect(data).toBe(`${path.join(process.cwd(),'/prueba-tests/README.md')} https://es.wiktionary.org/wiki/hi OK 200 lol,${path.join(process.cwd(),'/prueba-tests/README.md')} https://es.wtionary.org/wiki/hi fail undefined no`)
          done();
        })
    })
  
    it('Deberia recibir un path absoluto y retornar un un listado con los datos definidos de mdlinks(path)', (done) => {
      validatingOptions(path.join(process.cwd(), '/prueba-tests'), '--validate')
        .then((data) => {
          expect(data).toBe(`${path.join(process.cwd(),'/prueba-tests/README.md')} https://es.wiktionary.org/wiki/hi OK 200 lol,${path.join(process.cwd(),'/prueba-tests/README.md')} https://es.wtionary.org/wiki/hi fail undefined no`)
          done()
        })
    })
  
    it('Deberia recibir un path absoluto y retornar un un listado con los datos definidos de mdlinks(path)', (done) => {
      validatingOptions(path.join(process.cwd(), '/prueba-tests'), '--stats')
        .then((data) => {
          expect(data).toBe(`Total: 2 \nUnique: 2`)
          done()
        })
    })
  
    it('Deberia recibir un path absoluto y retornar un un listado con los datos definidos de mdlinks(path)', (done) => {
      validatingOptions(path.join(process.cwd(), '/prueba-tests'), '--stats')
        .then((data) => {
          expect(data).toBe(`Total: 2 \nUnique: 2`)
          done()
        })
    })
  
    it('Deberia recibir un path absoluto y retornar un un listado con los datos definidos de mdlinks(path)', (done) => {
      validatingOptions(path.join(process.cwd(), '/prueba-tests'), '--stats', '--validate')
        .then((data) => {
          expect(data).toBe(`Total: 2 \nBroken: 1 \nUnique: 2`)
          done();
        })
    })
    it('Deberia recibir un path absoluto y retornar un un listado con los datos definidos de mdlinks(path)', (done) => {
      validatingOptions(path.join(process.cwd(), '/prueba-tests'), '--stats', '--validate')
        .then((data) => {
          expect(data).toBe(`Total: 2 \nBroken: 1 \nUnique: 2`)
          done();
        })
    })
    it('Deberia recibir un path absoluto y retornar un un listado con los datos definidos de mdlinks(path)', (done) => {
      validatingOptions(path.join(process.cwd(), '/prueba-tests'), '--ejemplo')
        .then((data) => {
          expect(data).toBe(`Total: 2 \nBroken: 0 \nUnique: 2`)
          done();
        })
    })
  })
  