import React from "react";
import { Button, Col, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../InsuranceProviders.css"
import { MDBDataTableV5 } from 'mdbreact';

class InsuranceProviders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      provider_name: "",
      preExistingConditions: "",
      deductable: 0
	  datatable: {
        columns: [
          {
            label: 'Name',
            field: 'provider_name',
            width: 150,
            attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'Name',
            }
          },
          {
            label: 'Pre-existing Conditions',
            field: 'preExistingConditions',
            width: 270,
          },
          {
            label: 'Deductible',
            field: 'deductable',
            width: 200,
          },
        ],
        rows: [
          
          {
            name: 'State Cities',
			preExistingConditions: 'No',
			deductable: 100.50;
            
          },
          {
            name: 'All Father',
			preExistingConditions: 'Yes',
			deductable: 300;
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
      <div>
        <header>
              Insurance Provider's Data Upload
        </header>
        <Form.Group controlId="name" className="groupForms">
          <Form.Row>
            <Col>
              <Form.Label className="labelForms" column="sm">
                Provider Name
              </Form.Label>
            </Col>
            <Col>
              <Form.Control
                required
                size="sm"
                type="text"
                placeholder="Provider Name"
                className="controlForms"
                name="provider_name"
                onChange={this.handleChange}
                // value={this.state.first_name}
              />
            </Col>
          </Form.Row>
        </Form.Group>

        <Form.Group controlId="name" className="groupForms">
          <Form.Row>
            <Col>
              <Form.Label className="labelForms" column="sm">
                Pre-existing Conditions
              </Form.Label>
            </Col>
            <Col>
              <Form.Control
                required
                size="sm"
                type="text"
                placeholder="Pre-existing Conditions"
                className="controlForms"
                name="preExistingConditions"
                onChange={this.handleChange}
                // value={this.state.first_name}
              />
            </Col>
          </Form.Row>
        </Form.Group>

        <Form.Group controlId="name" className="groupForms">
          <Form.Row>
            <Col>
              <Form.Label className="labelForms" column="sm">
                Deductible
              </Form.Label>
            </Col>
            <Col>
              <Form.Control
                required
                size="sm"
                type="text"
                placeholder="Deductible"
                className="controlForms"
                name="Deductible"
                onChange={this.handleChange}
                // value={this.state.first_name}
              />
            </Col>
          </Form.Row>
        </Form.Group>

        <Button variant="outline-danger" type="submit">
          Submit
        </Button>
		 {/* table  */}
        <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={this.state.datatable} />
      </div>
    );
  }
}

export default InsuranceProviders;
