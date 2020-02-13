const router = require('express').Router();
const authCrtl = require('../controllers/autenticacao');
const UsuarioValidator = require("../validators/Usuario");

router.post('/registrar', UsuarioValidator.validacoes(), authCrtl.registra);
router.post('/autenticar',authCrtl.autentica);

module.exports = router;
