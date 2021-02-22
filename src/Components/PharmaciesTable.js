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

export default function PharmaciesTable() {
  let [testjson, setTestjson] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/pharmacies/get").then((response) => {
      // console.log(response.data);
      // for (let i = 0; i < length; i++) {
      //   response.data[i].id = 1;
      // }
      setTestjson(response.data);
    });
  }, []);

  const [columns] = useState([
    { name: "Name", title: "Pharmacy Name" },
    { name: "Street_Address", title: "Street Address" },
    { name: "City", title: "City" },
    { name: "State", title: "State" },
    { name: "Zip_Code", title: "Zip Code" },
    { name: "Pharmacy_ID", title: "Pharmacy ID(CAN'T CHANGE)" },
  ]);

  const commitChanges = ({ added, changed, deleted }) => {
    // insert into the back end
    let changedRows;
    if (added) {
      // console.log("added: " + added[0].Name);

      Axios.post("http://localhost:3001/api/pharmacies/insert", {
        pharmacyName: added[0].Name,
        pharmacyAddress: added[0].Street_Address,
        pharmacyCity: added[0].City,
        pharmacyState: added[0].State,
        pharmacyZipcode: parseInt(added[0].Zip_Code),
      }).then(() => {
        console.log("insert pharmacy successful");
      });
    }
    if (changed) {
      // changedRows = testjson.map((row) =>
      //   changed[row.id] ? { ...row, ...changed[row.id] } : row
      // );
    }
    if (deleted) {
      //Too pull from do deleted[0].
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
