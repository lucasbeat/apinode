const Sequelize = require('sequelize');
const sequelize = new Sequelize('teste', 'root', 'root', {
    host: "localhost",
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log('conectado com sucesso')
}).catch((erro) => {
    console.log('falha ao se conectar' + erro)
})