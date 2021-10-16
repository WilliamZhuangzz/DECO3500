var app = require('express')();
var url = require('url');
var server = require('http').createServer(app);
var webRTC = require('webrtc.io').listen(server);

var port = process.env.PORT || 8080;
server.listen(port);

app.get('/',function(req, res) {
  res.sendfile(__dirname + '/1.html');
})

app.get('/2.html',function(req, res) {
  res.sendfile(__dirname + '/2.html');
})

app.get('/3.html', function(req, res) {
  res.sendfile(__dirname + '/3.html');
});


app.get('/css/index.css', function(req, res) {
  res.sendfile(__dirname + '/css/index.css');
}); 

app.get('/css/normalize.css', function(req, res) {
  res.sendfile(__dirname + '/css/normalize.css');
});

app.get('/css/style.css', function(req, res) {
  res.sendfile(__dirname + '/css/style.css');
});

app.get('/style.css', function(req, res) {
  res.sendfile(__dirname + '/style.css');
});

app.get('/fullscrean.png', function(req, res) {
  res.sendfile(__dirname + '/fullscrean.png');
});

app.get('/images/1.png', function(req, res) {
  res.sendfile(__dirname + '/images/1.png');
});

app.get('/images/2.png', function(req, res) {
  res.sendfile(__dirname + '/images/2.png');
});

app.get('/images/Create_Room.png', function(req, res) {
  res.sendfile(__dirname + '/images/Create_Room.png');
});

app.get('/images/Join_Room.png', function(req, res) {
  res.sendfile(__dirname + '/images/Join_Room.png');
});

app.get('/images/Schedule_Room.png', function(req, res) {
  res.sendfile(__dirname + '/images/Schedule_Room.png');
});

app.get('/images/sports_icon.png', function(req, res) {
  res.sendfile(__dirname + '/images/sports_icon.png');
});

app.get('/images/study_icon.png', function(req, res) {
  res.sendfile(__dirname + '/images/study_icon.png');
});

app.get('/images/1.jpg', function(req, res) {
  res.sendfile(__dirname + '/images/1.jpg');
});

app.get('/images/2.jpg', function(req, res) {
  res.sendfile(__dirname + '/images/2.jpg');
});

app.get('/images/3.jpg', function(req, res) {
  res.sendfile(__dirname + '/images/3.jpg');
});

app.get('/images/4.jpg', function(req, res) {
  res.sendfile(__dirname + '/images/4.jpg');
});

app.get('/script.js', function(req, res) {
  res.sendfile(__dirname + '/script.js');
});

app.get('/js/index.js', function(req, res) {
  res.sendfile(__dirname + '/js/index.js');
});

app.get('/webrtc.io.js', function(req, res) {
  res.sendfile(__dirname + '/webrtc.io.js');
});

webRTC.rtc.on('chat_msg', function(data, socket) {
  var roomList = webRTC.rtc.rooms[data.room] || [];

  for (var i = 0; i < roomList.length; i++) {
    var socketId = roomList[i];

    if (socketId !== socket.id) {
      var soc = webRTC.rtc.getSocket(socketId);

      if (soc) {
        soc.send(JSON.stringify({
          "eventName": "receive_chat_msg",
          "data": {
            "messages": data.messages,
            "color": data.color
          }
        }), function(error) {
          if (error) {
            console.log(error);
          }
        });
      }
    }
  }
});
