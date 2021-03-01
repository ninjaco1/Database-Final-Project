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
        //Axios.get("http://localhost:3001/api/doctor/get").then(
            (response) => {
            // console.log(response.data);
            // for (let i = 0; i < length; i++) {
            //   response.data[i].id = 1;
            // 
        
            setTestjson(response.data);
        });
    }, []);

    const commitChanges = ({ added, changed, deleted }) => {
        // insert into the back end
        
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
                window.location.reload();
            });
        }
        if (changed) {
            console.log(changed); // print out the index and the object, only gives you the things that are changed
            console.log(Object.keys(changed)[0]); // index
            // console.log(changed[Object.keys(changed)[0]].Street_Address);
            let index = Object.keys(changed)[0]; // index that has the change

            // if(changed[0].)
            // let name = testjson[index].Employee_ID;
            if (changed[Object.keys(changed)[0]]) {
                let First_Name,
                    Last_Name,
                    DOB,
                    Sex,
                    Phone_Number,
                    Number_of_Patients,
                    Hospital_Name;
                if (changed[Object.keys(changed)[0]].First_name) {
                    First_Name = changed[Object.keys(changed)[0]].First_Name;
                } else {
                    First_Name = testjson[index].First_Name;
                }
                if (changed[Object.keys(changed)[0]].Last_Name) {
                    Last_Name = changed[Object.keys(changed)[0]].Last_Name;
                } else {
                    Last_Name = testjson[index].Last_Name;
                }

                if (changed[Object.keys(changed)[0]].DOB) {
                    DOB = changed[Object.keys(changed)[0]].DOB;
                } else {
                    DOB = testjson[index].DOB;
                }

                if (changed[Object.keys(changed)[0]].Sex) {
                    Sex = changed[Object.keys(changed)[0]].Sex;
                } else {
                    Sex = testjson[index].Sex;
                }

                if (changed[Object.keys(changed)[0]].Phone_Number) {
                    Phone_Number =
                        changed[Object.keys(changed)[0]].Phone_Number;
                } else {
                    Phone_Number = testjson[index].Phone_Number;
                }

                if (changed[Object.keys(changed)[0]].Hospital_Name) {
                    Hospital_Name =
                        changed[Object.keys(changed)[0]].Hospital_Name;
                } else {
                    Hospital_Name = testjson[index].Hospital_Name;
                }

                if (changed[Object.keys(changed)[0]].Number_of_Patients) {
                    Number_of_Patients =
                        changed[Object.keys(changed)[0]].Number_of_Patients;
                } else {
                    Number_of_Patients = testjson[index].Number_of_Patients;
                }

                Axios.put("http://flip2.engr.oregonstate.edu:3001/api/doctor/update", {
                    doctorID: parseInt(testjson[index].Employee_ID),
                    fName: First_Name,
                    lName: Last_Name,
                    DOB: DOB,
                    sex: Sex,
                    phoneNumber: Phone_Number,
                    numberOfPatients: Number_of_Patients,
                    hospitalName: Hospital_Name,
                }).then(() => {
                    console.log("update successful for Doctor");
                    window.location.reload();
                });
            } else {
                // when there are no changes to the index
                console.log("no change");
            }
        }

        if (deleted) {
            //deleted[0] gives the index
            let doctorID = testjson[deleted[0]].Employee_ID;
            // Axios.delete("http://flip2.engr.oregonstate.edu:3001/api/delete/${patintID}");
            Axios.delete(
                `http://flip2.engr.oregonstate.edu:3001/api/doctor/delete/${doctorID}`
            ).then(() => {
                window.location.reload();
            });
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
