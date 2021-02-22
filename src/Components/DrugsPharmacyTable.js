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

const getRowId = (row) => row.id;

export default function DrugsPharmacyTable() {
  let [testjson, setTestjson] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/drugspharmacy/get").then((response) => {
      setTestjson(response.data);

    });
  }, []);

   const [columns] = useState([
     { name: "Drug_Name", title: "Drug's Name" },
     { name: "Pharmacy_ID", title: "Pharmacies ID" },
   ]);
   
  const commitChanges = ({ added, changed, deleted }) => {
    // insert into the back end
    let changedRows;
    if (added) {
      Axios.post("http://localhost:3001/api/drugspharmacy/insert", {
        drugName: added[0].Drug_Name, 
        pharmacyId: added[0].Pharmacy_ID,  
      }).then(() => {
        console.log("insert drugspharmacy successful");
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
    // setRows(changedRows);
  };

  return (
    <div className="card">
      <Grid rows={testjson} columns={columns}>
        <SearchState />
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
}

