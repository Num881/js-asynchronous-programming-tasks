import fs from 'fs';

// BEGIN
export default function print(file) {
    fs.readFile(file, "utf8", (err, data) => {
        console.log(data);
    });
}
// END
