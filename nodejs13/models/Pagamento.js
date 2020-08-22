const database = require('./database');

const Pagamento = database.sequelize.define('pagamentos',{
    nome: {
        type: database.Sequelize.STRING
    },
    valor: {
        type: database.Sequelize.DOUBLE
    }
})

//CRIAR A TABELA
//Pagamento.sync({force: true})

module.exports = Pagamento