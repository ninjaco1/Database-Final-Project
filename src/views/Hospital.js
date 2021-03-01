import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Hospital.css";
import HospitalTable from "../Components/HospitalTable";

class Hospital extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            validate: false,
            name: "",
            streetAddress: "",
            city: "",
            state: "",
            zipCode: "",
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
            <div className="HopitalPage">
                <header>Hospital's Data Uploader</header>

                {/* table  */}
                <HospitalTable />
            </div>
        );
    }
}

export default Hospital;
