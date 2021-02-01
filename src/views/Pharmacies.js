import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Pharmacies.css"

class Pharmacies extends React.Component {
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
      <div>
        {/* Name, Street, city, state, zip code */}
        <header>
            Pharmacy's Data Uploader
        </header>
        <Form.Group controlId="name" className="groupForms">
          <Form.Row>
            <Col>
              <Form.Label className="labelForms" column="sm">
                Name
              </Form.Label>
            </Col>
            <Col>
              <Form.Control
                required
                size="sm"
                type="text"
                placeholder="Pharmacies Name"
                className="controlForms"
                name="name"
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
                Address
              </Form.Label>
            </Col>
            <Col>
              <Form.Control
                required
                size="sm"
                type="text"
                placeholder="Street Address"
                className="controlForms"
                name="streetAddress"
                onChange={this.handleChange}
                // value={this.state.first_name}
              />
            </Col>
            <Col>
              <Form.Control
                required
                size="sm"
                type="text"
                placeholder="City"
                className="controlForms"
                name="city"
                onChange={this.handleChange}
                //value={this.state.last_name}
              />
            </Col>
            <Col>
              <Form.Control
                required
                size="sm"
                type="text"
                placeholder="State"
                className="controlForms"
                name="state"
                onChange={this.handleChange}
                //value={this.state.last_name}
              />
            </Col>
            <Col>
              <Form.Control
                required
                size="sm"
                type="text"
                placeholder="Zip Code"
                className="controlForms"
                name="zipCode"
                onChange={this.handleChange}
                //value={this.state.last_name}
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

export default Pharmacies;