const express = require("express");

const app = express();

// Conexão com  MySQL
const mysql = require('mysql');

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'arthur',
    password : '1234',
    database : 'celke'
  });

  connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + connection.threadId);
  });

  connection.query('SELECT * FROM celke.users', function(err, row, fields){
    if(!err){
        console.log('Resultado: ', row);
    }else{
        console.log('Erro ao realizar a consulta');
    }
  })

app.get("/", function(req,res){
    res.sendFile(__dirname + "/src/index.html");
});

app.get("/sobre-empresa", function(req,res){
    res.sendFile(__dirname + "/src/sobre-empresa.html");
});

app.get("/blog", function(req,res){
    res.send("Página do blog");
});

app.get("/contato", function(req,res){
    res.send("Página de contato");
});

//localhost:8080
app.listen(8080);