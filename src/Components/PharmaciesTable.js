import React, { useState } from "react";
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
import randomSeed from "./random";

const getRowId = (row) => row.id;

let hospitalNames = ["sql injectors", "flask exploit", "phpmyadmin nerds"];
let streetAddress = ["342 SE Cari St.", "457 NW Nooj Ave.", "3243 W Waat St."];
let cities = ["corvegas", "corvallis", "beton", "portland"];
let states = ["oregon", "washington", "ohio", "california"];
let zipCodes = ["97034", "23646", "36237", "79673", "48734"];

const defaultColumnValues = {
  hospital_name: hospitalNames,
  street_address: streetAddress,
  city: cities,
  state: states,
  zip_code: zipCodes,
};

export default function PharmaciesTable() {
  const [columns] = useState([
    { name: "hospital_name", title: "Hospital Name" },
    { name: "street_address", title: "Street Address" },
    { name: "city", title: "City" },
    { name: "state", title: "State" },
    { name: "zip_code", title: "Zip Code" },
  ]);
  const [rows, setRows] = useState(
    generateRows({
      columnValues: { id: ({ index }) => index, ...defaultColumnValues },
      length: 8,
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
