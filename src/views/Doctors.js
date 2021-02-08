import React, {useState} from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Doctors.css";
import "@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css";
import DoctorsTable from "../Components/DoctorsTable";


class Doctors extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }
  
  
	render() {
	  return (
		<div className="DoctorsPage">
		  <header>
			<p>Doctor's Data Uploader</p>
		  </header>
		  <div>
			{/* <Form className="FormDoctors">
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

			  <Form.Group className="GroupDoctor" controlId="DoctorSex">
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
				<DoctorsTable />
		</div>
	  );
	}
}

export default Doctors;
