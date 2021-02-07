import React, {useState} from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Doctors.css";
import { MDBDataTableV5 } from 'mdbreact';


class Doctors extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      first_name:"",
      last_name:"",
      DOB:"",
      sex:"",
      phone_number:"",
      number_of_patients: 1,
	  datatable: {
        columns: [
          {
            label: 'First Name',
            field: 'first_name',
            width: 150,
            attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'Name',
            }
		  },
          {
            label: 'Last Name',
            field: 'last_name',
            width: 150,
            attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'Name',
            }
          },
          {
            label: 'Date of Birth',
            field: 'DOB',
            width: 200,
          },
          {
            label: 'Sex (M/F)',
            field: 'sex',
            width: 200,
          },
          {
            label: 'Phone Number',
            field: 'phone_number',
            width: 200,
          },
          {
            label: 'Number of Patients',
            field: 'number_of_patients',
            width: 200,
          },
        ],
        rows: [
			{
				first_name:"Bill",
				last_name:"Jones",
				DOB:"1981/11/18",
				sex:"M",
				phone_number:"800-686-6542",
				number_of_patients: 1;
			},
			{
				first_name:"Regana",
				last_name:"Serana",
				DOB:"1999/3/15",
				sex:"F",
				phone_number:"545-981-2456",
				number_of_patients: 1;
			}
        ]
      }
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
			<Form className="FormDoctors">
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
			</Form>
			
			</div>
			 {/* table  */}
			<MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={this.state.datatable} />
		</div>
	  );
	}
}

export default Doctors;
