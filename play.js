const { connect } = require("./client.js");
const net = require("net");


const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};
stdin.on("data", handleUserInput);

const handleUserInput = function (data) {
  setupInput()
}