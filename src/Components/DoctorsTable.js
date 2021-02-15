import React, { useState } from "react";
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
import randomSeed from "./random";


const getRowId = (row) => row.id;

let fnames = ["Anthony","Jacob",'Bob','Bara']
let lname = ["Nguyen","Hershberger", "Myers", "Smith"];
let DOBs = ["1981/12/25","1999/6/22","2010/2/11"];
let phoneNumbers = ["xxx-xxx-xxx"];
let numberOfPatients = [0,1,2,3,4,5,6];
let HospitalName = ["SQL Injections", "Flask Exploits", "Athen's Health"];

 const defaultColumnValues = {
    first_name: fnames,
    last_name: lname,
    DOB: DOBs,
    sex: ['M', 'F'],
    phone_number: phoneNumbers,
    number_of_patients: numberOfPatients,
    HospitalName:HospitalName
};


export default function DoctorsTable() {
    
  const [columns] = useState([
    { name: "first_name", title: "First Name" },
    { name: "last_name", title: "Last Name" },
    { name: "DOB", title: "Date of Birth" },
    { name: "sex", title: "Sex" },
    { name: "phone_number", title: "Phone Number" },
    { name: "number_of_patients", title: "Number of Patients" },
    { name: "HospitalName", title: "Hospital Name" },
  ]);
  const [rows, setRows] = useState(
    generateRows({
      columnValues: { id: ({ index }) => index, ...defaultColumnValues },
      length: 4,
    })
  );

  const commitChanges = ({ added, changed, deleted }) => {
    let changedRows;
    if (added) {
      const startingAddedId =
        rows.length > 0 ? rows[rows.length - 1].id + 1 : 0;
      changedRows = [
        ...rows,
        ...added.map((row, index) => ({
          id: startingAddedId + index,
          ...row,
        })),
      ];
    }
    if (changed) {
      changedRows = rows.map((row) =>
        changed[row.id] ? { ...row, ...changed[row.id] } : row
      );
    }
    if (deleted) {
      const deletedSet = new Set(deleted);
      changedRows = rows.filter((row) => !deletedSet.has(row.id));
    }
    setRows(changedRows);
  };

  return (
    <div className="card">
      <Grid rows={rows} columns={columns} getRowId={getRowId}>
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


function generateRows({
  columnValues = defaultColumnValues,
  length,
  random = randomSeed(329972281),
}) {
  const data = [];
  const columns = Object.keys(columnValues);

  for (let i = 0; i < length; i += 1) {
    const record = {};

    columns.forEach((column) => {
      let values = columnValues[column];

      if (typeof values === "function") {
        record[column] = values({ random, index: i, record });
        return;
      }

      while (values.length === 2 && typeof values[1] === "object") {
        values = values[1][record[values[0]]];
      }

      const value = values[Math.floor(random() * values.length)];
      if (typeof value === "object") {
        record[column] = { ...value };
      } else {
        record[column] = value;
      }
    });

    data.push(record);
  }

  return data;
}