import React, { Component } from 'react';
import './App.css';
class Header extends Component {
  constructor() {
    super();
  }
  render() {

    return (
      <div>
        <body className="text-center">
          <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
            <header className="masthead mb-auto">
              <div className="inner">
                <h3 className="masthead-brand">Movie Record</h3>
                <nav className="nav nav-masthead justify-content-center">
                  <a className="nav-link" href="#">Login</a>
                  <a className="nav-link" href="#">Register</a>
                  <a className="nav-link active" href="">Form-test</a>
                </nav>
              </div>
            </header>
          </div>
        </body>
      </div>


    );
  }
}
export default Header;
