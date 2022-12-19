import { readdir } from "node:fs/promises";
import { FS_ERR_MSG } from './utils/consts.js';
import { doesFileExist, getDirName } from './utils/index.js';

const list = async () => {
    // Write your code here
    const sourceFolder = 'files';
    const path = getDirName(import.meta.url);

    const targetPath = `${path}/${sourceFolder}`;

    try {
        const files = await readdir(targetPath);
        console.log(files);
    } catch {
        throw new Error(FS_ERR_MSG);
    }

    // if (await doesFileExist(targetPath)) {
    //     const files = await readdir(targetPath);
    //     console.log(files);
    // } else {
    //     throw new Error(FS_ERR_MSG);
    // }
};

await list(); // top-level await