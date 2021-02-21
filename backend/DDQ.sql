-- CREATE DATABASE IF NOT EXISTS HospitalSQLInjectors;
-- USE HospitalSQLInjectors;
-- Create table and forgein keys 
-- a) Data Definition Queries

-- Drugs
CREATE TABLE IF NOT EXISTS Drugs(
    Drug_Name VARCHAR(255) NOT NULL PRIMARY KEY,
    UNIQUE (Drug_Name)
);


-- Pharmacies
CREATE TABLE IF NOT EXISTS Pharmacies (
    Pharmacy_ID int NOT NULL UNIQUE AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Street_Address VARCHAR(255) NOT NULL,
    City VARCHAR(255) NOT NULL,
    State VARCHAR(2) NOT NULL,
    Zip_Code int NOT NULL
);

-- DrugsPharmacy
CREATE TABLE IF NOT EXISTS DrugsPharmacy(
    Drug_Name VARCHAR(255),
    Pharmacy_ID int,
    FOREIGN KEY (Drug_Name) REFERENCES Drugs(Drug_Name),
    FOREIGN KEY (Pharmacy_ID) REFERENCES Pharmacies(Pharmacy_ID)
);

-- Hospitals
CREATE TABLE IF NOT EXISTS Hospitals (
    Hospital_Name VARCHAR(255) NOT NULL PRIMARY KEY,
    Street_Address VARCHAR(255) NOT NULL,
    City VARCHAR(255) NOT NULL,
    State VARCHAR(2) NOT NULL,
    Zip_Code int NOT NULL
);

-- Insurance_Providers
CREATE TABLE IF NOT EXISTS Insurance_Providers(
    Provider_Name VARCHAR(255) NOT NULL PRIMARY KEY,
    Deductible decimal NOT NULL,
    UNIQUE (Provider_Name)
);

-- InsuranceHospitals
DROP TABLE IF EXISTS InsuranceHospitals;
CREATE TABLE InsuranceHospitals (
    Provider_Name VARCHAR(255) NOT NULL,
    Hospital_Name VARCHAR(255) NOT NULL,
    FOREIGN KEY (Provider_Name) REFERENCES Insurance_Providers(Provider_Name),
    FOREIGN KEY (Hospital_Name) REFERENCES Hospitals(Hospital_Name)
);


-- Doctors
CREATE TABLE IF NOT EXISTS Doctors (
    Employee_ID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    First_Name VARCHAR(255) NOT NULL,
    Last_Name VARCHAR(255) NOT NULL,
    DOB date NOT NULL, 
    Sex varchar(1),
    Phone_Number VARCHAR(10),
    Number_of_Patients int DEFAULT NULL,
    Hospital_Name VARCHAR(255) NOT NULL,
    FOREIGN KEY (Hospital_Name) REFERENCES Hospitals(Hospital_Name),
    UNIQUE (Employee_ID)
);

-- Patients
CREATE TABLE IF NOT EXISTS Patients(
    Patient_ID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    First_name VARCHAR(255) NOT NULL,
    Last_name VARCHAR(255) NOT NULL,
    DOB DATE NOT NULL,
    Weight int NOT NULL,
    Height int NOT NULL,
    Sex VARCHAR(1) NOT NULL,
    Phone_Number VARCHAR(10),
    Blood_type char(3) DEFAULT NULL,
    Medication_Allergies BOOLEAN,
    Insurance_Provider VARCHAR(255),
    Employee_ID int NOT NULL,
    Hospital_Name VARCHAR(255) NOT NULL,
    FOREIGN KEY (Insurance_Provider) REFERENCES Insurance_Providers(Provider_Name),
    FOREIGN KEY (Employee_ID) REFERENCES Doctors(Employee_ID),
    FOREIGN KEY (Hospital_Name) REFERENCES Hospitals(Hospital_Name)
);

-- PharmaciesPatients
CREATE TABLE IF NOT EXISTS PharmaciesPatients(
    Patient_ID int NOT NULL,
    Pharmacy_ID int NOT NULL,
    FOREIGN KEY (Patient_ID) REFERENCES Patients(Patient_ID),
    FOREIGN KEY (Pharmacy_ID) REFERENCES Pharmacies(Pharmacy_ID)
);