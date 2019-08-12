
//Alterar login DB
const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'mysql669.umbler.com',
  port     : 41890,
  user     : 'lfgon',
  password : 'parangole123',
  database : 'myapp'
});

connection.connect(function(err){
    if(err) return console.log(err);
    console.log('conectou!'); 
    createTable(connection);
  })
 
function createTable(conn){

      const sql = "CREATE table IF NOT EXISTS mensagem (\n"+ 
                  "nome varchar(150) NOT NULL,\n"+
                  "email varchar(155) NOT NULL,\n"+
                  "mensagem varchar(555) NOT NULL,\n"+
                  "PRIMARY KEY (nome)\n"+
                  ");";
      
      conn.query(sql, function (error, results, fields){
          if(error) return console.log(error);
          console.log('criou a tabela!');
          
      });
}

function addRows(conn){
    const sql = "INSERT INTO Clientes(Nome,CPF) VALUES ?";
    const values = [
          ['teste1', '12345678901'],
          ['teste1', '09876543210'],
          ['teste3', '12312312399']
        ];
    conn.query(sql, [values], function (error, results, fields){
            if(error) return console.log(error);
            console.log('adicionou registros!');
            conn.end();//fecha a conexão
        });
  }
 
