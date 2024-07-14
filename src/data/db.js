const mysql = require('mysql2');
require('dotenv').config()

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

connection.connect((err) => {
    if(err) {
        console.log(`Erro ao conectar com o database ${err.code}`);
        throw err;
    } 
    console.log(`Conexão estabelecida + ${connection.threadId} ${connection.state}`);  
})

module.exports = connection;