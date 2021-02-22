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

//Hospital SELECT and INSERT
app.get("/api/hospital/get", (req, res) => {
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

app.post("/api/hospital/insert", (req, res) => {
  let hospitalName = req.body.hospitalName;
  let hospitalAddress = req.body.hospitalAddress;
  let hospitalCity = req.body.hospitalCity;
  let hospitalState = req.body.hospitalState;
  let hospitalZipcode = req.body.hospitalZipcode;

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
      res.send("Success!");
      console.log(result)
    }
  });
});

//Patients SELECT and INSERT
app.get("/api/patients/get", (req, res) => {
  const sqlSelect =
    'SELECT * FROM Patients'; // insert into Patients table

  db.query(sqlSelect, (err, result) => {
    if(err){
      res.write(JSON.stringify(err));
        res.end();
    }else{
      res.send(result);
    }
  });
});

app.post("/api/patients/insert", (req, res) => {
  let First_name = req.body.patientsFirst_name;
  let Last_name = req.body.patientsLast_name;
  let DOB = req.body.patientsDOB;
  let Weight = req.body.patientsWeight;
  let Height = req.body.patientsHeight;
  let Sex = req.body.patientsSex;
  let Phone_number = req.body.patientsPhone_number;
  let Blood_type = req.body.patientsBlood_type;
  let Medication_Allergies = req.body.patientsMedication_Allergies;
  let Insurance_Provider = req.body.patientsInsurance_Provider;
  let Employee_ID = req.body.patientsEmployee_ID;
  let Hospital_Name = req.body.patientsHospital_Name;

  const sqlInsert =
    'INSERT INTO Patients (First_name, Last_name, DOB, Weight, Height, Sex, Phone_number, Blood_type, Medication_Allergies, Insurance_Provider, Employee_ID, Hospital_Name) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);'; // insert into hospital table

  db.query(sqlInsert,[First_name, Last_name, DOB, Weight, Height, Sex, Phone_number, Blood_type, Medication_Allergies, Insurance_Provider, Employee_ID, Hospital_Name], (err, result) => {
    // console.log(result)
    if(err){
      res.write(JSON.stringify(err));
                res.end();
        console.log("error: " + err);
        console.log("results: " + result)
    }else{
      res.send("Success!");
      console.log(result)
    }
  });
});


//Pharmacies SELECT and INSERT
app.get("/api/pharmacies/get", (req, res) => {
  const sqlSelect = "SELECT * FROM Pharmacies"; // insert into hospital table

  db.query(sqlSelect, (err, result) => {
    if(err){
      res.write(JSON.stringify(err));
        res.end();
    }else{
      res.send(result);
    }
  });
});

app.post("/api/pharmacies/insert", (req, res) => {
  let pharmacyName = req.body.pharmacyName;
  let pharmacyAddress = req.body.pharmacyAddress;
  let pharmacyCity = req.body.pharmacyCity;
  let pharmacyState = req.body.pharmacyState;
  let pharmacyZipcode = req.body.pharmacyZipcode;

  console.log("pharmacyName: "+ pharmacyName);
  console.log("pharmacyAddress: "+ pharmacyAddress);
  console.log("pharmacyCity: " + pharmacyCity);

  const sqlInsert =
    "INSERT INTO Pharmacies (Name, Street_Address, City, State, Zip_Code) VALUES (?, ?, ?, ?, ?);"; // insert into pharmacy table

  db.query(sqlInsert,[pharmacyName, pharmacyAddress, pharmacyCity, pharmacyState, pharmacyZipcode], (err, result) => {
    // console.log(result)
    if(err){
      res.write(JSON.stringify(err));
      res.end();
        console.log("error: " + err);
        console.log("results: " + result)
    }else{
      res.send("Success!");
      console.log(result)
    }
  });
});

//Doctors SELECT and INSERT
app.get("/api/doctor/get", (req, res) => {
  const sqlSelect =
    'SELECT * FROM Doctors'; // insert into hospital table

  db.query(sqlSelect, (err, result) => {
    if(err){
      res.write(JSON.stringify(err));
        res.end();
    }else{
      res.send(result);
    }
  });
});

app.post("/api/doctor/insert", (req, res) => {
  let fName = req.body.fName;
  let lName = req.body.lName;
  let DOB = req.body.DOB;
  let sex = req.body.sex;
  let phoneNumber = req.body.phoneNumber;
  let numberOfPatients = req.body.numberOfPatients;
  let hospitalName = req.body.hospitalName;

  const sqlInsert =
    "INSERT INTO Doctors (First_Name, Last_Name, DOB, Sex, Phone_Number, Number_of_Patients, Hospital_Name) VALUES (?, ?, ?, ?, ?, ? ,?);"; // insert into pharmacy table

  db.query(sqlInsert,[fName,lName,DOB,sex, phoneNumber,numberOfPatients,hospitalName], (err, result) => {
    // console.log(result)
    if(err){
      res.write(JSON.stringify(err));
                res.end();
        console.log("error: " + err);
        console.log("results: " + result)
    }else{
      res.send("Success!");
      console.log(result)
    }
  });
});


