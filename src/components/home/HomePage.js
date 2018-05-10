import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{
  render(){
    return(
      <section id="home" className="offset section">
        <div className="lightGrey">
          <div className="container clearfix">
            <div className="intro">
              <h1 className="titleBig">HomePage</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                   magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                   Ut enim ad minim veniam, quis nostrud exercitation .</p>
            </div>
            <div className="sixteen columns">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lectus sem, finibus sit amet suscipit in, cursus id erat. Sed feugiat rutrum dictum. Vestibulum dapibus sapien id elit bibendum, a euismod ipsum commodo. Integer at nisl non ligula ultrices volutpat sed vitae arcu. Proin placerat iaculis augue, interdum pharetra felis auctor sit amet. Pellentesque rutrum, elit non feugiat porttitor, felis est bibendum dui, nec commodo felis quam ut neque. Morbi commodo neque in imperdiet efficitur. Maecenas sem urna, molestie fermentum finibus sit amet, pretium ut purus. Vivamus justo ex, egestas eu ullamcorper in, volutpat eu justo. Etiam vestibulum eros a nunc molestie, et efficitur lorem faucibus. Vestibulum at erat tempus, condimentum dui euismod, gravida lorem. Morbi et justo eros.
                  </p>
                  <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default HomePage;
