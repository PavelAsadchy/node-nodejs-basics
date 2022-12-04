import { createWriteStream } from 'node:fs';
import { stdin } from 'node:process';

const write = async () => {
    // Write your code here
    const path = './src/streams/files/fileToWrite.txt';
    const writableStream = createWriteStream(path);
    stdin.pipe(writableStream);
};

await write();