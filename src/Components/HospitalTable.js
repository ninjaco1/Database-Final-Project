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

export default function HospitalTable() {
  let [testjson, setTestjson] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/hospital/get").then((response) => {
      // console.log(response.data);
      // for (let i = 0; i < length; i++) {
      //   response.data[i].id = 1;
      // }
      setTestjson(response.data);

    });
  }, []);

  const [columns] = useState([
    { name: "Hospital_Name", title: "Hospital Name" },
    { name: "Street_Address", title: "Street Address" },
    { name: "City", title: "City" },
    { name: "State", title: "State" },
    { name: "Zip_Code", title: "Zip Code" },
  ]);

  const commitChanges = ({ added, changed, deleted }) => {
    // insert into the back end
    let changedRows;
    if (added) {
      Axios.post("http://localhost:3001/api/hospital/insert", {
        hospitalName: added[0].Hospital_Name, 
        hospitalAddress: added[0].Street_Address, 
        hospitalCity: added[0].City, 
        hospitalState: added[0].State, 
        hospitalZipcode: parseInt(added[0].Zip_Code) 
      }).then(() => {
        console.log("insert hospital successful");
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

