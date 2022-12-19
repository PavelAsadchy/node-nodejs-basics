import { spawn, fork } from 'node:child_process';
import { stdin, stdout, cwd } from 'node:process';

const spawnChildProcess = async (args) => {
    // Write your code here
    const filePath = './files/script.js';
    const path = new URL(filePath, import.meta.url);

    const childProcess = fork(path, args, { silent: true });
    stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(stdout);

    // const child = spawn(`node`, [`${cwd() + path}`, ...args]);
    // child.stdout.pipe(stdout);
    // stdin.pipe(child.stdin);
};

spawnChildProcess([1, 2]);