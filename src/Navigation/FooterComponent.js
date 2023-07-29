import React from "react";
import "./FooterComponent.css";

function FooterComponent() {
  return (
    <div className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            {/* column 1 */}
            <div className="col-md-3 col-sm-6">
              <h2>Locations</h2>
              <ul className="list-unstyled">
                <li>Sofia, Studentski Grad</li>
                <li>Sofia, Mladost</li>
              </ul>
            </div>
            {/* column 2 */}
            <div className="col-md-3 col-sm-6">
              <h2>Contacts</h2>
              <ul className="list-unstyled">
                <li>+359 88420 6969</li>
                <li>c4@nexus.com</li>
              </ul>
            </div>
            {/* column 3 */}
            <div className="col-md-3 col-sm-6">
              <h2>Official Distributor</h2>
              <ul className="list-unstyled">
                <li>Adidas</li>
                <li>Nike</li>
              </ul>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} C4 NEXUS - All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterComponent;
