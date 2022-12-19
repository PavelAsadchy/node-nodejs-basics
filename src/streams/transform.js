import { stdout, stdin } from 'node:process';
import { Transform } from 'node:stream';

const reverseStr = str => str.split('').reverse().join('');

// class MyTransform extends Transform {
//     _transform(chunk, _enc, cb) {
//         const chunkStringified = reverseStr(chunk.toString());
//         cb(null, chunkStringified);
//     }
// }

const transform = async () => {
    // Write your code here
    
    const transformStream = new Transform({
        transform(chunk, _enc, cb) {
            const chunkStringified = reverseStr(chunk.toString());

            cb(null, chunkStringified);
        }
    });
    
    // const transformStream = new MyTransform();

    stdin.pipe(transformStream).pipe(stdout);
};

await transform();