import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../InsuranceProviders.css"
import "@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css";
import InsuranceProvidersTable from "../Components/InsuranceProvidersTable";

class InsuranceProviders extends React.Component {
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
      <div>
        <header>
              Insurance Provider's Data Upload
        </header>
       
		 {/* table  */}
      <InsuranceProvidersTable />
            </div>
    );
  }
}

export default InsuranceProviders;
