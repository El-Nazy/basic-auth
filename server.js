var express = require('express');
var app = express("jsonwebtoken");
var http = require('http');
var cors = require('cors');
var morgan = require('morgan');
var port = process.env.PORT || 8080;
var databaseConfig = require('./config/db');
var appRoutes = require('./routes')
var Router = require('express').Router();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.static("/public"));
app.use(express.urlencoded({extended : false}));

var server = http.createServer(app);

app.use('/api', appRoutes(Router))
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.send({
        success: false,
        message: "sorry an error occured",
        data: error
    });
})

server.listen(port);

server.on('listening', listener);
server.on('error', errorhandler);


function listener(){
    console.log("server listening on port " + port);
    databaseConfig();
}

function errorhandler (error){
    console.log("An error occiurred in our server " + error); 
}