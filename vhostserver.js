var express = require('express')
var https = require('https')
var http = require('http')
var server = express()
var server2 = express()
 vhost = require( 'vhost' )
var application_root = __dirname;
var testingport = 8082;
var http_port = 80;
var https_port = 443;
//Public servers and working folders.
//server.use(vhost('public.com',require(application_root + '/public.com' + '/app.js').app))

//server.use(vhost('public2.com', require(application_root + '/public2.com' + '/app.js').app)) 


//Testing servers. change Hostname in the localnetwork computer
server2.use(vhost('testing.com',require(application_root + '/testing.com' + '/app.js').app))
 
//server2.use(vhost('testing2.com', require(application_root + '/testing2.com' + '/app.js').app)) 

//listen to public servers
// http.createServer(server).listen(http_port, function(){
// console.log("listening to public servers");
// });
//listen to private servers
http.createServer(server2).listen(testingport, function(){
  console.log("listening to private servers");
                                                    
});



