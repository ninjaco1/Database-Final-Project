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

export default function DrugsPharmacyTable() {
    let [testjson, setTestjson] = useState([]);

    useEffect(() => {
        Axios.get(
            //"http://localhost:3001/api/drugspharmacy/get"
            "http://flip2.engr.oregonstate.edu:3001/api/drugspharmacy/get"
        ).then((response) => {
            setTestjson(response.data);
        });
    }, []);

    const [columns] = useState([
        { name: "Drug_Name", title: "Drug's Name" },
        { name: "Pharmacy_ID", title: "Pharmacies ID" },
    ]);

    const commitChanges = ({ added, deleted }) => {
        // insert into the back end

        if (added) {
            Axios.post(
                "http://flip2.engr.oregonstate.edu:3001/api/drugspharmacy/insert",
                {
                    drugName: added[0].Drug_Name,
                    pharmacyId: added[0].Pharmacy_ID,
                }
            ).then(() => {
                console.log("insert drugspharmacy successful");
                window.location.reload();
            });
        }

        if (deleted) {
            // let name = testjson[deleted[0]].;
            let drugName = testjson[deleted[0]].Drug_Name;
            let pharmacyId = testjson[deleted[0]].Pharmacy_ID;

             Axios.delete(`http://flip2.engr.oregonstate.edu:3001/api/drugspharmacy/delete/${drugName}/${pharmacyId}`)
            //Axios.delete(`http://localhost:3001/api/drugspharmacy/delete/${drugName}/${pharmacyId}`)
            .then(
                () => {
                    window.location.reload();
                }
            );
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
