var test  = require('tape');
var chalk = require('chalk');
var red   = chalk.red, green = chalk.green, cyan = chalk.cyan;
var path  = require('path');

test(cyan('SYNC: with sample .gitignore file and BAD CALLBACK'), function (t) {
  var ignored = require('../')('./test/Node.gitignore.txt', 'fails'); // .gitignore: http://git.io/jLYB
  // console.log(ignored.length);
  t.equal(ignored.length, 11, green("✓ SYNC call without params returns "+ ignored.length +" items."));
  t.end();
});


test(cyan('SYNC: Return error we cannot find the .gitignore file'), function (t) {
  var err = require('../')('../.gitignore'); //
  t.equal(err.code, 'ENOENT', green("✓ no file at: ")+ red(err.path) +green(" (as expected!)") )
  t.end();
});


test(cyan('SYNC: Return error we cannot find the .gitignore file'), function (t) {
  var testdir = path.resolve('./test');
  console.log("testdir: " + red(testdir));
  var errmsg = "ERROR: Bad .gitignore file!"
  var err = require('../')(testdir); // supply a directory instead of a .gitignore file!
  t.equal(err, errmsg, green("✓ BAD .gitignore file at: ")+ red(testdir) +green(" (as expected!)") )
  t.end();
});

// test(cyan('SYNC: Return error we cannot find any .gitignore file'), function (t) {
//   var ignored = require('./'); // no .gitignore file supplied, we attempt to find it!
//   ignored(invalid, function(err, list) {
//     console.log(err);
//     var errmsg = "Error: basedir param must be a valid directory."
//     t.equal(err, errmsg, green("✓ ")+ red(errmsg) +green(" (as expected!)") )
//     t.equal(list.length, 0, green("✓ "+invalid + " is NOT a directory. no further action possible."));
//     t.end();
//   });
// });
