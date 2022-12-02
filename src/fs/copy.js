import { copyFile, readdir, mkdir } from 'node:fs/promises';
import { doesFileExist, getDirName } from './utils/index.js';

const copy = async () => {
    // Write your code here
    const sourceFolder = 'files';
    const targetFolder = 'files_copy';
    const path = getDirName(import.meta.url);

    const sourcePath = `${path}/${sourceFolder}`;
    const targetPath = `${path}/${targetFolder}`;
    const canCopy = 
        (await doesFileExist(sourcePath)) ||
        !(await doesFileExist(targetPath));

    if (canCopy) {
        await mkdir(targetPath);
        const files = await readdir(sourcePath);
        for (const file of files) {
            copyFile(`${sourcePath}/${file}`, `${targetPath}/${file}`);
        }
    } else {
        throw new Error("FS operation failed");
    }
};

copy();