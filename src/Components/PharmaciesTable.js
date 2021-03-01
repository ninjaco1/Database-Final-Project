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
    //Axios.get("http://flip2.engr.oregonstate.edu:3001/api/pharmacies/get").then(
      Axios.get(
          "http://flip2.engr.oregonstate.edu:3001/api/pharmacies/get"
      ).then((response) => {
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
    if (added) {
      

      Axios.post(
        "http://flip2.engr.oregonstate.edu:3001/api/pharmacies/insert",
        {
          pharmacyName: added[0].Name,
          pharmacyAddress: added[0].Street_Address,
          pharmacyCity: added[0].City,
          pharmacyState: added[0].State,
          pharmacyZipcode: parseInt(added[0].Zip_Code),
        }
      ).then(() => {
        console.log("insert pharmacy successful");
        window.location.reload();
      });
    }
    if (changed) {
      console.log(changed); // print out the index and the object, only gives you the things that are changed
      console.log(Object.keys(changed)[0]); // index
      // console.log(changed[Object.keys(changed)[0]].Street_Address);
      let index = Object.keys(changed)[0]; // index that has the change

         // if(changed[0].)
         let id = testjson[index].Pharmacy_ID;
         if (changed[Object.keys(changed)[0]]) {
             let name, address, city, state, zipCode;
             if (changed[Object.keys(changed)[0]].Name) {
                 name = changed[Object.keys(changed)[0]].Name;
             }
             else {
               name = testjson[index].Name;
             }

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
                 "http://flip2.engr.oregonstate.edu:3001/api/pharmacies/update",
                 {
                     pharmacyID: parseInt(id),
                     pharmacyName: name,
                     pharmacyAddress: address,
                     pharmacyCity: city,
                     pharmacyState: state,
                     pharmacyZipcode: parseInt(zipCode),
                 }
             ).then(() => {
                 console.log("update successful for pharmacy");
                 window.location.reload();
             });
         } else {
             // when there are no changes to the index
             console.log("no change");
         }
     }

     if (deleted) {
         //deleted[0] gives the index
         let id = testjson[deleted[0]].Pharmacy_ID;
         // Axios.delete("http://flip2.engr.oregonstate.edu:3001/api/hospital/delete/${name}");
         Axios.delete(
             `http://flip2.engr.oregonstate.edu:3001/api/pharmacies/delete/${id}`
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
        <TableEditColumn showAddCommand showEditCommand showDeleteCommand />
        <Toolbar />
        <SearchPanel />
      </Grid>
    </div>
  );
}
