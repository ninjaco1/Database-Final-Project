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

export default function InsuranceHospitalsTable() {
    let [testjson, setTestjson] = useState([]);

    useEffect(() => {
        Axios.get(
            // "http://flip2.engr.oregonstate.edu:3001/api/insurancehospitals/get"
            "http://flip2.engr.oregonstate.edu:3001/api/insurancehospitals/get"
        ).then((response) => {
            // console.log(response.data);
            // for (let i = 0; i < length; i++) {
            //   response.data[i].id = 1;
            // }
            setTestjson(response.data);
        });
    }, []);
    const [columns] = useState([
        { name: "Provider_Name", title: "Provider's Name" },
        { name: "Hospital_Name", title: "Hospital's Name" },
    ]);

    const commitChanges = ({ added, deleted }) => {
        // insert into the back end
        if (added) {
            Axios.post(
                "http://flip2.engr.oregonstate.edu/api/insurancehospitals/insert",
                {
                    providerName: added[0].Provider_Name,
                    hospitalName: added[0].Hospital_Name,
                }
            ).then(() => {
                console.log("insert insurancehospital successful");
                window.location.reload();
            });
        }

        if (deleted) {
            // let name = testjson[deleted[0]].;
            let providerName = testjson[deleted[0]].Provider_Name;
            let hospitalName = testjson[deleted[0]].Hospital_Name;

            // Axios.delete("http://flip2.engr.oregonstate.edu:3001/api/hospital/delete/${drugName}/${pharmacyId}");
            Axios.delete(
                `http://flip2.engr.oregonstate.edu:3001/api/insurancehospitals/delete/${providerName}/${hospitalName}`
            ).then(() => {
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
                <TableEditColumn showAddCommand showDeleteCommand />
                <Toolbar />
                <SearchPanel />
            </Grid>
        </div>
    );
}
