import { writeFile } from 'node:fs/promises';
import { FS_ERR_MSG } from './utils/consts.js';
import { doesFileExist, getDirName } from './utils/index.js';

const create = async () => {
    // Write your code here 
    const filePath = 'files/fresh.txt';
    const content = 'I am fresh and young';

    const path = `${getDirName(import.meta.url)}/${filePath}`;

    try {
        await(writeFile(path, content, { flag: 'wx' }));
    } catch (err) {
        console.log(err);
        throw new Error(FS_ERR_MSG);
    }

    // if (await doesFileExist(path)) {
    //     throw new Error(FS_ERR_MSG);
    // } else {
    //     writeFile(path, content);
    // }
};

await create();