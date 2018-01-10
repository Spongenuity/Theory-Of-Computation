var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  // terminal: false
});

const regex = /\(?(\d{3})\)?\s*-?\s*(\d{3})\s*-?\s*(\d{4})/;


// This code reads a line at a time from stdin

rl.on('line', function (line) {
  const matches = line.match(regex);

  if (matches === null) {
      console.log("** çNo Phone Number Found **");
  } else {
      console.log(`Phone Number Found: ${matches[1]}${matches[2]}${matches[3]}`);
  }
});