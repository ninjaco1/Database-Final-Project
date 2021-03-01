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
    multipleStatements: true,
});
module.exports.pool = db;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Hospital SELECT and INSERT
app.get("/api/hospital/get", (req, res) => {
    const sqlSelect = "SELECT * FROM Hospitals"; // insert into hospital table

    db.query(sqlSelect, (err, result) => {
        if (err) {
            res.write(JSON.stringify(err));
            res.end();
        } else {
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

    const sqlInsert = "INSERT INTO Hospitals VALUES (?, ?, ?, ?, ?);"; // insert into hospital table

    db.query(
        sqlInsert,
        [
            hospitalName,
            hospitalAddress,
            hospitalCity,
            hospitalState,
            hospitalZipcode,
        ],
        (err, result) => {
            // console.log(result)
            if (err) {
                res.write(JSON.stringify(err));
                res.end();
                console.log("error: " + err);
                console.log("results: " + result);
            } else {
                res.send("Success!");
                console.log(result);
            }
        }
    );
});
//hospital delete
app.delete("/api/hospital/delete/:name", (req, res) => {
    let hospitalName = req.params.name;

    const updateDoctors = 'UPDATE Doctors SET Hospital_Name = null where Hospital_Name = ?;';
    const updatePatients = 'UPDATE Patients SET Hospital_Name = null where Hospital_Name = ?;';
    const delInsuranceHospital = 'DELETE FROM InsuranceHospitals WHERE Hospital_Name = ?;';
    const sqlDelete = "DELETE FROM Hospitals WHERE Hospital_Name = ?;";
    db.query(
        updateDoctors + updatePatients + delInsuranceHospital + sqlDelete,
        [hospitalName, hospitalName, hospitalName, hospitalName],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(" hospital delete Success!");
                console.log(result);
            }
        }
    );
});
// hospital update
app.put("/api/hospital/update", (req, res) => {
    let hospitalName = req.body.hospitalName;
    let hospitalAddress = req.body.hospitalAddress;
    let hospitalCity = req.body.hospitalCity;
    let hospitalState = req.body.hospitalState;
    let hospitalZipcode = req.body.hospitalZipcode;

    // can change everything but the hospital name
    const sqlUpdate =
        "UPDATE Hospitals SET Street_Address = ?, City = ?, State = ?, Zip_Code = ? WHERE Hospital_Name = ? ;";
    db.query(
        sqlUpdate,
        [
            hospitalAddress,
            hospitalCity,
            hospitalState,
            hospitalZipcode,
            hospitalName,
        ],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Success!");
                console.log(result);
            }
        }
    );
});

//Patients SELECT and INSERT
app.get("/api/patients/get", (req, res) => {
    const sqlSelect = "SELECT * FROM Patients"; // insert into Patients table

    db.query(sqlSelect, (err, result) => {
        if (err) {
            res.write(JSON.stringify(err));
            res.end();
        } else {
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
    let Phone_Number = req.body.patientsPhone_number;
    let Blood_type = req.body.patientsBlood_type;
    let Medication_Allergies = req.body.patientsMedication_Allergies;
    let Insurance_Provider = req.body.patientsInsurance_Provider;
    let Employee_ID = req.body.patientsEmployee_ID;
    let Hospital_Name = req.body.patientsHospital_Name;

    const sqlInsert =
        "INSERT INTO Patients (First_name, Last_name, DOB, Weight, Height, Sex, Phone_Number, Blood_type, Medication_Allergies, Insurance_Provider, Employee_ID, Hospital_Name) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);"; // insert into hospital table

    db.query(
        sqlInsert,
        [
            First_name,
            Last_name,
            DOB,
            Weight,
            Height,
            Sex,
            Phone_Number,
            Blood_type,
            Medication_Allergies,
            Insurance_Provider,
            Employee_ID,
            Hospital_Name,
        ],
        (err, result) => {
            // console.log(result)
            if (err) {
                res.write(JSON.stringify(err));
                res.end();
                console.log("error: " + err);
                console.log("results: " + result);
            } else {
                res.send("Success!");
                console.log(result);
            }
        }
    );
});

// patients update and delete
//patients delete
app.delete("/api/patients/delete/:patientID", (req, res) => {
    let patientID = parseInt(req.params.patientID);
    console.log(patientID);

    const sqlPharmaciesPatients =
        "DELETE FROM PharmaciesPatients WHERE Patient_ID = ?;";
    const sqlDelete = "DELETE FROM Patients WHERE Patient_ID = ?;";
    db.query(sqlPharmaciesPatients + sqlDelete, [patientID, patientID], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(" PharmaciesPatients delete Success!");
            console.log(result);
        }
    });
});
// patients update
app.put("/api/patients/update", (req, res) => {
    let id = req.body.patientID;
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

    // can change everything but the hospital name
    const sqlUpdate =
        "UPDATE Patients SET First_name = ?, Last_name = ?, DOB = ?, Weight = ?, Height = ?, Sex = ?, Phone_Number = ?, Blood_type = ?, Medication_Allergies = ?, Insurance_Provider = ?, Employee_ID = ?, Hospital_Name = ? WHERE Patient_ID = ? ;";
    db.query(
        sqlUpdate,
        [
            First_name,
            Last_name,
            DOB,
            Weight,
            Height,
            Sex,
            Phone_number,
            Blood_type,
            Medication_Allergies,
            Insurance_Provider,
            Employee_ID,
            Hospital_Name,
            id,
        ],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Success!");
                console.log(result);
            }
        }
    );
});

