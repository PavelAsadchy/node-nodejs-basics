import { writeFile } from 'node:fs/promises';
import { doesFileExist, getDirName } from './utils/index.js';

const create = async () => {
    // Write your code here 
    const filePath = 'files/fresh.txt';
    const content = 'I am fresh and young';

    const path = `${getDirName(import.meta.url)}/${filePath}`;
    
    if (await doesFileExist(path)) {
        throw new Error('FS operation failed');
    } else {
        writeFile(path, content);
    }
};

await create();