import { rm } from "node:fs/promises";
import { FS_ERR_MSG } from './utils/consts.js';
import { doesFileExist, getDirName } from './utils/index.js';

const remove = async () => {
    // Write your code here
    const filePath = 'files/fileToRemove.txt';
    const path = getDirName(import.meta.url);

    const targetPath = `${path}/${filePath}`;
    const canDelete = await doesFileExist(targetPath);

    try {
        await rm(targetPath);
    } catch(err) {
        throw new Error(FS_ERR_MSG);
    }

    // if (canDelete) {
    //     rm(targetPath);
    // } else {
    //     throw new Error("FS operation failed");
    // }
};

await remove();