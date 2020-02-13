//Arquivo que guarda toda a configuração do express
const express = require('express');
const app = express();
//Arquivo que guarda toda a configuração do consign
const consign = require('consign');
//Arquivo que guarda toda a configuração do body-parser
const bodyParser = require('body-parser')

customExpress = () => {
    //caso os dados venha de formul.
    // app.use(bodyParser.urlencoded())
    app.use(bodyParser.json())
    
    // token válido prossegue a requisição
    // token inválido: bloqueia a requisição
    app.use((req,res,next)=> {
        //return res.status(401).send({erro: 'não autorizado'})
        // next()
        const authHeader = req.headers.authorization

        if(!authHeader)
        return res.status(401).send({erro: 'Token não encontrado'})

       // split - quebra o caractere e guarda no vetor path com duas posições
       const parts = authHeader.split(' ')
    
       if(!parts.lenght === 2)
       return res.status(401).send({erro: 'Token mal formatado'})

       const [ bearer, token] = parts

       jwt.verify(token, authConfig.secret, (erro,user) => {
        if(erro) return res.status(401).send({erro: 'token inválido'})

        req.userId = user.id;
        return next()
       })


    })

    //Toda a configuração do express
    //Injeção de dependências de controllers no app
    consign().
    include('controllers').
    include('models').
    into(app);

    return app;


}

module.exports = customExpress();
