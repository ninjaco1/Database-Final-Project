const express = require("express");
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



app.post("/hospital/insert", (req, res) => {
  const hospitalName = req.body.hospitalName;
  const hospitalAddress = req.body.Street_Address;
  const hospitalCity = req.body.City;
  const hospitalState = req.body.State;
  const hospitalZipcode = req.body.Zip_Code;

  console.log("req: " + req.body.Hospital_Name + ", hospitalName: " + hospitalName)
  console.log("req1: " + req.body.hospitalName);
  // res.send(req.body)
  const sqlInsert =
    'INSERT INTO Hospitals VALUES (?, ?, ?, ?, ?);'; // insert into hospital table

  db.query(sqlInsert,[hospitalName, hospitalAddress, hospitalCity, hospitalState, hospitalZipcode], (err, result) => {
    // console.log(result)
    if(err){
      res.write(JSON.stringify(err));
                res.end();
        console.log("error: " + err);
        console.log("results: " + result)
    }else{
      res.send("main page");
      console.log(result)
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
