const express = require('express'); //chama tudo do módulo
const app = express(); //inicializa o módulo e disponibiliza em "app"
const routes = require('./routes');
const expressLayouts = require('express-ejs-layouts');
const {urlencoded} = require('express');


const port = 3000; //define a porta
const address = "localhost"; //localhost é o nome padrão do computador e está ligado ao IP 127.0.0.1

const utils = require('./utils');
const faker = require('faker')

const toggleBool = true;

//global é  usado quando eu quero que a variável seja vista em todo o projeto(nesse caso, será usado em routes)
global.users =  []
for (let cont=0;cont<20;cont++){
    users.push({name:faker.name.findName(),email:faker.internet.email(),address:faker.address.streetAddress(),age:utils.getRandomByInterval(15,50,true),heigth:utils.getRandomByInterval(1.50,1.70,false).toFixed(2),vote:toggleBool});
    toggleBool!=toggleBool;
}// no lugar de hardcodar os elementos iniciais da lista de usuários, o faker gera (nesse caso 20) usuários para povoar a tabela que será renderizada posteriormente




app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/', routes); // tudo que estiver no endereço terminando com /, direciona pra routes (que vai pro outro arquivo)

//    ()=>{     }   é notação para function(){     }, funciona da mesma forma. (Arrow function)

const server = app.listen(port, address,()=>{ //servidor criado, busque pelos valores de port e address e depois execute a função "callback".
    let host = server.address().address;     //uma vez obtidos, o método address de "server" é modificado e agora guarda ambos os valores passados.
    let port = server.address().port;       //esses valores são então guardados em variáveis e elas são mostradas no log abaixo:
    console.log(`Servidor executando no endereço ${host} e porta ${port}`); //apesar de termos passado "localhost" como parâmetro pra função listen,
});                                                                         //o express já vez o trabalho de "traduzir" isso para o endereço correspondente