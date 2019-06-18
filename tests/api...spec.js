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
import { validateArr } from '../src/validate.js';

import { mdLinks } from '../src/mdLinks.js';
import { total, broken, unique, linkStats } from '../src/stats.js';

import { validatingOptions } from '../src/cli.js';

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
    expect(readDir('/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo/README.md')).toEqual([{
      href: 'https://code-maven.com/reading-a-file-with-nodejs',
      text: 'hello estas',
      file: '/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo/README.md'
    },
    {
      href: 'https://github.com/ValeriaBE/LIM009-fe-md-links/tree/master/src',
      text: 'curriculum',
      file: '/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo/README.md'
    }
    ])
  });
  it('Debería recibir un path y retornar una array', () => {
    expect(readDir('/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo')).toEqual([
      {
        href: 'https://code-maven.com/reading-a-file-with-nodejs',
        text: 'hello estas',
        file: '/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo/README.md'
      },
      {
        href: 'https://github.com/ValeriaBE/LIM009-fe-md-links/tree/master/src',
        text: 'curriculum',
        file: '/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo/README.md'
      },
      {
        href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce',
        text: 'valeria',
        file: '/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo/carpeta-1/carpeta1-2/README.md'
      },
      {
        href: 'https://es.wiktionary.org/wiki/hi',
        text: 'apellido',
        file: '/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo/carpeta-1/carpeta1-2/README.md'
      },
      {
        href: 'https://github.com/ValeriaBE/LIM009-fe-md-links/tree/master/src',
        text: 'hola como estas',
        file: '/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo/carpeta-2/README.md'
      },
      {
        href: 'https://drive.google.com/file/d/1TUHy3SxgalOWBqH-rtHKbejsKCXoLxWD/view?usp=sharing',
        text: 'elementos a considerar al escribir tu CV',
        file: '/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo/carpeta-2/README.md'
      },
      {
        href: 'https://flippingbook.com/404',
        text: 'error',
        file: '/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo/carpeta-2/README.md'
      }
    ])
  });
})

describe('mdLinkExtractor', () => {
  it('Debería ser una funcion', () => {
    expect(typeof (mdLinkExtractor)).toEqual('function')
  });
  it('Debería recibir un path y retornar una array de objetos', () => {
    expect(mdLinkExtractor('/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo/carpeta-2/README.md')).toEqual([{
      href: 'https://github.com/ValeriaBE/LIM009-fe-md-links/tree/master/src',
      text: 'hola como estas',
      file: '/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo/carpeta-2/README.md'
    },
    {
      href: 'https://drive.google.com/file/d/1TUHy3SxgalOWBqH-rtHKbejsKCXoLxWD/view?usp=sharing',
      text: 'elementos a considerar al escribir tu CV',
      file: '/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo/carpeta-2/README.md'
    },
    {
      href: 'https://flippingbook.com/404',
      text: 'error',
      file: '/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo/carpeta-2/README.md'
    }
    ])
  });
})

describe('validateArr', () => {
  it('Deberia retornar un array  de promesas', (done) => {
    return validateArr(readDir('/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo/carpeta-2/README.md'))
      .then(data => {
        expect(data).toEqual([{
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
        }, {
          href: 'https://flippingbook.com/404',
          text: 'error',
          file: '/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/ejemplo/carpeta-2/README.md',
          status: 404,
          ok: 'fail'
        }]);
        done();
      });
  })

});
describe('mdLinks', () => {
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
    }], true)).toStrictEqual({ "Total": 2, "Broken": 1, "Unique": 2 })
  });
  it('Debería recibir un array y retornar el total de links,  y unique links', () => {
    expect(linkStats([{
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
    }])).toStrictEqual({ "Total": 2, "Unique": 2 })
  });
})

describe('validatingOptions', () => {
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
        expect(data).toBe(`Total: 1 
Unique: 1`)
        done()
      })
  })

  it('Deberia recibir un path absoluto y retornar un un listado con los datos definidos de mdlinks(path)', (done) => {
    validatingOptions('/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/prueba-tests', '--stats')
      .then((data) => {
        expect(data).toBe(`Total: 1 
Unique: 1`)
        done()
      })
  })

  it('Deberia recibir un path absoluto y retornar un un listado con los datos definidos de mdlinks(path)', (done) => {
    validatingOptions('prueba-tests', '--stats', '--validate')
      .then((data) => {
        expect(data).toBe(`Total: 1 
Broken: 0 
Unique: 1`)
        done();
      })
  })
  it('Deberia recibir un path absoluto y retornar un un listado con los datos definidos de mdlinks(path)', (done) => {
    validatingOptions('/Users/valeriaberrocal/Desktop/LIM009-fe-md-links/prueba-tests', '--stats', '--validate')
      .then((data) => {
        expect(data).toBe(`Total: 1 
Broken: 0 
Unique: 1`)
        done();
      })
  })
})
