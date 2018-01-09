const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

fs.readFile(filename, 'utf8', function(err, data) {
    if (err) throw err;
    console.log('OK: ' + filename);

let matches = data.match(/(www|http:|https:)+[^\s]+[\w]/g)
let matchcount = data.match(/(www|http:|https:)+[^\s]+[\w]/g).length

console.log(`${matchcount} links`);
console.log(matches);
});
