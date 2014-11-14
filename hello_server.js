var http = require('http');

var server = http.createServer(function(request, response) {
  response.writeHead(200, {"Content-type" : "text/html"});
  response.write("<h1>Hello world</h1>");

  if (request.url == '/') {
    response.write('<h1>Home</h1>');
  } else if (request.url == '/bemvindo') {
    response.write('<h1>Bem-vindo</h1>');
  } else {
    response.write('<h1>Pagina nao encontrada</h1>');
  }

  console.log(request);

  response.end();
  console.log('requisicaoooooo');
});

server.listen(3000, function() {
  console.log('Servidor rodando');
});
