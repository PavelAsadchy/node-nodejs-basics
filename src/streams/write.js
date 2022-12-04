import { createWriteStream } from 'node:fs';
import { stdin } from 'node:process';

const write = async () => {
    // Write your code here
    const path = './src/streams/files/fileToWrite.txt';
    const stream = createWriteStream(path);
    stdin.pipe(stream);
};

await write();