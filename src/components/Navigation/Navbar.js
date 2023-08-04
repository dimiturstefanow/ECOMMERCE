import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import "./Navbar.css";
import logo from "../../Images/c4_nexus_logo-removebg-preview.png";

function NavbarComponent() {
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
            <Nav.Link className="navigation-link">
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link className="navigation-link"><Link to="/About">About</Link></Nav.Link>
            <Nav.Link className="navigation-link"><Link to="/Contact">Contacts</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
