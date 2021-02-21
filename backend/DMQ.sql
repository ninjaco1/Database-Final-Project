
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