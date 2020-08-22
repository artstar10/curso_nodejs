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

  connection.query("DELETE FROM users WHERE id = 10",function(err, result){
    if(!err){
      console.log("O usuário deletado com sucesso!");
    }else{
      console.log("Erro: O usuário não foi deletado!");
    }
  });


