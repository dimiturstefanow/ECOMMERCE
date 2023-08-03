import React from "react";
import logo from "../Images/c4_nexus_logo-removebg-preview.png";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import "./Navbar.css";

function NavbarComponent() {
  return (
    <>
      <Navbar className="navbar" sticky="top" expand="sm" collapseOnSelect>
        <Navbar.Brand>
          <img src={logo} alt="" className="logo-img" />
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse className="right-aligned">
          <Nav>
            <NavDropdown title="Products" className="navigation-link">
              <NavDropdown.Item href="#products/Promotions">
                Promotions
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#products/pants">Nike</NavDropdown.Item>
              <NavDropdown.Item href="#products/shirts">
                Adidas
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#about" className="navigation-link">
              About
            </Nav.Link>
            <Nav.Link href="#contact-us" className="navigation-link">
              Contact Us
            </Nav.Link>
            <Nav.Link href="#favourites" className="navigation-link">
              Favourites
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="content"></div>
    </>
  );
}

export default NavbarComponent;