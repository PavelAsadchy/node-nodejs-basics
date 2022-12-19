import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';

const read = async () => {
    // Write your code here
    const path = './src/streams/files/fileToRead.txt';
    const readableStream = createReadStream(path);
    readableStream.pipe(stdout);
};

await read();