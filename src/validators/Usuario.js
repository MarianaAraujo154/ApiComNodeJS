//Arquivo para validações

//Importa o recurso check de express-validator
const { check, body } = require('express-validator');
const usuarioDao = new (require('../models/Usuarios'))()

class UsuarioValidator{

    static validacoes(){
        //Retorna a lista de testes p/ validar
        return [
            body('email').custom( async email =>{
             let usuario = await usuarioDao.buscarPorEmail(email)
             usuario = usuario[0]
             if(usuario)
                return Promise.reject('Email já está em uso');
            
            }),
            check('nome').isLength({min: 3, max: 50})
                .withMessage('Deve ter entre 3 e 50 caracteres'),
            check('email').isEmail()
                .withMessage('Deve ser um email válido'),
            check('senha').isLength({min: 8, max: 15 })
                .withMessage('A senha deve ter entre 8  e 15 caracteres'),

        ]
    }
}

module.exports = UsuarioValidator