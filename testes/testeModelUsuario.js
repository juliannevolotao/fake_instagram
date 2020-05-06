const { sequelize, Usuario } = require('../models');

Usuario.create( {
    nome:"Julianne",
    email: "julianne@test.com",
    senha: "test"
}).then(
    (u) => {
        console.log(u.toJSON());
        sequelize.close();
    }
)






// Usuario.findAll().then(
//     data => {
//         console.log(data.map( u => u.toJSON()));
//         sequelize.close();
//     }
// )

// Usuario.findByPk(2).then(
//     usuario => {
//         console.log(usuario.toJSON());
//         sequelize.close();
//     }
// )