import React, {PropTypes} from 'react';
import {Link, IndexLink } from 'react-router';

const Header = () => {
  return(
    <header id="header">
        <div className="mainHeader">
        <div className="container clearfix">
          <nav id="mainNav">
            <Link to="/" className="mobileBtn" activeClassName="active"><i className="icon-menu"></i></Link>
            <ul>
              <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
              {"|"}
              <li><Link to="/about" activeClassName="active">About</Link></li>
                {"|"}
              <li><Link to="/courses" activeClassName="active">courses</Link></li>
            </ul>
          </nav>
        </div>
        </div>
      </header>
  );
};

export default Header;
