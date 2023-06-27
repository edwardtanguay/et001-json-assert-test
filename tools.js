import fs from 'fs';

export const readJsonFileAsVariable = (pathAndFileName) => {
	const content = fs.readFileSync(pathAndFileName, {encoding: 'utf8'});
	const objOrArray = JSON.parse(content);
	return objOrArray;
}