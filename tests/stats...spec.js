import { total, broken, unique, linkStats } from '../src/stats.js';
import path from 'path'
describe('total', () => {
    it('Debería ser una funcion', () => {
      expect(typeof (total)).toEqual('function')
    });
    it('Debería recibir un array y retornar el number de elementos', () => {
      expect(total([1, 2, 3])).toBe(3)
    });
  })
  
  describe('broken', () => {
    it('Debería ser una funcion', () => {
      expect(typeof (broken)).toEqual('function')
    });
    it('Debería recibir un array y retornar el number de elementos de error', () => {
      expect(broken([{
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
      }])).toBe(1)
    });
  })
  describe('unique', () => {
    it('Debería ser una funcion', () => {
      expect(typeof (unique)).toEqual('function')
    });
    it('Debería recibir un array y retornar el number de elementos que no se repiten', () => {
      expect(unique([{
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
      }])).toBe(2)
    });
  })
  describe('linkStats', () => {
    it('Debería ser una funcion', () => {
      expect(typeof (linkStats)).toEqual('function')
    });
    it('Debería recibir un array y retornar el total de links, broken links y unique links', () => {
      expect(linkStats([{
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
      }], true)).toStrictEqual({ "Total": 2, "Broken": 1, "Unique": 2 })
    });
    it('Debería recibir un array y retornar el total de links,  y unique links', () => {
      expect(linkStats([{
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
      }])).toStrictEqual({ "Total": 2, "Unique": 2 })
    });
  })
  