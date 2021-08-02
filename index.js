const express = require("express"); //chama tudo do módulo
const app = express(); //inicializa o módulo e disponibiliza

const port = 3000; //define a porta
const address = "localhost"; //localhost é o nome padrão do computador e está ligado ao IP 127.0.0.1

//    ()=>{     }   é notação para function(){}, funciona da mesma forma. 

const server = app.listen(port, address,()=>{ //servidor criado, busque pelos valores de port e address.
    let host = server.address().address;     //uma vez obtidos, guarda esses valores em host e port (e loga o aviso)
    let port = server.address().port;
    console.log(`Servidor executando no endereço ${host} e porta ${port}`);
});