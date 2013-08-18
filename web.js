var express = require('express');
var fs = require('fs');
var b = fs.readFileSync('index.html');
var app = express.createServer(express.logger());

app.configure(function () {
    app.use(
        "/", //the URL throught which you want to access to you static content
        express.static(__dirname) //where your static content is located in your filesystem
    );
})
;
app.get('/', function(request, response) {
  response.send(b.toString());
});
var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
