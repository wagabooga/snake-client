const { connect } = require("./client.js");
const { setupInput } = require("./input.js")
const net = require("net");



console.log("Connecting ...");
connect();

setupInput();