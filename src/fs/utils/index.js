import { access, constants } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const doesFileExist = async path => {
  try {
    await access(path, constants.R_OK | constants.W_OK);
    return true;
  } catch {
    return false;
  }
};

// export const doesFileExist = async path => !!await stat(path).catch(() => false);

export const getDirName = path => {
  const __filename = fileURLToPath(path);

  return dirname(__filename);
};
