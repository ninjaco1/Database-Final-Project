import React from "react";
import { Button, Col, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../InsuranceProviders.css"

class InsuranceProviders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      provider_name: "",
      preExistingConditions: "",
      deductable: 0
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
      </div>
    );
  }
}

export default InsuranceProviders;
