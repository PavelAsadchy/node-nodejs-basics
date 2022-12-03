import { rm } from "node:fs/promises";
import { doesFileExist, getDirName } from './utils/index.js';

const remove = async () => {
    // Write your code here
    const filePath = 'files/fileToRemove.txt';
    const path = getDirName(import.meta.url);

    const targetPath = `${path}/${filePath}`;
    const canDelete = await doesFileExist(targetPath);

    if (canDelete) {
        rm(targetPath);
    } else {
        throw new Error("FS operation failed");
    }
};

await remove();