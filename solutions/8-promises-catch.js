import fsp from 'fs/promises';
import fs from "fs";

// BEGIN
export function touch(newPath) {
    return fsp.access(newPath, fs.constants.W_OK | fs.constants.R_OK)
        .catch(() =>
        {
        return fsp.writeFile(newPath, "");
    })
}
// END