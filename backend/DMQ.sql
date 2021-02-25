-- Drug Manipulation
SELECT *
FROM Drugs;

INSERT INTO Drugs 
VALUES (:DrugName)

DELETE FROM Drugs 
WHERE Drug_Name = :DrugName;


-- Pharmacies Manipulation
SELECT *
FROM Pharmacies;

INSERT INTO Pharmacies (Name, Street_Address, City, State, Zip_Code)
VALUES (:PharmacyName, :PharmacyStreetAddress, :PharmacyCity, :PharmacyState, :PharmacyZipCode)

DELETE FROM Pharmacies 
WHERE Pharmacy_ID = :PharmacyID;



-- DrugsPharmacies Manipulation
SELECT *
FROM DrugsPharmacies;

INSERT INTO DrugsPharmacy
VALUES (:DrugNameFK, :PharmacyIDFK)

DELETE FROM DrugsPharmacy
WHERE Drug_Name = :DrugNameFK AND Pharmacy_ID = :PharmacyIDFK;



-- Hospitals Manipulation
SELECT *
FROM Hospitals;

INSERT INTO Hospitals
VALUES (:HospitalName, :HospitalStreetAddress, :HospitalCity, :HospitalState, :HospitalZipCode);

DELETE FROM Hospitals
WHERE Hospital_Name = :HospitalName;



-- Insurance_Providers Manipulation
SELECT *
FROM Insurance_Providers;

INSERT INTO Insurance_Providers
VALUES (:InsuranceName, :Deductible);

DELETE FROM Insurance_Providers
WHERE Provider_Name = :InsuranceName;



-- InsuranceHospitals Manipulation
SELECT *
FROM InsuranceHospitals;

INSERT INTO InsuranceHospitals
VALUES (:InsuranceNameFK, :HospitalnNameFK);

DELETE FROM InsuranceHospitals
WHERE Insurance_Name = :InsuranceNameFK AND Hospital_Name = :HospitalNameFK;



-- Doctors Manipulation
SELECT *
FROM Doctors;

INSERT INTO Doctors (First_Name, Last_Name, DOB, Sex, Phone_Number, Number_of_Patients, Hospital_Name)
VALUES (:DoctorFirstName, :DoctorLastName, :DOB, :Sex, :PhoneNumber, :NumberofPatients, :HospitalNameFK);

DELETE FROM Doctors
WHERE Employee_ID = :DoctorEmployeeID;



-- Patients Manipulation
SELECT *
FROM Patients;

INSERT INTO Patients (First_Name, Last_Name, DOB, Weight, Height, Sex, Phone_Number, Blood_type, Medication_Allergies, Insurance_Provider, Employee_ID, Hospital_Name)
VALUES (:PatientFirstName,:PatientLastName,:DOB, :WeightLbs, :HeightInches, :Sex, :Phone_number, :BlooType, :MedAllergies, :InsuranceNameFK, :DoctorEmployeeIDFK, :HospitalNameFK);

DELETE FROM Patients
WHERE Patient_ID = :PatientsID;



-- PharmciesPatients Manipulation
SELECT *
FROM PharmaciesPatients;

INSERT INTO PharmaciesPatients
VALUES (:PharmacyIDFK, :PatientsIDFK)

DELETE FROM PharmaciesPatients
WHERE Pharmacy_ID = :PharmacyIDFK AND Patient_ID = :PatientsIDFK;
