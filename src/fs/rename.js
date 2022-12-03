import { rename as fsRename } from 'node:fs/promises';
import { doesFileExist, getDirName } from './utils/index.js';

const rename = async () => {
    // Write your code here
    const wrongFileName = 'wrongFilename.txt';
    const properFileName = 'properFilename.md';
    const path = getDirName(import.meta.url);

    const wrongFilePath = `${path}/files/${wrongFileName}`;
    const properFilePath = `${path}/files/${properFileName}`;
    const canRename =
        (await doesFileExist(wrongFileName)) &&
        !(await doesFileExist(properFileName));

    if (canRename) {
        fsRename(wrongFilePath, properFilePath);
    } else {
        throw new Error("FS operation failed");
    }
};

await rename();