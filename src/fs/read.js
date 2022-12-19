import { readFile } from "node:fs/promises";
import { FS_ERR_MSG } from './utils/consts.js';
import { doesFileExist, getDirName } from './utils/index.js';

const read = async () => {
    // Write your code here
    const filePath = 'files/fileToRead.txt';
    const path = getDirName(import.meta.url);

    const targetPath = `${path}/${filePath}`;

    try {
        const text = await readFile(targetPath, 'utf-8');
        console.log(text);
    } catch {
        throw new Error(FS_ERR_MSG);
    }

    // if (await doesFileExist(targetPath)) {
    //     const text = await readFile(targetPath, 'utf-8');
    //     console.log(text);
    // } else {
    //     throw new Error(FS_ERR_MSG);
    // }
};

await read();