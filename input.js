const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};


const handleUserInput = function (data) {
  stdin.on("data", handleUserInput);
  setupInput()
}

module.exports = {
  setupInput
};