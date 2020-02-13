const conexao = require('../infra/conexao')

//Função genérica para executar todas as querys
module.exports = (sql,params) =>{
    return new Promise((resolve,reject) =>{
        conexao.query(sql, params || "", (erro, retorno) =>{
            if(erro)reject(erro)
            resolve(retorno)
        })
    })
}