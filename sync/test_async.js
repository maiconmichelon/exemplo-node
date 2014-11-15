var fs = require('fs');

for (var i = 1; i <= 5; i++) {
  var file = "async-text" + i + ".txt";
  fs.writeFile(file, "Hello Node", function(error, out){
    console.log(out);
  });
}
