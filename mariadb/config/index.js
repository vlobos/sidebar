const mysql = require('mysql');

let db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: '3306',
  password: '',
  database: 'sidebar'
})

db.connect((err)=> {
  if (err) {
    console.log('Failed to connect to MariaDB', err);
  } else {
    console.log('Connected to MariaDB');
    //connect.query (load stuff into db//copy command....)
  }
});


module.exports = db;