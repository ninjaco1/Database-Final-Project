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

// const getRowId = (row) => row.id;

export default function PatientsTable() {
  let [testjson, setTestjson] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/patients/get").then((response) => {
      setTestjson(response.data);
    });
  }, []);

  const [columns] = useState([
    { name: "First_name", title: "First Name" },
    { name: "Last_name", title: "Last Name" },
    { name: "DOB", title: "Date of Birth" },
    { name: "Weight", title: "Weight (lbs)" },
    { name: "Height", title: "Height (in)" },
    { name: "Sex", title: "Sex" },
    { name: "Phone_number", title: "Phone Number" },
    { name: "Blood_type", title: "Blood Type" },
    { name: "Medication_Allergies", title: "Medication Allergies" },
    { name: "Insurance_Provider", title: "Insurance Provider" },
    { name: "Employee_ID", title: "Employee ID" },
    { name: "Hospital_Name", title: "Hospital Name" },
    { name: "Patient_ID", title: "Patient ID(NOTHING)" },

  ]);

  const commitChanges = ({ added, changed, deleted }) => {
    // insert into the back end
    let changedRows;
    if (added) {
      Axios.post("http://localhost:3001/api/patients/insert", {
        patientsFirst_name: added[0].First_name,
        patientsLast_name: added[0].Last_name,
        patientsDOB: added[0].DOB,
        patientsWeight: added[0].Weight,
        patientsHeight: added[0].Height,
        patientsSex: added[0].Sex,
        patientsPhone_number: added[0].Phone_number,
        patientsBlood_type: added[0].Blood_type,
        patientsMedication_Allergies: added[0].Medication_Allergies,
        patientsInsurance_Provider: added[0].Insurance_Provider,
        patientsEmployee_ID: added[0].Employee_ID,
        patientsHospital_Name: added[0]. Hospital_Name,
      }).then(() => {
        console.log("insert Patients successful");
      });
    }
    if (changed) {
      // changedRows = testjson.map((row) =>
      //   changed[row.id] ? { ...row, ...changed[row.id] } : row
      // );
    }
    if (deleted) {//Too pull from do deleted[0].
      // const deletedSet = new Set(deleted);
      // changedRows = testjson.filter((row) => !deletedSet.has(row.id));
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