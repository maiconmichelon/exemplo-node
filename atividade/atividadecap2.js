var url = require('url');
var fs = require('fs');
var http = require('http');

var diretorio = function(file) {
  return __dirname + "/" + file;
}

var rotear = function(file) {
  if (file == "/")
    return diretorio("artigos.html");
  if (fs.existsSync(diretorio(file)))
    return diretorio(file);
  return diretorio("erro.html");
}

var server = http.createServer(function(request, response) {
  var pathName = url.parse(request.url, true).pathname;
  var filePath = rotear(pathName);

  console.log("Carregando " + filePath);
  fs.readFile(filePath, function(erro, html){
    response.writeHead(200, {"Content-Type" : "text/html"});
    response.end(html);
  });
});

server.listen(3000);
