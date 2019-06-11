import path from 'path';

export const isAbsolute = (str) => {
    return path.isAbsolute(str);
}

export const isRelative = (str) => {
    return path.resolve(str);
}

export const isMd = (str) => {
    return (path.extname(str) === '.md')
}
