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
import randomSeed from "./random";

const getRowId = (row) => row.id;



// let testjson = [
//   {
//     id: 0,
//     hospitalName: "sql injectors",
//     hospitalAddress: "457 NW Nooj Ave.",
//     hospitalCity: "corvallis",
//     hospitalState: "WA",
//     hospitalZipcode: "97034",
//   },
//   {
//     id: 1,
//     hospitalName: "phpmyadmin",
//     hospitalAddress: "342 SE Cari St.",
//     hospitalCity: "corvegas",
//     hospitalState: "CA",
//     hospitalZipcode: "79673",
//   },
//   {
//     id: 2,
//     hospitalName: "Health Up",
//     hospitalAddress: "Wackmole Lane",
//     hospitalCity: "Shankinton",
//     hospitalState: "RE",
//     hospitalZipcode: "46680",
//   },
// ];

export default function HospitalTable() {
  let [testjson, setTestjson] = useState([]);
  let [length, setLength] = useState(0);
  let [hospitalName,setHospitalName] = useState("");
  let [hospitalAddress, setHospitalAddress] = useState("");
  let [hospitalCity, setHospitalCity] = useState("");
  let [hospitalState, setHospitalState] = useState("");
  let [hospitalZipcode, setHospitalZipcode] = useState(0);

  //let testjson;

  useEffect(() => {
    Axios.get("http://localhost:3001/hospital/get").then((response) => {
      // testjson = response;
      console.log(response.data);
      // testjson = response.data;
      
      setLength(response.data.length);
      // for (let i = 0; i < length; i++) {
      //   response.data[i].id = 1;
      // }
      setTestjson(response.data);

    });
  }, []);

  
  // for (let i = 0; i < length; i++) {
  //   testjson[i].id = i;
  // }

  console.log(testjson);
  console.log(length);

  const [columns] = useState([
    { name: "Hospital_Name", title: "Hospital Name" },
    { name: "Street_Address", title: "Street Address" },
    { name: "City", title: "City" },
    { name: "State", title: "State" },
    { name: "Zip_Code", title: "Zip Code" },
  ]);


  const [rows,setRows] = useState(
    {
      columnValues: { id: ({ index }) => index, ...testjson },
      length: length
    }
  );
  let [data, setData] = useState(
            {
              hospitalName: undefined,
              hospitalAddress: undefined,
              hospitalCity: undefined,
              hospitalState: undefined,
              hospitalZipcode: undefined

            }
  );
  const commitChanges = ({ added, changed, deleted }) => {
    // insert into the back end
    let changedRows;
    if (added) {
      // const startingAddedId =
        // changedRows = [
        //   ...testjson,
        //   ...added.map((row, index) => ({
        //     ...row,
        //   })),
        // ];
        console.log(added)
        
        // setLength(length+1);
        // console.log("hospital name: " + changedRows[length].Hospital_Name);
       
        // setHospitalName(changedRows[length-1].Hospital_Name);
        // setHospitalAddress(changedRows[length-1].Street_Address);
        // setHospitalCity(changedRows[length-1].City);
        // setHospitalState(changedRows[length-1].State);
        // setHospitalZipcode(parseInt(changedRows[length-1].Zip_Code));
        setData({
          hospitalName: added.Hospital_Name, //hospitalName,
          hospitalAddress: added.Street_Address, //hospitalAddress,
          hospitalCity: added.City, //hospitalCity,
          hospitalState: added.State, //hospitalState,
          hospitalZipcode: added.Zip_Code, //hospitalZipcode,
        });
        console.log(data)
      Axios.post("http://localhost:3001/hospital/insert", data).then(() => {
        console.log("insert hospital successful");
      });



      
    }
    if (changed) {
      // changedRows = testjson.map((row) =>
      //   changed[row.id] ? { ...row, ...changed[row.id] } : row
      // );
    }
    if (deleted) {
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

