import React from "react";
import logo from "../images/c4 nexus logo.png";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, NavDropdown, Navbar } from "react-bootstrap";

function NavbarComponent() {
  return (
    <>
      <Navbar bg="white" sticky="top" expand="sm" collapseOnSelect>
        <Navbar.Brand>
          <img src={logo} />{" "}
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <NavDropdown title="Products">
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
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact-us">Contact Us</Nav.Link>
            <Nav.Link href="#favourites">Favourites</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="content"></div>
    </>
  );
}

export default NavbarComponent;
