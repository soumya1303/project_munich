const logger = require('./logger');

const pathObj = require('path');

var filePath = pathObj.parse(__filename);
var dirName = pathObj.parse(__dirname);

const macOS = require('os');

var totMem = macOS.totalmem;
var freeMem = macOS.freemem;
var homeDir = macOS.homedir;

const fs = require('fs');
//var files = fs.readdirSync('../BasicHTML');
fs.readdir('./', (err, files)=> {
if (err){console.log('Error:' + err)}
else console.log('Results:' + files);
});

