import React from "react";
import logo from "../images/c4 nexus logo.png";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import "./Nav.css";

function NavbarComponent() {
  return (
    <>
      <Navbar bg="white" sticky="top" expand="sm" collapseOnSelect>
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
              <NavDropdown.Item href="#products/pants">Pants</NavDropdown.Item>
              <NavDropdown.Item href="#products/shirts">
                Shirts
              </NavDropdown.Item>
              <NavDropdown.Item href="#products/shoes">Shoes</NavDropdown.Item>
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
