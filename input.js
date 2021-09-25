let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput);
  stdin.resume();
  return stdin;
};



const handleUserInput = function (data) {
  if (data === '\u0003'){
    process.exit();
  }
  if (data === 'w'){
    connection.write("Move: up")
  }
  if (data === 'a'){
    connection.write("Move: left")
  }
  if (data === 's'){
    connection.write("Move: down")
  }
  if (data === 'd'){
    connection.write("Move: right")
  }
// chat 
  if (data === '.'){
    connection.write("Say: noob")
  }
  if (data === ','){
    connection.write("Say: nice!")
  }
}



module.exports = {
  setupInput
};