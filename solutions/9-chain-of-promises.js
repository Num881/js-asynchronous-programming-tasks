import fsp from 'fs/promises';

// BEGIN
export async function getTypes(paths) {
    const promises = paths.map(path =>
        fsp.stat(path)
            .then(stats => {
                if (stats.isDirectory()) return 'directory';
                if (stats.isFile()) return 'file';
                return null;
            })
            .catch(() => null) // При ошибке возвращаем null
    );

    return Promise.all(promises);
}

// END