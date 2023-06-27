import * as tools from './tools.js';

const data = tools.readJsonFileAsVariable('./data.json');

data.forEach((user) => console.log(user));
