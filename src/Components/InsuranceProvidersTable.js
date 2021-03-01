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

export default function InsuranceProvidersTable() {
  let [testjson, setTestjson] = useState([]);

  useEffect(() => {
    //Axios.get("http://flip2.engr.oregonstate.edu:3001/api/insurance/get").then(
      Axios.get(
          "http://flip2.engr.oregonstate.edu:3001/api/insurance/get"
      ).then((response) => {
          // console.log(response.data);
          // for (let i = 0; i < length; i++) {
          //   response.data[i].id = 1;
          // }
          setTestjson(response.data);
      });
  }, []);

    
  const [columns] = useState([
    { name: "Provider_Name", title: "Provider Name" },
    { name: "Deductible", title: "Deductible" },
  ]);

  const commitChanges = ({ added, changed, deleted }) => {
    // insert into the back end
 
    if (added) {
      Axios.post(
        "http://flip2.engr.oregonstate.edu:3001/api/insurance/insert",
        {
          providerName: added[0].Provider_Name,
          providerDeductable: added[0].Deductible,
        }
      ).then(() => {
        console.log("insert InsuranceProviders successful");
        window.location.reload();
      });
    }
    if (changed) {
      console.log(changed); // print out the index and the object, only gives you the things that are changed
      console.log(Object.keys(changed)[0]); // index
      // console.log(changed[Object.keys(changed)[0]].Street_Address);
      let index = Object.keys(changed)[0]; // index that has the change

      // if(changed[0].)
      let name = testjson[index].Provider_Name;
      if (changed[Object.keys(changed)[0]]) {
          let deductible;
          if (changed[Object.keys(changed)[0]].Deductible) {
              deductible = changed[Object.keys(changed)[0]].Deductible;
          }
          else {
            deductible = testjson[index].Deductible;
          }
          

          Axios.put(
              "http://flip2.engr.oregonstate.edu:3001/api/insurance/update",
              {
                  providerName: name,
                  providerDeductable: parseInt(deductible),
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
      let name = testjson[deleted[0]].Provider_Name;
      // Axios.delete("http://flip2.engr.oregonstate.edu:3001/api/hospital/delete/${name}");
      Axios.delete(
          `http://flip2.engr.oregonstate.edu:3001/api/insurance/delete/${name}`
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

