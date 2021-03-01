import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Pharmacies.css";
import PharmaciesTable from "../Components/PharmaciesTable";

class Pharmacies extends React.Component {
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
                <header>Pharmacy's Data Uploader</header>

                {/* table  */}
                <PharmaciesTable />
            </div>
        );
    }
}

export default Pharmacies;
