import { readdir } from "node:fs/promises";
import { doesFileExist, getDirName } from './utils/index.js';

const list = async () => {
    // Write your code here
    const sourceFolder = 'files';
    const path = getDirName(import.meta.url);

    const targetPath = `${path}/${sourceFolder}`;

    if (await doesFileExist(targetPath)) {
        const files = await readdir(targetPath);
        console.log(files);
    } else {
        throw new Error("FS operation failed");
    }
};

await list();