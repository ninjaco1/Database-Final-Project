import React, {useState} from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Patients.css"
import { MDBDataTableV5 } from 'mdbreact';

class Patients extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      first_name:"",
      last_name:"",
      DOB:"",
      weight: 0,
      height:"",
      sex:"",
      phone_number:"",
      blood_type:"",
      medication_allergies: 0,
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
            label: 'Weight (lbs)',
            field: 'weight',
            width: 200,
          },
          {
            label: 'Height (#\' #")',
            field: 'height',
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
            label: 'Blood Type',
            field: 'blood_type',
            width: 200,
          },
          {
            label: 'Medication Allergies',
            field: 'medication_allergies',
            width: 200,
          },
        ],
        rows: [
			{
				first_name:"Steve",
				last_name:"Block",
				DOB:"2011/11/18",
				weight: 200,
				height:"6' 6\"",
				sex:"M",
				phone_number:"800-686-2456",
				blood_type:"O-",
				medication_allergies: 0;
			},
			{
				first_name:"Samantha",
				last_name:"Smith",
				DOB:"1999/3/15",
				weight: 158,
				height:"6'",
				sex:"F",
				phone_number:"545-981-3546",
				blood_type:"AB+",
				medication_allergies: 1;
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
    <div class = "PatientsPage">
        <header>
            <p>Patient's Data Uploader</p>
        </header>
            <div>
            <Form className = "FormPatients">
                <Form.Group className = "GroupPatient" controlId="PatientsFirst_Name">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control 
                    type="text" 
                    className ="internalText" 
                    placeholder="First_Name" 
                    />
                    <Form.Text className="text-muted">Variable Characters</Form.Text>
                </Form.Group>

                <Form.Group className = "GroupPatient" controlId="PatientsLast_Name">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control 
                    type="text" 
                    className ="internalText" 
                    placeholder="Last_Name" 
                    />
                    <Form.Text className="text-muted">Variable Characters</Form.Text>
                </Form.Group>

                <Form.Group className = "GroupPatient" controlId="PatientsDOB">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control 
                    type="text" 
                    className ="internalText" 
                    placeholder="DOB" 
                    />
                    <Form.Text className="text-muted">YYYY-MM-DD</Form.Text>
                </Form.Group>

                <Form.Group className = "GroupPatient" controlId="PatientsWeight">
                    <Form.Label>Weight</Form.Label>
                    <Form.Control 
                    type="text" 
                    className ="internalText" 
                    placeholder="Weight" 
                    />
                    <Form.Text className="text-muted">Integer</Form.Text>
                </Form.Group>

                <Form.Group className = "GroupPatient" controlId="PatientsHeight">
                    <Form.Label>Height</Form.Label>
                    <Form.Control 
                    type="text" 
                    className ="internalText" 
                    placeholder="Height" 
                    />
                    <Form.Text className="text-muted">Variable Characters</Form.Text>
                </Form.Group>

                <Form.Group className = "GroupPatient" controlId="PatientsSex">
                    <Form.Label>Sex</Form.Label>
                    <Form.Control 
                    type="text" 
                    className ="internalText" 
                    placeholder="Sex" 
                    />
                    <Form.Text className="text-muted">M or F Variable Char</Form.Text>
                </Form.Group>

                <Form.Group className = "GroupPatient" controlId="PatientsPhone_Number">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control 
                    type="text" 
                    className ="internalText" 
                    placeholder="Phone_Number" 
                    />
                    <Form.Text className="text-muted">Phone Number for Patients</Form.Text>
                </Form.Group>

                <Form.Group className = "GroupPatient" controlId="PatientsBlood_Type">
                    <Form.Label>Blood Type</Form.Label>
                    <Form.Control 
                    type="text" 
                    className ="internalText" 
                    placeholder="Blood_Type" 
                    />
                    <Form.Text className="text-muted">A, AB, B, O AND +/-</Form.Text>
                </Form.Group>
				
				<Form.Group className = "GroupPatient" controlId="PatientsMedication_allergies">
                    <Form.Label>Medication Allergies</Form.Label>
                    <Form.Control 
                    type="text" 
                    className ="internalText" 
                    placeholder="Medication_allergies" 
                    />
                    <Form.Text className="text-muted">1(True) or 0(False)</Form.Text>
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

export default Patients;
