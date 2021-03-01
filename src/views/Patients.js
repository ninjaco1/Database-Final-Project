import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Patients.css";
import "@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css";
import PatientsTable from "../Components/PatientsTable";

class Patients extends React.Component {
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
      <div className="PatientsPage">
        <header>
          <p>Patient's Data Uploader</p>
        </header>
        
        {/* table  */}
        <PatientsTable />
        
      </div>
    );
  }
}

export default Patients;
