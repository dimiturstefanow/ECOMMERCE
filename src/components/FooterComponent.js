import React from "react";

function FooterComponent() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* column 1 */}
          <div className="col-md-3 col-sm-6">
          <h4>TEST1 TEST2</h4>
          <ul className="list-unstyled">
            <li>TEST1 TEST2</li>
            <li>TEST1 TEST2</li>
            <li>TEST1 TEST2</li>
            <li>TEST1 TEST2</li>
          </ul>
          </div>
          {/* column 2 */}
          <div className="col-md-3 col-sm-6">
          <h4>TEST1 TEST2</h4>
          <ul className="list-unstyled">
            <li>TEST1 TEST2</li>
            <li>TEST1 TEST2</li>
            <li>TEST1 TEST2</li>
            <li>TEST1 TEST2</li>
          </ul>
          </div>
          {/* column 3 */}
          <div className="col-md-3 col-sm-6">
          <h4>TEST1 TEST2</h4>
          <ul className="list-unstyled">
            <li>TEST1 TEST2</li>
            <li>TEST1 TEST2</li>
            <li>TEST1 TEST2</li>
            <li>TEST1 TEST2</li>
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
  );
}

export default FooterComponent;
