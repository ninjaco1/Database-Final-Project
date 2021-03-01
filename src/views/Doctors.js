import React from "react";
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
			
			
			</div>
				{/* table  */}
				<DoctorsTable />
		</div>
	  );
	}
}

export default Doctors;
