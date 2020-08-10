const nuke = require(".");
let token = process.argv[2];
let clientid = process.argv[3];
let command = process.argv[4];

nuke(token, clientid, command);
