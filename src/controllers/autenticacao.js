const { check, validationResult } = require('express-validator');
const usuariosDao = new (require('../models/Usuarios')) ();
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');
const bcrypt = require('bcryptjs');

gerarToken = (params) =>  {
    return jwt.sign(params, authConfig.secret,{
        expiresIn: 60,
    })
}
module.exports = {
     async registra(req,res){
        const erros = validationResult(req)
         if(!erros.isEmpty()){
             res.status(400).send(erros)
             return
         }
        let usuario = req.body
        try{
            usuario.senha = await bcrypt.hash(usuario.senha, 10 )
            const resultado = await usuariosDao.insere(usuario);
            usuario = {id: resultado.insertId, ...usuario}
            res.status(201).send({
                usuario, 
                token: gerarToken({id: usuario.id})
        })
        }catch{
        res.status(500).send(erro)
        }
    },
    async autentica(req,res){
        const {email, senha } = req.body
        try{
          let usuario = await usuariosDao.buscarPorEmail(email)
          usuario = usuario[0]
            if(!usuario)
            return res.status(400).send({erro: 'Usuario não cadastrado'})
            //erro 400 de validação
            if(await !bcrypt.compare(senha, usuario.senha)){
                return  res.status(400).send({erro: 'Senha inválida'})
            }
            res.send({
                usuario, 
                token: gerarToken({id: usuario.id})
            })
        }catch(erro){
            console.log(erro)
            res.status(500).send(erro)
        }
        
    }
}