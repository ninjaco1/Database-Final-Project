import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Drug.css";
import "@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css";
import DrugsTable from "../Components/DrugTable";

class Drugs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="DrugsPage">
                <header>
                    <p>Drug's Data Uploader</p>
                </header>
                <div></div>
                {/* table  */}

                <DrugsTable />
            </div>
        );
    }
}

export default Drugs;
