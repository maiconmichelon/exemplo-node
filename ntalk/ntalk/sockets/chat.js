module.exports = function(io) {
  var sockets = io.sockets;
  sockets.on('connection', function (client) {
    client.on('send-server', function (data) {
      var session = client.handshake.session
          , usuario = session.usuario;

      client.on('send-server', function (msg) {
        msg = "<b>"+usuario.nome+":</b> "+msg+"<br>";
        client.emit('send-client', msg);
        client.broadcast.emit('send-client', msg);
      });
    });
  });
}
