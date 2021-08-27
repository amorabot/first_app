const express = require('express');
const router = express.Router();



router.use(express.static('public'));
//especifica a pasta contendo arquivos estáticos.
//o nome 'public' não precisará ser colocado no inicio da rota que se refira a eles
// por padrão, se não houver conteúdo na rota para ser usado, vai ser o da pasta com conteudo estático padrão: public

//Exemplo de rotas:
/*
http://localhost:3000/css
http://localhost:3000/images
http://localhost:3000/index.html
*/

//método get: quando o usuário solicita conteúdo daquela rota ('/' nesse caso) a funcionalidade é executada
//os parametros na callback(req,res) são passados pelo método get: a requisição de info feita ao navegador e a resposta para ele. os nomes das var. não importam.
router.get('/', (req, res)=>{ 
    res.render('pages/home'); //posso omitir a extensão (era pra ser home.ejs)
})

router.get('/about', (req,res)=>{
    res.render('pages/about');
});

router.get('/cadastro',(req,res)=>{
    //a funcao render pode receber um pametro na forma de objeto literal
    //no caso, ela irá receber um objeto com campo chamado users e com valor igual ao vetor users
    res.render('pages/cadastro', {users: users})
});

router.post('/cadastro/remove', (req,res)=>{
    let name = req.body.name; //
    console.log(req.body)
    if(users.length==0){
        console.log("Erro: Não há elemento a ser removido!");
        return res.status(500).json({
            status:'error',
            error:`Removed element: ${name}`
        });

    } else {
        for(let cont=0;cont<users.length;cont++){
            if(users[cont].name==name){
                users.splice(cont,1);
                console.log("Elemento Removido: ",name);
                return res.status(200).json({
                    status:'sucess',
                    data:users
                });
                //res.send(JSON.stringify({sucess:`Elemento removido com sucesso: ${name}`}));
            } else if(cont==users.length-1){
                console.log("Erro ao remover elemento: ",name);
                return res.status(400).json({
                    status:'error',
                    error:`Didn't Remove element: ${name}`
                });
            }
        }
    }
});

router.post('/cadastro/update', (req,res)=>{
    //essa função substitui os valores armazenados no indice 'id' do vetor users por valores recebidos do navegador (armazenados em req.body)
    //recebe dados do cliente/navegador na forma de um objeto JSON (possui diversas propriedades (.name, .email, por exemplo) que podem ser acessadas diretamente)

    users[req.body.id].name=req.body.name; //req.body: objeto contendo toda a informação enviada | .name: uma das propriedades do 'objetão'
    users[req.body.id].email=req.body.email;
    users[req.body.id].address=req.body.address;
    users[req.body.id].age=req.body.age;
    users[req.body.id].heigth=req.body.heigth;
    users[req.body.id].vote=req.body.vote;


    res.sendStatus(200); //envia mensagem 200 significando que as modificacoes deram certo
    console.log("Dados recebidos: ",req.body);//mostra no console do servidor os dados recebidos
})

router.get('/cadastro/list',(req,res)=>{
    //Para fazer em casa: Como seria uma rotina para listar todos os itens cadastrados?

});

router.post('/cadastro/add',(req,res)=>{
    let user={name:"",email:"",address:"",heigth:"",age:"",vote:""};

    user.name = req.body._name;
    user.email = req.body._email;
    user.address = req.body._address;
    user.heigth = req.body._heigth;
    user.age = req.body._age;
    user.vote = req.body._vote;

    users.push(user);
    console.log("Usuário cadastrado: ",user);
    // console.log("Lista dos usuários: ",users); //nao use esta linha se tiver muitos elementos em users pois causara lentidao no servidor
    res.sendStatus(200);
    res.status(200).json({
        status:'sucess',
        data: `Usuário ${user} foi adiocionado com sucesso!`
    });

});

module.exports = router;