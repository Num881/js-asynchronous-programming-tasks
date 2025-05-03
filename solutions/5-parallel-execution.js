import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import async from 'async';

// BEGIN
export function getDirectorySize(dir, callback) {
    fs.readdir(dir, (readErr, files) => {
        if (readErr) {
            callback(readErr);
            return;
        }

        const paths = files.map(file => path.join(dir, file));

        async.map(paths, (filePath, callback) => {
            fs.stat(filePath, (statErr, stats) => {
                if (statErr) {
                    callback(statErr);
                    return;
                }
                callback(null, stats);
            });
        }, (mapErr, statsArray) => {
            if (mapErr) {
                callback(mapErr);
                return;
            }

            const totalSize = _.sumBy(statsArray, stat => stat.isFile() ? stat.size : 0);
            callback(null, totalSize);
        });
    });
}
// END
