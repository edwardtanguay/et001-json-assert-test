// 2023-06-28 this feature is experimental
// import data from './data.json' assert { type : "json"};
import * as tools from './tools.js';

const data = tools.readJsonFileAsVariable('./data.json');
console.log(data);

// data.forEach((user) => console.log(user));
