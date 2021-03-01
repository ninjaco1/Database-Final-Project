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

export default function HospitalTable() {
    let [testjson, setTestjson] = useState([]);

    useEffect(() => {
         Axios.get("http://flip2.engr.oregonstate.edu:3001/api/hospital/get").then(
        //Axios.get("http://localhost:3001/api/hospital/get").then(
            (response) => {
         
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
        
        if (added) {
             Axios.post("http://flip2.engr.oregonstate.edu:3001/api/hospital/insert", {
            //Axios.post("http://localhost:3001/api/hospital/post", {
                hospitalName: added[0].Hospital_Name,
                hospitalAddress: added[0].Street_Address,
                hospitalCity: added[0].City,
                hospitalState: added[0].State,
                hospitalZipcode: parseInt(added[0].Zip_Code),
            }).then(() => {
                console.log("insert hospital successful");
                window.location.reload();
            });
        }

        if (changed) {
            console.log(changed); // print out the index and the object, only gives you the things that are changed
            console.log(Object.keys(changed)[0]); // index
            // console.log(changed[Object.keys(changed)[0]].Street_Address);
            let index = Object.keys(changed)[0]; // index that has the change

            // if(changed[0].)
            let name = testjson[index].Hospital_Name;
            if (changed[Object.keys(changed)[0]]) {
                let address, city, state, zipCode;
                if (changed[Object.keys(changed)[0]].Street_Address) {
                    address = changed[Object.keys(changed)[0]].Street_Address;
                }
                else {
                  address = testjson[index].Street_Address;
                }

                if (changed[Object.keys(changed)[0]].City) {
                    city = changed[Object.keys(changed)[0]].City;
                }
                else {
                  city = testjson[index].City;
                }

                if (changed[Object.keys(changed)[0]].State) {
                    state = changed[Object.keys(changed)[0]].State;
                } else {
                    state = testjson[index].State;
                }

                if (changed[Object.keys(changed)[0]].Zip_Code) {
                    zipCode = changed[Object.keys(changed)[0]].Zip_Code;
                } else {
                    zipCode = testjson[index].Zip_Code;
                }

                Axios.put(
                    "http://flip2.engr.oregonstate.edu:3001/api/hospital/update",
                    {
                        hospitalName: name,
                        hospitalAddress: address,
                        hospitalCity: city,
                        hospitalState: state,
                        hospitalZipcode: parseInt(zipCode),
                    }
                ).then(() => {
                    console.log("update successful for hospital");
                    window.location.reload();
                });
            } else {
                // when there are no changes to the index
                console.log("no change");
            }
        }

        if (deleted) {
            //deleted[0] gives the index
            let name = testjson[deleted[0]].Hospital_Name;
             Axios.delete(`http://flip2.engr.oregonstate.edu:3001/api/hospital/delete/${name}`)
            //Axios.delete(`http://localhost:3001/api/hospital/delete/${name}`)
            .then(()=> {
                window.location.reload();
            });
        }
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
