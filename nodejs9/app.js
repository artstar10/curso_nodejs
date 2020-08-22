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

  connection.connect(function(err){
    if(err) console.error('Erro ao realizar a conexão com o BD:' + err.stack); return;
  });

  connection.query("INSERT INTO users(nome, email) VALUES ('Izadora', 'izadora@msql.com.br')",function(err, result){
    if(!err){
      console.log('Usuário cadastrado com sucesso!');
    }else{
      console.log('Erro ao cadastrar usuário!');
    }
  })


