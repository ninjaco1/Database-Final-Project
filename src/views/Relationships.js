import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../RelationshipTable.css";
import DrugsPharmacyTable from "../Components/DrugsPharmacyTable";
import InsuranceHospitalsTable from "../Components/InsuranceHospitalsTable";
import PharmaciesPatientsTable from "../Components/PharmaciesPatientsTable";

class Relationships extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        validate: false,
  
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
        <div>
          <header>DrugsPharmacy's Data Uploader</header>
          <DrugsPharmacyTable />

          <header>InsuranceHospitals's Data Uploader</header>
          <InsuranceHospitalsTable />

          <header>PharmaciesPatients's Data Uploader</header>
          <PharmaciesPatientsTable />
        </div>
      );
    }
}
  
  export default Relationships;