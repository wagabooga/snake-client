const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: '3000',
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = {
  // myNumber, // stores 42 as myNumber
  // myString, // stores "hello" as myString
  connect, // stores the function as myFunction
};