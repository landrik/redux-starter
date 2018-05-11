import React, {PropTypes} from 'react';
import {Link, IndexLink } from 'react-router';

const Footer = () => {
  return(
    <footer className="footer  offset">
          <div className="footerholder">
              <div className="container clearfix">
                <div className="eight columns">
                  <p>© 2014 <span className="bLogo">New</span> All Rights Reserved.</p>
                </div>
                <div className="eight columns ">
                  <ul className="socialsFooter">
                    <li><Link to="/"><i className="icon-facebook"></i></Link></li>
                    <li><Link to="/"><i className="icon-twitter"></i></Link></li>
                    <li><Link to="/"><i className="icon-vimeo"></i></Link></li>
                    <li><Link to="/"><i className="icon-gplus"></i></Link></li>
                    <li><Link to="/"><i className="icon-pinterest"></i></Link></li>
                  </ul>
                </div>
              </div>
          </div>
    </footer>
  );
};

export default Footer;
