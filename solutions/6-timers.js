import fs from 'fs';

// BEGIN
export default function timeChanged(path, timer, callback) {
    const nowTime = Date.now();
    let timerID = setInterval(() => {
        fs.stat(path, (err, stats) => {
            if (err) {
                clearInterval(timerID);
                callback(err);
                return;
            }
            let change = stats.mtimeMs;
            if(change > nowTime){
                callback(null)
            }
        })
    }, timer);
    return timerID;
}

// END
