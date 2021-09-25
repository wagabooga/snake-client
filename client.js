const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '10.0.2.15',
    port: '50541'
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