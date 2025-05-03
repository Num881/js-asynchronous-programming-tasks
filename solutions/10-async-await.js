import fsp from 'fs/promises';


// BEGIN
export async function exchange(path1, path2) {
    let data1 = await fsp.readFile(path1);
    let data2 = await fsp.readFile(path2);
    await fsp.writeFile(path1, data2);
    await fsp.writeFile(path2, data1);
}
// END