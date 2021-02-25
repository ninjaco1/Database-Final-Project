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

export default function DoctorsTable() {
    let [testjson, setTestjson] = useState([]);
    const [columns] = useState([
        { name: "First_Name", title: "First Name" },
        { name: "Last_Name", title: "Last Name" },
        { name: "DOB", title: "Date of Birth" },
        { name: "Sex", title: "Sex" },
        { name: "Phone_Number", title: "Phone Number" },
        { name: "Number_of_Patients", title: "Number of Patients" },
        { name: "Hospital_Name", title: "Hospital Name" },
        { name: "Employee_ID", title: "Employee ID (NOTHING)" },
    ]);
    // const [rows, setRows] = useState(
    //   generateRows({
    //     columnValues: { id: ({ index }) => index, ...defaultColumnValues },
    //     length: 4,
    //   })
    // );

    useEffect(() => {
        Axios.get("http://flip2.engr.oregonstate.edu:3001/api/doctor/get").then(
            (response) => {
                // console.log(response.data);
                // for (let i = 0; i < length; i++) {
                //   response.data[i].id = 1;
                // }
                setTestjson(response.data);
            }
        );
    }, []);

    const commitChanges = ({ added, changed, deleted }) => {
        // insert into the back end
        let changedRows;
        if (added) {
            Axios.post(
                "http://flip2.engr.oregonstate.edu:3001/api/doctor/insert",
                {
                    fName: added[0].First_Name,
                    lName: added[0].Last_Name,
                    DOB: added[0].DOB,
                    sex: added[0].Sex,
                    phoneNumber: added[0].Phone_Number,
                    numberOfPatients: added[0].Number_of_Patients,
                    hospitalName: added[0].Hospital_Name,
                }
            ).then(() => {
                console.log("insert doctor successful");
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
                <TableEditColumn
                    showAddCommand
                    showEditCommand
                    showDeleteCommand
                />
                <Toolbar />
                <SearchPanel />
            </Grid>
        </div>
    );
}