//Insurance Provider SELECT and INSERT
app.get("/api/insurance/get", (req, res) => {
  const sqlSelect =
    'SELECT * FROM Insurance_Providers'; // insert into hospital table

  db.query(sqlSelect, (err, result) => {
    if(err){
      res.write(JSON.stringify(err));
        res.end();
    }else{
      res.send(result);
    }
  });
});

app.post("/api/insurance/insert", (req, res) => {
  let providerName = req.body.providerName;
  let providerDeductable = req.body.providerDeductable;

  const sqlInsert =
    "INSERT INTO Insurance_Providers VALUES (? ,?);"; // insert into pharmacy table

  db.query(sqlInsert,[providerName, providerDeductable], (err, result) => {
    // console.log(result)
    if(err){
      res.write(JSON.stringify(err));
                res.end();
        console.log("error: " + err);
        console.log("results: " + result)
    }else{
      res.send("Success!");
      console.log(result)
    }
  });
});

//Drugs SELECT and INSERT
app.get("/api/drugs/get", (req, res) => {
  const sqlSelect =
    'SELECT * FROM Drugs'; // insert into hospital table

  db.query(sqlSelect, (err, result) => {
    if(err){
      res.write(JSON.stringify(err));
        res.end();
    }else{
      res.send(result);
    }
  });
});

app.post("/api/drugs/insert", (req, res) => {
  let drugName = req.body.drugName;

  const sqlInsert =
    "INSERT INTO Drugs VALUES (?);"; // insert into pharmacy table

  db.query(sqlInsert,[drugName], (err, result) => {
    // console.log(result)
    if(err){
      res.write(JSON.stringify(err));
                res.end();
        console.log("error: " + err);
        console.log("results: " + result)
    }else{
      res.send("Success!");
      console.log(result)
    }
  });
});

//Drugs SELECT and INSERT
app.get("/api/drugspharmacy/get", (req, res) => {
  const sqlSelect =
    'SELECT * FROM DrugsPharmacy'; // insert into hospital table

  db.query(sqlSelect, (err, result) => {
    if(err){
      res.write(JSON.stringify(err));
        res.end();
    }else{
      res.send(result);
    }
  });
});

app.post("/api/drugspharmacy/insert", (req, res) => {
  let drugName = req.body.drugName;
  let pharmacyId = req.body.pharmacyId;

  const sqlInsert =
    "INSERT INTO DrugsPharmacy VALUES (?,?);"; // insert into pharmacy table

  db.query(sqlInsert,[drugName,pharmacyId], (err, result) => {
    // console.log(result)
    if(err){
      res.write(JSON.stringify(err));
                res.end();
        console.log("error: " + err);
        console.log("results: " + result)
    }else{
      res.send("Success!");
      console.log(result)
    }
  });
});

//Insurance Hospital SELECT and INSERT
app.get("/api/insurancehospitals/get", (req, res) => {
  const sqlSelect =
    'SELECT * FROM InsuranceHospitals'; // insert into hospital table

  db.query(sqlSelect, (err, result) => {
    if(err){
      res.write(JSON.stringify(err));
        res.end();
    }else{
      res.send(result);
    }
  });
});

app.post("/api/insurancehospitals/insert", (req, res) => {
  let providerName = req.body.providerName;
  let hospitalName = req.body.hospitalName;

  const sqlInsert =
    "INSERT INTO InsuranceHospitals VALUES (?,?);"; // insert into pharmacy table

  db.query(sqlInsert,[providerName, hospitalName], (err, result) => {
    // console.log(result)
    if(err){
      res.write(JSON.stringify(err));
                res.end();
        console.log("error: " + err);
        console.log("results: " + result)
    }else{
      res.send("Success!");
      console.log(result)
    }
  });
});

//Pharmacies Patients SELECT and INSERT
app.get("/api/pharmaciespatients/get", (req, res) => {
  const sqlSelect =
    'SELECT * FROM PharmaciesPatients'; // insert into hospital table

  db.query(sqlSelect, (err, result) => {
    if(err){
      res.write(JSON.stringify(err));
        res.end();
    }else{
      res.send(result);
    }
  });
});

app.post("/api/pharmaciespatients/insert", (req, res) => {
  let patientId = req.body.patientId;
  let pharmacyId = req.body.pharmacyId;

  const sqlInsert =
    "INSERT INTO PharmaciesPatients VALUES (?,?);"; // insert into pharmacy table

  db.query(sqlInsert,[patientId, pharmacyId], (err, result) => {
    // console.log(result)
    if(err){
      res.write(JSON.stringify(err));
                res.end();
        console.log("error: " + err);
        console.log("results: " + result)
    }else{
      res.send("Success!");
      console.log(result)
    }
  });
});

// checking what port its on
app.listen(3001, () => {
  console.log("running on port 3001"); // change port later to phpmyadmin
});
