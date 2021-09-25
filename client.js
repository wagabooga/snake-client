const net = require("net");
const { IP, PORT } = require("./constants");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  conn.on('connect', () => {
    conn.write("Name: ASD")
    conn.write('Successfully connected to game server');
   
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};










module.exports = {
  // myNumber, // stores 42 as myNumber
  // myString, // stores "hello" as myString
  connect, // stores the function as myFunction
};