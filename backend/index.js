const express = require('express');
var cors = require('cors');
const app = express();         
const bodyParser = require('body-parser');
const port = 3001; //porta padrão
const mysql = require('mysql');


app.use(cors());

//configurando o body parser para pegar POSTS mais tarde
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//definindo as rotas
const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
app.use('/', router);

//inicia o servidor
app.listen(port);
console.log('API funcionando!');

function execSQLQuery(sqlQry, res){
    const connection = mysql.createConnection({
        host     : 'mysql669.umbler.com',
        port     : 41890,
        user     : 'lfgon',
        password : 'parangole123',
        database : 'myapp'
    });
  
    connection.query(sqlQry, function(error, results, fields){
        if(error) 
          res.json(error);
        else
        console.log(results)
          res.json("{msg: Registro inserido com sucesso}");
        connection.end();
        console.log('executou!');
    });
  }
  
  router.post('/mensagem', (req, res) =>{
    console.log("Entrou!")
    const nome = req.body.nome
    const email = req.body.email
    const mensagem = req.body.mensagem
    execSQLQuery(`INSERT INTO mensagem(nome, email, mensagem) VALUES('${nome}','${email}','${mensagem}' )`, res);
})