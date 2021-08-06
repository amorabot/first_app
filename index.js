const express = require('express'); //chama tudo do módulo
const app = express(); //inicializa o módulo e disponibiliza em "app"
const routes = require('./routes');

const port = 3000; //define a porta
const address = "localhost"; //localhost é o nome padrão do computador e está ligado ao IP 127.0.0.1

app.use('/', routes); // ??????

//    ()=>{     }   é notação para function(){     }, funciona da mesma forma. (Arrow function)

const server = app.listen(port, address,()=>{ //servidor criado, busque pelos valores de port e address e depois execute a função "callback".
    let host = server.address().address;     //uma vez obtidos, o método address de "server" é modificado e agora guarda ambos os valores passados.
    let port = server.address().port;       //esses valores são então guardados em variáveis e elas são mostradas no log abaixo:
    console.log(`Servidor executando no endereço ${host} e porta ${port}`); //apesar de termos passado "localhost" como parâmetro pra função listen,
});                                                                         //o express já vez o trabalho de "traduzir" isso para o ip correspondente