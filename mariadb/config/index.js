const mysql = require('mysql');

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'sidebar'
})

connection.connect((err)=> {
  if (err) {
    console.log('Failed to connect to MariaDB', err);
  } else {
    console.log('Connected to MariaDB');
  }
});

connection.end()