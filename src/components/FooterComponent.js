import React from "react";
import styled from "styled-components";

function FooterComponent() {
  return (
    <FooterContainer className="main-footer">
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
              <h2>TEST1 TEST2</h2>
              <ul className="list-unstyled">
                <li><a href="/">TEST1 TEST2</a></li>
                <li><a href="/">TEST1 TEST2</a></li>
               
              </ul>
            </div>
            {/* column 3 */}
            <div className="col-md-3 col-sm-6">
              <h2>TEST1 TEST2</h2>
              <ul className="list-unstyled">
                <li><a href="/">TEST1 TEST2</a></li>
                <li><a href="/">TEST1 TEST2</a></li>
               
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
    </FooterContainer>
  );
}

export default FooterComponent;

const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
  }
  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }
  ul li a {
    color: var(--mainGrey);
  }

  ul li a:hover {
    color: var(--mainLightGrey)
  }
  }
`;
