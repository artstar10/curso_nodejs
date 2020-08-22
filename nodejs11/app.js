const Sequelize = require('sequelize');

const sequelize = new Sequelize('celke','arthur','1234',{
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate().then(function(){
  console.log('Conexão realizada com sucesso!');
}).catch(function(err){
  console.log('Erro ao realizar a conexão com BD: ' + err);
});

const Pagamento = sequelize.define('pagamentos', {
    //attributes
    nome: {
      type: Sequelize.STRING,
    },
    valor: {
      type: Sequelize.DOUBLE
    }
    });
    // Criar tabela com Sequelize
    //Pagamento.sync({force: true});

    Pagamento.create({
      nome: "Energia",
      valor: 220
    })

  