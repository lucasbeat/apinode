const Sequelize = require('sequelize');
const sequelize = new Sequelize('teste', 'root', 'root', {
    host: "localhost",
    dialect: 'mysql'
});

const postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})


const usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
})

usuario.create({
    nome: "bruno",
    sobrenome: "lucas",
    email: "teste@email.com"
})
