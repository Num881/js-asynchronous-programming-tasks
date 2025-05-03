import fs from 'fs';

// BEGIN
export const compareFileSizes = (file1, file2, callback) => {
    fs.stat(file1, (err1, stats1) => {
        fs.stat(file2, (err2, stats2) => {
            callback(null, Math.sign(stats1.size - stats2.size));
        })
    })
}
// END