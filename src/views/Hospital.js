import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Hospital.css"
import { MDBDataTableV5 } from 'mdbreact';




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
      datatable: {
        columns: [
          {
            label: 'Name',
            field: 'name',
            width: 150,
            attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'Name',
            }
          },
          {
            label: 'Street',
            field: 'street',
            width: 270,
          },
          {
            label: 'City',
            field: 'city',
            width: 200,
          },
          {
            label: 'State',
            field: 'state',
            width: 200,
          },
          {
            label: 'Zip Code',
            field: 'zipCode',
            width: 200,
          },
        ],
        rows: [
          
          {
            name: 'SQL injectors',
            street: '1234 Way St.',
            city: 'Edinburgh',
            state: 'VA',
            zipCode: '23523',
            
          },
          {
            name: 'Flask Exploit',
            street: '0101 Jinja Ave.',
            city: 'Moonie',
            state: 'WA',
            zipCode: '87609',
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
      <div className="HopitalPage">
          <header>
              Hospital's Data Uploader
          </header>
        {/* Name, Street, city, state, zip code */}
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
                placeholder="Hospital Name"
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

       
      {/* table  */}
        <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={this.state.datatable} />
      </div>
    );
  }
}

export default Hospital;
