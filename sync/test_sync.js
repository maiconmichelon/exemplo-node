var fs = require('fs');

for (var i = 1; i <= 5; i++) {
  var file = "sync-text" + i + ".txt";
  var text = fs.writeFileSync(file, "Hello Node");
  console.log(text);
}
