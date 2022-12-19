import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip }  from 'node:zlib';
import { pipeline } from 'node:stream';
import { promisify } from 'node:util';

const compress = async () => {
    // Write your code here
    const readPath = './src/zip/files/fileToCompress.txt';
    const writePath = './src/zip/files/archive.gz';
    
    const read = createReadStream(readPath);
    const write = createWriteStream(writePath);
    const gzip = createGzip();
    const pipe = promisify(pipeline);

    await pipe(read, gzip, write);

    // await pipeline(read, gzip, write);
};

await compress();