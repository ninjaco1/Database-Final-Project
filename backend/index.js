const express = require("express");
var router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  connectionList: 10,
  host: "classmysql.engr.oregonstate.edu",
  user: "cs340_hershbja",
  password: "mysqlinjections",
  database: "cs340_hershbja",
});
module.exports.pool = db;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/hospital/get", (req, res) => {
  const sqlSelect =
    'SELECT * FROM Hospitals'; // insert into hospital table

  db.query(sqlSelect, (err, result) => {
    if(err){
      res.write(JSON.stringify(err));
        res.end();
    }else{
      res.send(result);
    }
  });
});

// app.post("/hospital/insert", (req, res) => {
//     const sqlInsert = 'INSERT INTO Hospitals VALUES (?, ?, ?, ?, ?);';
//     db.query();

app.get("/hospital/insert", (req, res) => {
  const hospitalName = req.body.Hospital_Name;
  const hospitalAddress = req.body.Street_Address;
  const hospitalCity = req.body.City;
  const hospitalState = req.body.State;
  const hospitalZipcode = req.body.Zip_Code;

  const sqlInsert =
    'INSERT INTO Hospitals VALUES (?, ?, ?, ?, ?);'; // insert into hospital table

  db.query(sqlInsert,[hospitalName, hospitalAddress, hospitalCity, hospitalState, hospitalZipcode], (err, result) => {
    if(err){
      res.write(JSON.stringify(err));
                res.end();
        console.log(err);
    }else{
      res.send("main page");
    }
  });
});

// app.get("/hospital/insert", (req, res) => {
//   const sqlInsert =
//     'INSERT INTO Hospitals VALUES ("SQL DUP", "DUP", "Health Up", "HP", "65504");'; // insert into hospital table

//   db.query(sqlInsert, (err, result) => {
//     res.send("hospital table");
//   });
// });

app.listen(3001, () => {
  console.log("running on port 3001"); // change port later to phpmyadmin
});
