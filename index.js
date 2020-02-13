// // API REACT COM NODE//

// ****** Aula 01*****///
// // Para ter acesso ao express
// const express = require('express');
// // criando a const para usar o app
// const  app = express();
// app.listen(300, ()=> {
//     console.log('Servidor rodando na porta 3000')
// });
// //executou o listen o servidor já vai está de pé
// // barra significa pasta raiz
// app.get('/', (req,res) => {
//     res.send(
//         '<h1>Minha primeira rota do express</h1>'
//     );
// });

// app.get('/', (req,res) => {
//     res.send(
//         '<h1>Rota para as series</h1>'
//     );
// });




// **** Aula 02 *****//

//Arquivo que sobe a aplicação

//Já recebe o app, não o trecho de código
const app = require('./src/server');

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

