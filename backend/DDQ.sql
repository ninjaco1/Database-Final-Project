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
    Hospital_Name VARCHAR(255),
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
    Employee_ID int,
    Hospital_Name VARCHAR(255),
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


-- list of INSERT queries

-- Setting up Drugs table
INSERT INTO Drugs 
VALUES ("Ibuprofen"),
        ("Epineferon"),
        ("Morphine"),
        ("Oxycodone"),
        ("Codeine"),
        ("Aspirin");

-- Setting Up Pharmacies
INSERT INTO Pharmacies (Name, Street_Address, City, State, Zip_Code)
VALUES ("WalBlues", "1234 Green Rd. NE", "Oregano", "OR", "35264"),
        ("Mono-Mart", "3620 Golden St. SE", "Wilsional", "WA", "44331"),
        ("Pop n' Pills", "8601 Shank Rd. NW", "Stabbyton", "OH", "23404");

-- Setting Up DrugsPharmacies
INSERT INTO DrugsPharmacy
VALUES ("Epineferon", 1),
        ("Ibuprofen", 1),
        ("Oxycodone", 2),
        ("Aspirin", 2),
        ("Ibuprofen", 3),
        ("Epineferon", 3),
        ("Morphine", 3),
        ("Oxycodone", 3),
        ("Codeine", 3),
        ("Aspirin", 3);

-- Setting Up Hospitals
INSERT INTO Hospitals
VALUES ("SQL Injections", "1335 MYSQL St.", "Health Up", "HP", "65504"),
        ("Flask Exploits", "2385 Monty Road", "Python", "NY", "12937"),
        ("Athen's Health", "7673 Athens St.", "Athens", "AH", "45600");

-- Setting Up Insurance_Providers
INSERT INTO Insurance_Providers
VALUES ("All-Father", 2001.56),
        ("Red Sword", 420.69);

-- Setting Up InsuranceHospitals
INSERT INTO InsuranceHospitals
VALUES ("All-Father","SQL Injections"),
        ("All-Father","Flask Exploits"),
        ("Red Sword","SQL Injections"),
        ("Red Sword","Athen's Health");

-- Setting Up Doctors
INSERT INTO Doctors (First_Name, Last_Name, DOB, Sex, Phone_Number, Number_of_Patients, Hospital_Name)
VALUES ("Lindsay","Kaiser","1974-01-22", "F","4634926334",3,"Athen's Health"),
        ("Dusty","Harrigan","1963-08-14","M","4734543423",4,"Flask Exploits"),
        ("Tim", "Vaughn", "1980-06-05", "M","5314023456",4,"SQL Injections"),
        ("Tao","Hsu","1998-07-03","M","6354671092",5,"SQL Injections");

-- Setting Up Patients
INSERT INTO Patients (First_Name, Last_Name, DOB, Weight, Height, Sex, Phone_Number, Blood_type, Medication_Allergies, Insurance_Provider, Employee_ID, Hospital_Name)
VALUES ("Billy","Bob","2000/11/9", 146, 72, "M", "5065853326", "AB+", 1, "All-Father", 1, "Athen's Health"),
        ("Steeve","Blockus","2011/11/8", 300, 80, "M", "650825526", "O-", 0, "Red Sword", 2, "Flask Exploits"), 
        ("Mystery","Person","1337/02/23", 10, 100, "F", NULL, NULL, 0, NULL, 3, "SQL Injections");

-- Setting Up PharmciesPatients
INSERT INTO PharmaciesPatients
VALUES (1,2),
        (2,3),
        (3,1);