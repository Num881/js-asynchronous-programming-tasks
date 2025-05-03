import fs from 'fs';

// BEGIN
export default function write (file, data, callback) {
    fs.writeFile(file, data, function (err) {
        callback(null);
    })
}
// END