//Pharmacies SELECT and INSERT
app.get("/api/pharmacies/get", (req, res) => {
    const sqlSelect = "SELECT * FROM Pharmacies"; // insert into hospital table

    db.query(sqlSelect, (err, result) => {
        if (err) {
            res.write(JSON.stringify(err));
            res.end();
        } else {
            res.send(result);
        }
    });
});

// pharmacy insert
app.post("/api/pharmacies/insert", (req, res) => {
    let pharmacyName = req.body.pharmacyName;
    let pharmacyAddress = req.body.pharmacyAddress;
    let pharmacyCity = req.body.pharmacyCity;
    let pharmacyState = req.body.pharmacyState;
    let pharmacyZipcode = req.body.pharmacyZipcode;

    const sqlInsert =
        "INSERT INTO Pharmacies (Name, Street_Address, City, State, Zip_Code) VALUES (?, ?, ?, ?, ?);"; // insert into pharmacy table

    db.query(
        sqlInsert,
        [
            pharmacyName,
            pharmacyAddress,
            pharmacyCity,
            pharmacyState,
            pharmacyZipcode,
        ],
        (err, result) => {
            // console.log(result)
            if (err) {
                res.write(JSON.stringify(err));
                res.end();
                console.log("error: " + err);
                console.log("results: " + result);
            } else {
                res.send("Success!");
                console.log(result);
            }
        }
    );
});

app.delete("/api/pharmacies/delete/:id", (req, res) => {
    let id = parseInt(req.params.id);
   

    //  const sqlChangeHospital = "UPDATE Patients SET Employee_ID = null where Employee_ID = ?";
    const delPharmaciesPatients = "DELETE FROM PharmaciesPatients WHERE Pharmacy_ID = ?;";
    const delDrugsPharmacy = "DELETE FROM DrugsPharmacy WHERE Pharmacy_ID = ?;";
    const sqlDelete = "DELETE FROM Pharmacies WHERE Pharmacy_ID = ?;";
    // changing the patients doctors to null
    db.query(
        delPharmaciesPatients + delDrugsPharmacy + sqlDelete,
        [id, id, id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(" doctors delete Success!");
                console.log(result);
            }
        }
    );
});

app.put("/api/pharmacies/update", (req, res) => {
    let pharmacyID = req.body.pharmacyID;
    let pharmacyName = req.body.pharmacyName;
    let pharmacyAddress = req.body.pharmacyAddress;
    let pharmacyCity = req.body.pharmacyCity;
    let pharmacyState = req.body.pharmacyState;
    let pharmacyZipcode = req.body.pharmacyZipcode;

    // can change everything but the hospital name
    const sqlUpdate =
        "UPDATE Pharmacies SET Name = ?, Street_Address = ?, City = ?, State = ?, Zip_Code = ? WHERE Pharmacy_ID = ? ;";
    db.query(
        sqlUpdate,
        [pharmacyName, pharmacyAddress, pharmacyCity, pharmacyState, pharmacyZipcode, pharmacyID],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Success!");
                console.log(result);
            }
        }
    );
});


