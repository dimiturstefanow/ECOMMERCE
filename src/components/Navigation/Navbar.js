import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import "./Navbar.css";
import logo from "../../Images/c4_nexus_logo-removebg-preview.png";
import data from "../../db/data";

function NavbarComponent({ favorites }) {
  const [showFav, setFav] = useState(false);
  const favProducts = data.filter((product) => favorites.includes(product.id));
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

            <Nav.Link
              href="#favorites"
              className="navigation-link wrapper-fav-button"
              onMouseOver={() => setFav(!showFav)}
              onMouseLeave={() => setFav(!showFav)}
            >
              Favorites{" "}
              <span className="favorites-button">{favorites.length}</span>
              <div className="fav-dropdown">
                <div style={{display: showFav ? "block" : "none"}} className="fav-dropdown-content">
                  {favProducts.map((product) => 
                  <div key={product.id}>
                      <div style={{display: "flex"}}>
                        <img src={product.img} />
                        <p>{product.title}</p>
                      </div>
                      <div style={{display: "flex", flexDirection: "column"}}>
                        <p style={{marginLeft: "auto"}}>{product.price}</p>
                      </div>
                  </div>)}
                </div>
              </div>
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
