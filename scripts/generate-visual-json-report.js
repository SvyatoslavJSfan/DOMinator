/* eslint-disable @typescript-eslint/no-var-requires */
const { promisify } = require('util');
const { readdir, writeFile, access } = require('fs');
const { join: joinPath, relative } = require('path');

const asyncReaddir = promisify(readdir);
const writeFileAsync = promisify(writeFile);
const asyncAccess = promisify(access);

const lokiDir = joinPath(__dirname, '..', '.loki');
const actualDir = joinPath(lokiDir, 'current');
const expectedDir = joinPath(lokiDir, 'reference');
const diffDir = joinPath(lokiDir, 'difference');

async function safeReaddir(dirPath) {
    try {
        await asyncAccess(dirPath);
        return await asyncReaddir(dirPath);
    } catch (error) {
        console.log(`Directory ${dirPath} does not exist or is not accessible, using empty array`);
        return [];
    }
}

(async function main() {
    try {
        const [diffs, actuals, expecteds] = await Promise.all([
            safeReaddir(diffDir),
            safeReaddir(actualDir),
            safeReaddir(expectedDir)
        ]);

        const report = {
            newItems: actuals.filter(item => !expecteds.includes(item)),
            deletedItems: expecteds.filter(item => !actuals.includes(item)),
            passedItems: expecteds.filter(item => actuals.includes(item) && !diffs.includes(item)),
            failedItems: diffs,
            expectedItems: expecteds,
            actualItems: actuals,
            diffItems: diffs,
            actualDir: relative(lokiDir, actualDir),
            expectedDir: relative(lokiDir, expectedDir),
            diffDir: relative(lokiDir, diffDir),
        };

        await writeFileAsync(joinPath(lokiDir, 'report.json'), JSON.stringify(report, null, 2));
        console.log('Report generated successfully:', report);
    } catch (error) {
        console.error('Error generating report:', error);
        process.exit(1);
    }
}());
