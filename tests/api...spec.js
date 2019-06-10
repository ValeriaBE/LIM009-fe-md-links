import{
    isAbsolute,
    isRelative,
} from '../src/path-controller.js'

import{
    isFile,
    isDir,
    isMd,
    readDir
} from '../src/directory-controller.js'

describe('isAbsolute', ()=>{
    it('Debería ser una funcion', () => {
        expect(typeof(isAbsolute)).toEqual('function')
    });
    it('Debería recibir un string y retornar un booleano', () => {
        expect(isAbsolute('/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/README.md')).toBe(true)
    });
    it('Debería recibir un string y retornar un booleano', () => {
        expect(isAbsolute('README.md')).toBe(false)
    });
})

describe('isRelative', ()=>{
    it('Debería ser una funcion', () => {
        expect(typeof(isRelative)).toEqual('function')
    });
    it('Debería recibir un path relativo y retornar un path absoluto', () => {
        expect(isRelative('README.md')).toBe('/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/README.md')
    });
})

describe('isFile', ()=>{
    it('Debería ser una funcion', () => {
        expect(typeof(isFile)).toEqual('function')
    });
    it('Debería recibir un path absoluto y retornar un booleano', () => {
        expect(isFile('/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/README.md')).toBe(true)
    });
    it('Debería recibir un string y retornar un booleano', () => {
        expect(isFile('/Users/valeriaberrocal/Desktop')).toBe(false)
    });
})

describe('isDir', ()=>{
    it('Debería ser una funcion', () => {
        expect(typeof(isDir)).toEqual('function')
    });
    it('Debería recibir un path absoluto y retornar un booleano', () => {
        expect(isDir('/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/README.md')).toBe(false)
    });
    it('Debería recibir un string y retornar un booleano', () => {
        expect(isDir('/Users/valeriaberrocal/Desktop')).toBe(true)
    });
})

describe('isMd', ()=>{
    it('Debería ser una funcion', () => {
        expect(typeof(isMd)).toEqual('function')
    });
    it('Debería recibir un path absoluto y retornar la extensión de la ruta', () => {
        expect(isMd('/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/README.md')).toBe(true)
    });
    it('Debería recibir un path absoluto que no es md y retornar error', () => {
        expect(isMd('/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/README.html')).toBe(false)
    });
})

describe('readDir', ()=>{
    it('Debería ser una funcion', () => {
        expect(typeof(readDir)).toEqual('function')
    });
    it('Debería recibir un path y retornar una array', () => {
        expect(readDir('/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo')).toEqual([ '/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo/README.md',
        '/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo/carpeta-1/carpeta1-2/README.md',
        '/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo/carpeta-2/README.md' ])
    });

})