import React, { useState , useEffect} from "react";
import { EditingState, SearchState, IntegratedFiltering } from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  Toolbar,
  SearchPanel,
  TableHeaderRow,
  TableEditRow,
  TableEditColumn,
} from "@devexpress/dx-react-grid-bootstrap4";
import "@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css";
import Axios from "axios";


export default function PatientsTable() {
  let [testjson, setTestjson] = useState([]);

  useEffect(() => {
    // Axios.get("http://flip2.engr.oregonstate.edu:3001/api/patients/get").then(
      Axios.get("http://flip2.engr.oregonstate.edu:3001/api/patients/get").then(
          (response) => {
              setTestjson(response.data);
          }
      );
  }, []);

  const [columns] = useState([
    { name: "First_name", title: "First Name" },
    { name: "Last_name", title: "Last Name" },
    { name: "DOB", title: "Date of Birth" },
    { name: "Weight", title: "Weight (lbs)" },
    { name: "Height", title: "Height (in)" },
    { name: "Sex", title: "Sex" },
    { name: "Phone_Number", title: "Phone Number" },
    { name: "Blood_type", title: "Blood Type" },
    { name: "Medication_Allergies", title: "Medication Allergies" },
    { name: "Insurance_Provider", title: "Insurance Provider" },
    { name: "Employee_ID", title: "Employee ID" },
    { name: "Hospital_Name", title: "Hospital Name" },
    { name: "Patient_ID", title: "Patient ID(NOTHING)" },

  ]);

  const commitChanges = ({ added, changed, deleted }) => {
    // insert into the back end
   
    if (added) {
      Axios.post("http://flip2.engr.oregonstate.edu:3001/api/patients/insert", {
        patientsFirst_name: added[0].First_name,
        patientsLast_name: added[0].Last_name,
        patientsDOB: added[0].DOB,
        patientsWeight: added[0].Weight,
        patientsHeight: added[0].Height,
        patientsSex: added[0].Sex,
        patientsPhone_number: added[0].Phone_Number,
        patientsBlood_type: added[0].Blood_type,
        patientsMedication_Allergies: added[0].Medication_Allergies,
        patientsInsurance_Provider: added[0].Insurance_Provider,
        patientsEmployee_ID: added[0].Employee_ID,
        patientsHospital_Name: added[0].Hospital_Name,
      }).then(() => {
        console.log("insert Patients successful");
        window.location.reload();
      });
    }
    if (changed) {
      console.log(changed); // print out the index and the object, only gives you the things that are changed
      console.log(Object.keys(changed)[0]); // index
      // console.log(changed[Object.keys(changed)[0]].Street_Address);
      let index = Object.keys(changed)[0]; // index that has the change

     
      if (changed[Object.keys(changed)[0]]) {
          let First_name, Last_name, DOB, Weight, Height, Sex, Phone_Number, Blood_type, Medication_Allergies, Insurance_Provider, Employee_ID, Hospital_Name;
          if (changed[Object.keys(changed)[0]].First_name) {
              First_name = changed[Object.keys(changed)[0]].First_name;
          }
          else {
            First_name = testjson[index].First_name;
          }
          
          if (changed[Object.keys(changed)[0]].Last_name) {
              Last_name = changed[Object.keys(changed)[0]].Last_name;
          }
          else {
            Last_name = testjson[index].Last_name;
          }
          
          if (changed[Object.keys(changed)[0]].DOB) {
              DOB = changed[Object.keys(changed)[0]].DOB;
          }
          else {
            DOB = testjson[index].DOB;
          }
          
          if (changed[Object.keys(changed)[0]].Weight) {
              Weight = changed[Object.keys(changed)[0]].Weight;
          }
          else {
            Weight = testjson[index].Weight;
          }
          
          if (changed[Object.keys(changed)[0]].Height) {
              Height = changed[Object.keys(changed)[0]].Height;
          }
          else {
            Height = testjson[index].Height;
          }
          
          if (changed[Object.keys(changed)[0]].Sex) {
              Sex = changed[Object.keys(changed)[0]].Sex;
          }
          else {
            Sex = testjson[index].Sex;
          }
          
          if (changed[Object.keys(changed)[0]].Phone_Number) {
            Phone_Number = changed[Object.keys(changed)[0]].Phone_Number;
          }
          else {
            Phone_Number = testjson[index].Phone_Number;
          }
          
          if (changed[Object.keys(changed)[0]].Blood_type) {
            Blood_type = changed[Object.keys(changed)[0]].Blood_type;
          }
          else {
            Blood_type = testjson[index].Blood_type;
          }
          
          if (changed[Object.keys(changed)[0]].Medication_Allergies) {
            Medication_Allergies = changed[Object.keys(changed)[0]].Medication_Allergies;
          }
          else {
            Medication_Allergies = testjson[index].Medication_Allergies;
          }
          
          if (changed[Object.keys(changed)[0]].Insurance_Provider) {
            Insurance_Provider = changed[Object.keys(changed)[0]].Insurance_Provider;
          }
          else {
            Insurance_Provider = testjson[index].Insurance_Provider;
          }
          
          if (changed[Object.keys(changed)[0]].Employee_ID) {
            Employee_ID = changed[Object.keys(changed)[0]].Employee_ID;
          }
          else {
            Employee_ID = testjson[index].Employee_ID;
          }
          
          if (changed[Object.keys(changed)[0]].Hospital_Name) {
            Hospital_Name = changed[Object.keys(changed)[0]].Hospital_Name;
          }
          else {
            Hospital_Name = testjson[index].Hospital_Name;
          }

          Axios.put(
              "http://flip2.engr.oregonstate.edu:3001/api/patients/update",
              {
                  patientID: parseInt(testjson[index].Patient_ID),
                  patientsFirst_name: First_name,
                  patientsLast_name: Last_name,
                  patientsDOB: DOB,
                  patientsWeight: Weight,
                  patientsHeight: Height,
                  patientsSex: Sex,
                  patientsPhone_number: Phone_Number,
                  patientsBlood_type: Blood_type,
                  patientsMedication_Allergies: Medication_Allergies,
                  patientsInsurance_Provider: Insurance_Provider,
                  patientsEmployee_ID: Employee_ID,
                  patientsHospital_Name: Hospital_Name,
              }
          ).then(() => {
              console.log("update successful for patients");
              window.location.reload();
          });
      } else {
          // when there are no changes to the index
          console.log("no change");
      }
  }

  if (deleted) {
      //deleted[0] gives the index
      let patientID = testjson[deleted[0]].Patient_ID;
      // Axios.delete("http://flip2.engr.oregonstate.edu:3001/api/delete/${patintID}");
      Axios.delete(
          `http://flip2.engr.oregonstate.edu:3001/api/patients/delete/${patientID}`
      ).then(() => {
          window.location.reload();
      });
  }

  };

  return (
    <div className="card">
        {/* seach  */}
        {/* table */}
      <Grid rows={testjson} columns={columns}>
        <SearchState/>
        <IntegratedFiltering />
        <EditingState onCommitChanges={commitChanges} />
        <Table />
        <TableHeaderRow />
        <TableEditRow />
        <TableEditColumn showAddCommand showEditCommand showDeleteCommand />
        <Toolbar />
        <SearchPanel />
      </Grid>
    </div>
  );
};