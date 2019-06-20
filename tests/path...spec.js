import {
  isAbsolute,
  isRelative,
  isMd,
} from '../src/path-controller.js'
import path from 'path'
describe('isAbsolute', () => {
  it('Debería ser una funcion', () => {
    expect(typeof (isAbsolute)).toEqual('function')
  });
  it('Debería recibir un string y retornar un booleano', () => {
    expect(isAbsolute(path.join(process.cwd(), '/README.md'))).toBe(true)
  });
  it('Debería recibir un string y retornar un booleano', () => {
    expect(isAbsolute('README.md')).toBe(false)
  });
})

describe('isRelative', () => {
  it('Debería ser una funcion', () => {
    expect(typeof (isRelative)).toEqual('function')
  });
  it('Debería recibir un path relativo y retornar un path absoluto', () => {
    expect(isRelative('README.md')).toBe(path.join(process.cwd(), '/README.md'))
  });
})

describe('isMd', () => {
  it('Debería ser una funcion', () => {
    expect(typeof (isMd)).toEqual('function')
  });
  it('Debería recibir un path absoluto y retornar la extensión de la ruta', () => {
    expect(isMd(path.join(process.cwd(), '/README.md'))).toBe(true)
  });
  it('Debería recibir un path absoluto que no es md y retornar error', () => {
    expect(isMd(path.join(process.cwd(), '/README.html'))).toBe(false)
  });
})