//Doctors SELECT and INSERT
app.get("/api/doctor/get", (req, res) => {
    const sqlSelect = "SELECT * FROM Doctors"; // insert into hospital table

    db.query(sqlSelect, (err, result) => {
        if (err) {
            res.write(JSON.stringify(err));
            res.end();
        } else {
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

    db.query(
        sqlInsert,
        [fName, lName, DOB, sex, phoneNumber, numberOfPatients, hospitalName],
        (err, result) => {
            // console.log(result)
            if (err) {
                res.write(JSON.stringify(err));
                res.end();
                console.log("error: " + err);
                console.log("results: " + result);
            } else {
                res.send("Success!");
                console.log(result);
            }
        }
    );
});

app.delete("/api/doctor/delete/:doctorID", (req, res) => {
    let doctorID = parseInt(req.params.doctorID);
    console.log(doctorID);

    //  const sqlChangeHospital = "UPDATE Patients SET Employee_ID = null where Employee_ID = ?";
    const sqlChangePatients =
        "UPDATE Patients SET Employee_ID = null where Employee_ID = ?;";
    const sqlDelete = "DELETE FROM Doctors WHERE Employee_ID = ?;";
    // changing the patients doctors to null
    db.query(sqlChangePatients +' '+ sqlDelete, [doctorID, doctorID], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(" doctors delete Success!");
            console.log(result);
        }
    });

});

app.put("/api/doctor/update", (req, res) => {
    let id = req.body.doctorID;
    let fName = req.body.fName;
    let lName = req.body.lName;
    let DOB = req.body.DOB;
    let sex = req.body.sex;
    let phoneNumber = req.body.phoneNumber;
    let numberOfPatients = req.body.numberOfPatients;
    let hospitalName = req.body.hospitalName;
    console.log(id);

    // can change everything but the hospital name
    const sqlUpdate =
        "UPDATE Doctors SET First_Name = ?, Last_Name = ?, DOB = ?, Sex = ?, Phone_Number = ?, Hospital_Name = ? WHERE Employee_ID = ? ;";
    db.query(
        sqlUpdate,
        [fName, lName, DOB, sex, phoneNumber, hospitalName, id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Success!");
                console.log(result);
            }
        }
    );
});

//Insurance Provider SELECT and INSERT
app.get("/api/insurance/get", (req, res) => {
    const sqlSelect = "SELECT * FROM Insurance_Providers"; // insert into hospital table

    db.query(sqlSelect, (err, result) => {
        if (err) {
            res.write(JSON.stringify(err));
            res.end();
        } else {
            res.send(result);
        }
    });
});

app.post("/api/insurance/insert", (req, res) => {
    let providerName = req.body.providerName;
    let providerDeductable = req.body.providerDeductable;

    const sqlInsert = "INSERT INTO Insurance_Providers VALUES (? ,?);"; // insert into pharmacy table

    db.query(sqlInsert, [providerName, providerDeductable], (err, result) => {
        // console.log(result)
        if (err) {
            res.write(JSON.stringify(err));
            res.end();
            console.log("error: " + err);
            console.log("results: " + result);
        } else {
            res.send("Success!");
            console.log(result);
        }
    });
});

app.delete("/api/insurance/delete/:name", (req, res) => {
    let name = req.params.name;
    console.log(name);

    //  const sqlChangeHospital = "UPDATE Patients SET Employee_ID = null where Employee_ID = ?";
    const sqlUpdatePatients =
        "UPDATE Patients SET Insurance_Provider = null where Insurance_Provider = ?;";
    const sqlDeleteInsuranceHospital = "DELETE FROM InsuranceHospitals WHERE Provider_Name = ?;";
    const sqlDelete = "DELETE FROM Insurance_Providers WHERE Provider_Name = ?;";
    // changing the patients doctors to null
    db.query(
        sqlUpdatePatients + sqlDeleteInsuranceHospital + sqlDelete,
        [name, name, name],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(" doctors delete Success!");
                console.log(result);
            }
        }
    );
});

app.put("/api/insurance/update", (req, res) => {
    let providerName = req.body.providerName;
    let providerDeductable = req.body.providerDeductable;
    

    // update insurance provider
    const sqlUpdate =
        "UPDATE Insurance_Providers SET Deductible = ? WHERE Provider_Name = ? ;";
    db.query(
        sqlUpdate,
        [providerDeductable, providerName],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Success!");
                console.log(result);
            }
        }
    );
});


//Drugs SELECT and INSERT
app.get("/api/drugs/get", (req, res) => {
    const sqlSelect = "SELECT * FROM Drugs"; // insert into hospital table

    db.query(sqlSelect, (err, result) => {
        if (err) {
            res.write(JSON.stringify(err));
            res.end();
        } else {
            res.send(result);
        }
    });
});

app.post("/api/drugs/insert", (req, res) => {
    let drugName = req.body.drugName;

    const sqlInsert = "INSERT INTO Drugs VALUES (?);"; // insert into pharmacy table

    db.query(sqlInsert, [drugName], (err, result) => {
        // console.log(result)
        if (err) {
            res.write(JSON.stringify(err));
            res.end();
            console.log("error: " + err);
            console.log("results: " + result);
        } else {
            res.send("Success!");
            console.log(result);
        }
    });
});


app.delete("/api/drugs/delete/:name", (req, res) => {
    let name = req.params.name;
    
    const sqlDeleteDrugsPharmacy ="DELETE FROM DrugsPharmacy WHERE Drug_Name = ?;";
    const sqlDelete ="DELETE FROM Drugs WHERE Drug_Name = ?;";
    // changing the patients doctors to null
    db.query(
        sqlDeleteDrugsPharmacy + sqlDelete,
        [name,name],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(" doctors delete Success!");
                console.log(result);
            }
        }
    );
});

