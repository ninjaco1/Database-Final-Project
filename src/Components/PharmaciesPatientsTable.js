import React, { useState, useEffect } from "react";
import {
  EditingState,
  SearchState,
  IntegratedFiltering,
} from "@devexpress/dx-react-grid";
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

export default function PharmaciesPatientsTable() {
  let [testjson, setTestjson] = useState([]);

  useEffect(() => {
    Axios.get(
        //"http://flip2.engr.oregonstate.edu:3001/api/pharmaciespatients/get"
        "http://flip2.engr.oregonstate.edu:3001/api/pharmaciespatients/get"
    ).then((response) => {
        setTestjson(response.data);
    });
  }, []);

  const [columns] = useState([
    { name: "Patient_ID", title: "Patient's ID" },
    { name: "Pharmacy_ID", title: "Pharmacies ID" },
  ]);

  const commitChanges = ({ added, deleted }) => {
    // insert into the back end
    if (added) {
      Axios.post(
          "http://flip2.engr.oregonstate.edu:3001/api/pharmaciespatients/insert",
          {
              patientId: added[0].Patient_ID,
              pharmacyId: added[0].Pharmacy_ID,
          }
      ).then(() => {
          console.log("insert pharmaciespatients successful");
          window.location.reload();
      });
    }
    
    if (deleted) {
      // let name = testjson[deleted[0]].;
      let patientId = testjson[deleted[0]].Patient_ID;
      let pharmacyId = testjson[deleted[0]].Pharmacy_ID;

      // Axios.delete("http://flip2.engr.oregonstate.edu:3001/api/hospital/delete/${drugName}/${pharmacyId}");
      Axios.delete(
          `http://flip2.engr.oregonstate.edu:3001/api/pharmaciespatients/delete/${patientId}/${pharmacyId}`
      ).then(() => {
          window.location.reload();
      });
  }
}

  return (
    <div className="card">
      <Grid rows={testjson} columns={columns}>
        <SearchState />
        <IntegratedFiltering />
        <EditingState onCommitChanges={commitChanges} />
        <Table />
        <TableHeaderRow />
        <TableEditRow />
        <TableEditColumn showAddCommand showDeleteCommand />
        <Toolbar />
        <SearchPanel />
      </Grid>
    </div>
  );
}