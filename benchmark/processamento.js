var http = require('http');
var fs = require('fs');
var leituraSync = require('./leitura_sync');
var leituraAsync = require('./leitura_async');
var arquivo = './node.exe';
var stream = fs.createWriteStream(arquivo);
var download = "http://nodejs.org/dist/latest/node.exe";
http.get(download, function(res) {
  console.log("Fazendo o download do Node");
  res.on('data', function(data) {
    stream.write(data);
  });
  res.on('end', function() {
    stream.end();
    console.log('Download finalizado');
    leituraAsync(arquivo);
    leituraSync(arquivo);
  });
});
