const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'DB'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

//reading data from the database
connection.query('SELECT * FROM employees', (err,rows) => {
  if(err) throw err;

  console.log('Data received from DB employees table:\n');
  console.log(rows);

  //logging individual output
  rows.forEach( (row) => {
  console.log(`${row.name} is in ${row.location}`);
});

});

//writing to display with express
const express = require('express')
const app = express()
const path = require('path');
const router = express.Router();
const port = 3000

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});
app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))