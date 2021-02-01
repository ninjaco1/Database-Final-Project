import React from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Patients.css"

function Patients() {
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

                <Form.Group className = "GroupPatient" controlId="PatientsNumber_Of_Patients">
                    <Form.Label>Number of Patients</Form.Label>
                    <Form.Control 
                    type="text" 
                    className ="internalText" 
                    placeholder="Number_Of_Patients" 
                    />
                    <Form.Text className="text-muted">Positive Integer</Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit">
                Submit
                </Button>
            </Form>
            </div>
    </div>
  );
}

export default Patients;
