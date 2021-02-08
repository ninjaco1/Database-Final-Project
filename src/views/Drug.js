import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Drug.css";
import "@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css";
import DrugsTable from "../Components/DrugTable";

class Drugs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  //       name:"",
  // 	  datatable: {
  //         columns: [
  //           {
  //             label: 'First Name',
  //             field: 'first_name',
  //             width: 150,
  //             attributes: {
  //             'aria-controls': 'DataTable',
  //             'aria-label': 'Name',
  //             }
  // 		  }
  //         ],
  //         rows: [
  // 			{
  // 				name:"Morphine",
  // 			},
  // 			{
  // 				name:"Ibuprofen",
  // 			}
  //         ]
  //       }
  //     };
  //     this.handleChange = this.handleChange.bind(this);
  //   }
  //   handleChange(event) {
  //     const { name, value } = event.target;
  //     this.setState({
  //       [name]: value,
  //     });
  //   }

  render() {
    return (
      <div className="DrugsPage">
        <header>
          <p>Drug's Data Uploader</p>
        </header>
        <div>
          {/* <Form className="FormDrugs">
            <Form.Group className="GroupDoctor" controlId="DoctorFirst_Name">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                className="internalText"
                placeholder="First Name"
              />
              <Form.Text className="text-muted">Variable Characters</Form.Text>
            </Form.Group>

            <Form.Group className="GroupDoctor" controlId="DoctorLast_Name">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                className="internalText"
                placeholder="Last Name"
              />
              <Form.Text className="text-muted">Variable Characters</Form.Text>
            </Form.Group>

            <Form.Group className="GroupDoctor" controlId="DoctorDOB">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="text"
                className="internalText"
                placeholder="DOB"
              />
              <Form.Text className="text-muted">YYYY-MM-DD</Form.Text>
            </Form.Group>

            <Form.Group className="GroupDoctor" controlId="Drugsex">
              <Form.Label>Sex</Form.Label>
              <Form.Control
                type="text"
                className="internalText"
                placeholder="Sex"
              />
              <Form.Text className="text-muted">M or F Variable Char</Form.Text>
            </Form.Group>

            <Form.Group className="GroupDoctor" controlId="DoctorPhone_Number">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                className="internalText"
                placeholder="Phone Number"
              />
              <Form.Text className="text-muted">
                Phone Number for Doctor
              </Form.Text>
            </Form.Group>

            <Form.Group
              className="GroupDoctor"
              controlId="DoctorNumber_Of_Patients"
            >
              <Form.Label>Number of Patients</Form.Label>
              <Form.Control
                type="text"
                className="internalText"
                placeholder="Number Of Patients"
              />
              <Form.Text className="text-muted">Positive Integer</Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form> */}
        </div>
        {/* table  */}
        {/* <MDBDataTableV5
          hover
          entriesOptions={[5, 20, 25]}
          entries={5}
          pagesAmount={4}
          data={this.state.datatable} 
        />*/}
		<DrugsTable />
      </div>
    );
  }
}

export default Drugs;
