import fsp from 'fs/promises';

// BEGIN
export function reverse (path) {
    return fsp.readFile(path, 'utf8' )
    .then((content) => fsp.writeFile(path, content.split('\n').reverse().join('\n') ));
}
// END