import { readFile } from 'fs/promises';
import { join } from 'path';
import { cwd } from 'process';

export const getJSONDataHandler = async <T>(...path: string[]) => {
    const jsonFile = await readFile(join(cwd(), 'src', 'data', ...path), {
        encoding: 'utf-8',
    });

    const data: T = JSON.parse(jsonFile);

    return data;
};