//Drugs SELECT and INSERT
app.get("/api/drugspharmacy/get", (req, res) => {
    const sqlSelect = "SELECT * FROM DrugsPharmacy"; // insert into hospital table

    db.query(sqlSelect, (err, result) => {
        if (err) {
            res.write(JSON.stringify(err));
            res.end();
        } else {
            res.send(result);
        }
    });
});

app.post("/api/drugspharmacy/insert", (req, res) => {
    let drugName = req.body.drugName;
    let pharmacyId = req.body.pharmacyId;

    const sqlInsert = "INSERT INTO DrugsPharmacy VALUES (?,?);"; // insert into pharmacy table

    db.query(sqlInsert, [drugName, pharmacyId], (err, result) => {
        // console.log(result)
        if (err) {
            res.write(JSON.stringify(err));
            res.end();
            console.log("error: " + err);
            console.log("results: " + result);
        } else {
            res.send("Success!");
            console.log(result);
        }
    });
});



app.delete("/api/drugspharmacy/delete/:drugName/:pharmacyId", (req, res) => {
    let drugName = req.params.drugName;
    let pharmacyId = req.params.pharmacyId;
    console.log(drugName);
    
    const sqlDelete =
        "DELETE FROM DrugsPharmacy WHERE Drug_Name = ? AND Pharmacy_ID = ?;";
    // changing the patients doctors to null
    db.query(
        sqlDelete,
        [drugName, pharmacyId],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(" Drugs Pharmacy delete Success!");
                console.log(result);
            }
        }
    );
});





//Insurance Hospital SELECT and INSERT
app.get("/api/insurancehospitals/get", (req, res) => {
    const sqlSelect = "SELECT * FROM InsuranceHospitals"; // insert into hospital table

    db.query(sqlSelect, (err, result) => {
        if (err) {
            res.write(JSON.stringify(err));
            res.end();
        } else {
            res.send(result);
        }
    });
});

app.delete("/api/insurancehospitals/delete/:providerName/:hospitalName", (req, res) => {
    
    let providerName = req.params.providerName;
    let hospitalName = req.params.hospitalName;

    const sqlDelete =
        "DELETE FROM InsuranceHospitals WHERE Provider_Name = ? AND Hospital_Name = ?;";
    // changing the patients doctors to null
    db.query(sqlDelete, [providerName, hospitalName], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send("insurance hospital delete Success!");
            console.log(result);
        }
    });
});


app.post("/api/insurancehospitals/insert", (req, res) => {
    let providerName = req.body.providerName;
    let hospitalName = req.body.hospitalName;

    const sqlInsert = "INSERT INTO InsuranceHospitals VALUES (?,?);"; // insert into pharmacy table

    db.query(sqlInsert, [providerName, hospitalName], (err, result) => {
        // console.log(result)
        if (err) {
            res.write(JSON.stringify(err));
            res.end();
            console.log("error: " + err);
            console.log("results: " + result);
        } else {
            res.send("Success!");
            console.log(result);
        }
    });
});

//Pharmacies Patients SELECT and INSERT
app.get("/api/pharmaciespatients/get", (req, res) => {
    const sqlSelect = "SELECT * FROM PharmaciesPatients"; // insert into hospital table

    db.query(sqlSelect, (err, result) => {
        if (err) {
            res.write(JSON.stringify(err));
            res.end();
        } else {
            res.send(result);
        }
    });
});

app.post("/api/pharmaciespatients/insert", (req, res) => {
    let patientId = req.body.patientId;
    let pharmacyId = req.body.pharmacyId;

    const sqlInsert = "INSERT INTO PharmaciesPatients VALUES (?,?);"; // insert into pharmacy table

    db.query(sqlInsert, [patientId, pharmacyId], (err, result) => {
        // console.log(result)
        if (err) {
            res.write(JSON.stringify(err));
            res.end();
            console.log("error: " + err);
            console.log("results: " + result);
        } else {
            res.send("Success!");
            console.log(result);
        }
    });
});


app.delete(
    "/api/pharmaciespatients/delete/:patientId/:pharmacyId",
    (req, res) => {
        let patientID = req.params.patientId;
        let pharmacyID = req.params.pharmacyId;

        const sqlDelete =
            "DELETE FROM PharmaciesPatients WHERE Patient_ID = ? AND Pharmacy_ID = ?;";
        // changing the patients doctors to null
        db.query(sqlDelete, [patientID, pharmacyID], (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("insurance hospital delete Success!");
                console.log(result);
            }
        });
    }
);

// checking what port its on
app.listen(3001, () => {
    console.log("running on port 3001"); // change port later to phpmyadmin
});
