var app = require('./app/config/server');

var rotaHome = require('./app/routes/home')(app);
var rotaHome = require('./app/routes/front')(app);
var rotaHome = require('./app/routes/back')(app);
var rotaHome = require('./app/routes/contato')(app);
var rotaHome = require('./app/routes/loja')(app);
var rotaHome = require('./app/routes/produtos')(app);
var rotaHome = require('./app/routes/cadastro')(app);






app.listen(3000, function(){
    console.log("servidor rodando com Express+EJS+CommonJS");
});





// var express = require('express');
// var app = express();
// app.set('view engine','ejs');

// app.get('/', function(req, res){
//     res.render('index');
// });
// app.get('/backend', function(req, res){
//     res.render('backend');
// });
// app.listen(3000, function(){
//     console.log("Servidor rodando com Express+EJS");
// });

// var express = require('express');
// var app = express();

// app.get('/', function(req, res){
//     res.send("<html><body>Full Stack Eletro com NodeJS (utilizando Express)</body></html>");
// });
// app.get('/backend', function(req, res){
//     res.send("<html><body>puxando o backend(utilizando Express)</body></html>");
// });
// app.listen(3000, function(){
//     console.log("Servidor rodando com Express");
// });


// // var http = require('http');
// // var server = http.createServer(function(req,res){
// //     res.end("<html><body>Full Stack Eletro com NodeJS</body></html>");
// // });
// // server.listen(3000);
// // console.log("server on");
