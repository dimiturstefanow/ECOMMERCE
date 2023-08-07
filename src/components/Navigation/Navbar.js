import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import "./Navbar.css";
import logo from "../../Images/c4_nexus_logo-removebg-preview.png";

function NavbarComponent({ favorites }) {
  const handleLogoClick = () => {
    window.location.reload();
  };

  return (
    <>
      <Navbar className="navbar" sticky="top" expand="sm" collapseOnSelect>
        <Navbar.Brand style={{ cursor: "pointer" }} onClick={handleLogoClick}>
          <img src={logo} alt="" className="logo-img" />
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse className="right-aligned">
          <Nav>
            <Nav.Link
              onClick={handleLogoClick}
              href="#about"
              className="navigation-link"
            >
              Home
            </Nav.Link>
             
            <Nav.Link href="#favorites" className="navigation-link wrapper-fav-button">
              Favorites{" "}
              <span className="favorites-button">{favorites.length}</span>
            </Nav.Link>
             
            <Nav.Link href="#contact-us" className="navigation-link">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="content"></div>
    </>
  );
}

export default NavbarComponent;
