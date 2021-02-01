import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap"; // Navbar material
import "bootstrap/dist/css/bootstrap.min.css";
import "../Header.css";

function Header() {
  return (
    <div>
      {/* Navbar  */}
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Hospital for SQL Injectors</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Data Uploaders" id="collapsable-nav-dropdown">
            <NavDropdown.Item href="/my-app/hospitals">Hospitals</NavDropdown.Item>
              <NavDropdown.Item href="/my-app/doctors">Doctors</NavDropdown.Item>
              <NavDropdown.Item href="/my-app/patients">Patients</NavDropdown.Item>
              <NavDropdown.Item href="/my-app/insurance">Insurance Providers</NavDropdown.Item>
              <NavDropdown.Item href="/my-app/pharmacies">Pharmacies</NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link href="/pricing">Pricing</Nav.Link> */}
          </Nav>
          <Nav>
            {/* <Nav.Link href="/enterprise">For Enterprise</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
