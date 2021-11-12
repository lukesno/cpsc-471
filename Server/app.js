var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
})

app.post('/tenants', function(req, res) {
    // when user signs up using form, post user data to database
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})