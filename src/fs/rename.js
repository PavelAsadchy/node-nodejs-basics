import { rename as fsRename } from 'node:fs/promises';
import { FS_ERR_MSG } from './utils/consts.js';
import { doesFileExist, getDirName } from './utils/index.js';

const rename = async () => {
    // Write your code here
    const wrongFileName = 'wrongFilename.txt';
    const properFileName = 'properFilename.md';
    const path = getDirName(import.meta.url);

    const wrongFilePath = `${path}/files/${wrongFileName}`;
    const properFilePath = `${path}/files/${properFileName}`;
    const canRename =
        (await doesFileExist(wrongFilePath)) &&
        !(await doesFileExist(properFilePath));

    if (canRename) {
        fsRename(wrongFilePath, properFilePath);
    } else {
        throw new Error(FS_ERR_MSG);
    }
};

await rename();