import fs from 'fs';

// BEGIN
export function move(source, destPath, callback) {

    fs.readFile(source, (readErr, data) => {
        if (readErr) {
            callback(readErr);
            return;
        }

        fs.writeFile(destPath, data, (writeErr) => {
            if (writeErr) {
                callback(writeErr);
                return;
            }

            fs.unlink(source, (unlinkErr) => {
                if (unlinkErr) {
                    callback(unlinkErr);
                    return;
                }

                callback(null);
            });
        });
    });
}
// END
