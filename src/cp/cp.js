import { spawn } from 'node:child_process';
import { stdin, stdout, cwd } from 'node:process';

const spawnChildProcess = async (args) => {
    // Write your code here
    const path = '/src/cp/files/script.js';
    const child = spawn(`node ${cwd() + path}`, args, {shell: true});
    child.stdout.pipe(stdout);
    stdin.pipe(child.stdin);
};

spawnChildProcess([1, 2]);