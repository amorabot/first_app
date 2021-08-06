const express = require('express');
const router = express.Router();
const faker = require('Faker');

let db = require('./db'); //um módulo feito manualmente e que será demandado e solicitado aqui.

//os parametros na callback são passados pelo método get: a requisição de info feita ao navegador e a resposta para ele. os nomes das var. não importam.
router.get('/', (req, res)=>{ //o router vai pegar o endereço da barra do navegador que irá conter uma barra, se conseguir, vai tratar esse endereço conforme a função:
    res.render('pages/home'); //posso omitir a extensão (era pra ser home.ejs)
    //res.send('Página sem nada');
    //se a função acessar a barra, irá mostrar "pag. sem nada" no navegador em seguida. basicamente ele envia a info de uma pagina html vazia escrito isso
})

router.get('/about', (req,res)=>{

    let usuarios = [];
    //usamos o faker pra criar 6 perfis pra colocar no about
    for(let i=1; i<=6; i++){
        usuarios.push({name: faker.name.findName(),
                       email: faker.internet.email(),
                       avatar: faker.image.image()});
    }
    console.log(usuarios)
    res.render('pages/about', {usuarios});
});

router.get('curriculo', (req,res)=>{
    res.send('Meu curriculo');
});

router.get('/cadastro/insert', (req,res)=>{
    //inserir um usuário
});

router.get('/cadastro/list', (req,res)=>{
    //lista de usuarios cadastrados
})

module.exports = router;