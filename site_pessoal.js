var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
//  A constante __dirname retorna o diretório raiz da aplicação
  fs.readFile(__dirname + "/index.html", function(err, html) {
    response.writeHeader(200, {'Content-Type' : 'text/html'});
    response.write(html);
    response.end();
    // E depois aqui
    console.log('Mandou o html dentro do readFile');
  })
  // Aqui executa primeiro
  console.log('Após readFile');
});

server.listen(3000, function() {
  console.log('Executando site pessoal');
});
