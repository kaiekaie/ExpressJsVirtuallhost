var express = require('express')
var app = exports.app = express(); 
app.get('*', function(req,res,next){ 
res.send("Response from " + req.headers.host)
})
