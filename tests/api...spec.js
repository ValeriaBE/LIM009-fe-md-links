import {
    isAbsolute,
    isRelative,
    isMd,
} from '../src/path-controller.js'

import {
    isFile,
    readDir
} from '../src/directory-controller.js'

import { mdLinkExtractor } from '../src/links-controller.js';

describe('isAbsolute', () => {
    it('Debería ser una funcion', () => {
        expect(typeof (isAbsolute)).toEqual('function')
    });
    it('Debería recibir un string y retornar un booleano', () => {
        expect(isAbsolute('/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/README.md')).toBe(true)
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
        expect(isRelative('README.md')).toBe('/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/README.md')
    });
})

describe('isFile', () => {
    it('Debería ser una funcion', () => {
        expect(typeof (isFile)).toEqual('function')
    });
    it('Debería recibir un path absoluto y retornar un booleano', () => {
        expect(isFile('/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/README.md')).toBe(true)
    });
    it('Debería recibir un string y retornar un booleano', () => {
        expect(isFile('/Users/valeriaberrocal/Desktop')).toBe(false)
    });
})

describe('isMd', () => {
    it('Debería ser una funcion', () => {
        expect(typeof (isMd)).toEqual('function')
    });
    it('Debería recibir un path absoluto y retornar la extensión de la ruta', () => {
        expect(isMd('/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/README.md')).toBe(true)
    });
    it('Debería recibir un path absoluto que no es md y retornar error', () => {
        expect(isMd('/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/README.html')).toBe(false)
    });
})

describe('readDir', () => {
    it('Debería ser una funcion', () => {
        expect(typeof (readDir)).toEqual('function')
    });
    it('Debería recibir un path y retornar una array', () => {
        expect(readDir('/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo')).toEqual(['/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo/README.md',
            '/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo/carpeta-1/carpeta1-2/README.md',
            '/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo/carpeta-2/README.md'])
    });
})

describe('mdLinkExtractor', () => {
    it('Debería ser una funcion', () => {
        expect(typeof (mdLinkExtractor)).toEqual('function')
    });
    it('Debería recibir un path y retornar una array de objetos', () => {
        expect(mdLinkExtractor('/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo/carpeta-2/README.md')).toEqual([{
            href: 'https://code-maven.com/reading-a-file-with-nodejs',
            text: 'hola como estas',
            file:
                '/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo/carpeta-2/README.md'
        },
        {
            href:
                'https://drive.google.com/file/d/1TUHy3SxgalOWBqH-rtHKbejsKCXoLxWD/view?usp=sharing',
            text: 'elementos a considerar al escribir tu CV',
            file:
                '/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo/carpeta-2/README.md'
        }])
    });
})