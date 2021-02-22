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

export default function InsuranceProvidersTable() {
  let [testjson, setTestjson] = useState([]);

  useEffect(() => {
    Axios.get("http://flip2.engr.oregonstate.edu:3001/api/insurance/get").then(
      (response) => {
        // console.log(response.data);
        // for (let i = 0; i < length; i++) {
        //   response.data[i].id = 1;
        // }
        setTestjson(response.data);
      }
    );
  }, []);

    
  const [columns] = useState([
    { name: "Provider_Name", title: "Provider Name" },
    { name: "Deductible", title: "Deductible" },
  ]);

  const commitChanges = ({ added, changed, deleted }) => {
    // insert into the back end
    let changedRows;
    if (added) {
      Axios.post(
        "http://flip2.engr.oregonstate.edu:3001/api/insurance/insert",
        {
          providerName: added[0].Provider_Name,
          providerDeductable: added[0].Deductible,
        }
      ).then(() => {
        console.log("insert InsuranceProviders successful");
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

