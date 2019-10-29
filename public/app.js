/* const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'asshole',
  database: 'DB'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

//reading data from the database
connection.query('SELECT * FROM employees', (err, rows) => {
  if (err) throw err;

  console.log('Data received from DB employees table:\n');
  console.log(rows);

  //logging individual output
  rows.forEach((row) => {
    console.log(`${row.name} is in ${row.location} and has Id ${row.id}`);
  });

});

*/

const fs = require('fs');
let rawdata = fs.readFileSync('../db.json');
let parsedData = JSON.parse(rawdata);
console.log(parsedData);

for (i in parsedData) {
  var text;
  text += `
      <tr>
          <td scope="row">${parsedData[i].meta_time}</td>
          <td>${parsedData[i].meta_place}</td>
          <td>${parsedData[i].meta_date}</td>
          <td scope="row">${parsedData[i].meta_time}</td>
          <td>${parsedData[i].meta_place}</td>
          <td>${parsedData[i].meta_date}</td>
          <td scope="row">${parsedData[i].meta_time}</td>
          <td>${parsedData[i].meta_place}</td>
      </tr>`
  console.log(text);
}

//writing to display with express
const express = require('express')
const app = express()
const path = require('path');
const router = express.Router();
const port = 3000;

var htmlStart = `<!doctype html>
<html lang="en">

<head>
    <title>Index</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <!-- font-awsome CSS-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.css">

</head>

<body>
    <!-- navbar -->
    <nav class="navbar navbar-expand-sm navbar-light bg-light ">
        <a class="navbar-brand" href="#">Database</a>

        <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">

                <li class="nav-item ">
                    <a class="nav-link" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true"
                        onclick="document.location.reload(true)" aria-expanded="false"> <i class="fa fa-refresh"
                            aria-hidden="true"></i>
                    </a>
                </li>

                <li class="nav-item ">
                    <a class="nav-link" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false"> <i class="fa fa-save" aria-hidden="true"></i>
                    </a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false"><i class="fas fa-ellipsis-v"></i>
                    </a>
                </li>

            </ul>
            <button class="btn btn-outline-success my-2 my-sm-0 bg-success text-light" type="button">Edit
                Design</button>
            <button class="btn btn-outline-secondary my-2 my-sm-0 ml-1 rounded-0 text-success"><i
                    class="fas fa-plus"></i></button>
            <button class="btn btn-outline-secondary my-2 my-sm-0 ml-1 rounded-0"><i
                    class="fas fa-file-export"></i></button>
            <button class="btn btn-outline-secondary my-2 my-sm-0 rounded-0 border-left-0"><i
                    class="fas fa-envelope"></i></button>
            <button class="btn btn-outline-secondary my-2 my-sm-0 rounded-0 border-left-0"><i
                    class="fas fa-share-alt"></i></button>
            <button class="btn btn-outline-secondary my-2 my-sm-0 rounded-0 border-left-0"><i
                    class="fas fa-cloud-upload-alt"></i></button>
            <button class="btn btn-outline-secondary my-2 my-sm-0 rounded-0 border-left-0"><i
                    class="far fa-comment-alt"></i></button>

        </div>
    </nav>
    <!-- second nav -->

    <nav class="navbar navbar-expand-sm navbar-light bg-light mb-sm-1 ">

        <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">

                <li class="nav-item ">
                    <button class="btn btn-outline-secondary my-2 my-sm-0 py-sm-1 rounded-0" type="button"><i
                            class="fa fa-file-import"></i> Import Data</button>
                </li>

                <li class="nav-item ">
                    <div class="dropdown">
                        <button class="btn btn-outline-secondary my-2 my-sm-0 ml-1 py-sm-1 rounded-0 dropdown-toggle"
                            type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false" data-toggle-second="tooltip" data-placement="right"
                            title="Tooltip on right">
                            Filter
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownId">
                            <a class="dropdown-item" href="#">id</a>
                            <a class="dropdown-item" href="#">Date</a>
                            <a class="dropdown-item" href="#">Region</a>
                            <a class="dropdown-item" href="#">Product Category</a>
                            <a class="dropdown-item" href="#">Product</a>
                            <a class="dropdown-item" href="#">Customer Name</a>
                            <a class="dropdown-item" href="#">Sales</a>
                            <a class="dropdown-item" href="#">Cost</a>
                        </div>
                    </div>
                </li>

                <li class="nav-item ">
                    <button class="btn btn-outline-secondary my-2 my-sm-0 ml-1 py-sm-1 rounded-0" type="button"
                        id="btn-sort">Sort</button>
                </li>

                <li class="nav-item ">
                    <button class="btn btn-outline-secondary my-2 my-sm-0 ml-1 py-sm-1 rounded-0"
                        type="button">Add</button>
                </li>

                <li class="nav-item ">
                    <button class="btn btn-outline-secondary my-2 my-sm-0 py-sm-1 rounded-0 border-left-0"
                        type="button">Delete</button>
                </li>

                <li class="nav-item ">
                    <button class="btn btn-outline-secondary my-2 my-sm-0 ml-1 py-sm-1 rounded-0"
                        type="button">Merge</button>
                </li>

            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control border border-secondary py-1  border-right-0" type="text"
                    placeholder="Search" id="searchbox" list="dblist">
                <!-- list of available search -->
                <datalist id="dblist">
                    <!-- generated by JS -->
                </datalist>

                <button id="searchbtn" type="button"
                    class="btn btn-outline-secondary my-2 my-sm-0 rounded-0 border-left-0"><i
                        class="fas fa-search"></i></button>

            </form>
        </div>
    </nav>



    <!-- body container -->
    <div class="container-fluid" id="main">
        <div class="row ">
            <div class="col-md-12">
                <!-- result table -->
                <table class="table table-bordered">
                    <thead class="thead-light">
                        <tr>
                            <th><i class="fa fa-list"></i></th>
                            <th><i class="far fa-calendar-alt"></i> Date</th>
                            <th><i class="fa fa-italic"></i> Region</th>
                            <th><i class="fa fa-italic"></i> Product Category</th>
                            <th><i class="fa fa-italic"></i> Product</th>
                            <th><i class="fa fa-italic"></i> Customer Name</th>
                            <th><i class="fas fa-receipt"></i> Sales</th>
                            <th><i class="fas fa-receipt"></i> Cost</th>
                        </tr>

                    </thead>

                    <tbody id="results"> `;

var tableContent = text;

var htmlEnd = `   </tbody>
                </table>
                <!-- /result table -->
            </div>
        </div>
    </div>
    <!-- /body container -->

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous">
        </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous">
        </script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous">
        </script>
    <!-- custom js -->

</body>

</html>`;

router.get('/', function (req, res) {
  /*res.sendFile(path.join(__dirname+'/index.html'));*/
  res.write(htmlStart);
  res.write(tableContent);
  res.write(htmlEnd);

  res.end();

});
app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))